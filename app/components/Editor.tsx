"use client";

import Canvas from "@/app/components/Canvas";
import { PixelType } from "@/app/lib/definitions";
import { useState } from "react";
import { CirclePicker } from "react-color";
import AdminComponent from "@/app/components/AdminComponent";
import { savePixelsToDb } from "@/app/lib/actions";
import Countdown, { CountdownApi } from "react-countdown";

interface EditorProps {
  pixelData: PixelType[];
}

export default function Editor({ pixelData }: EditorProps) {
  const [hex, setHex] = useState("#000000");
  const [showColorPicker, setShowColorPicker] = useState(true);
  const [countdownApi, setCountdownApi] = useState<CountdownApi | null>(null);
  const [userAllowed, setUserAllowed] = useState(true);
  const [endTime, setEndTime] = useState<number | string | Date | undefined>(
    Date.now() + 10000,
  );

  const colors = [
    "#e6194b",
    "#f58231",
    "#ffe119",
    "#bcf60c",
    "#3cb44b",
    "#aaffc3",
    "#46f0f0",
    "#008080",
    "#4363d8",
    "#000075",
    "#911eb4",
    "#f032e6",
    "#e6beff",
    "#fabebe",
    "#fffac8",
    "#9a6324",
    "#808000",
    "#808080",
    "#000000",
    "#ffffff",
  ];

  const handlePixelUpdate = (pixel: PixelType) => {
    if (userAllowed && hex != "deleteSingle") {
      savePixelsToDb(pixel.x, pixel.y, hex);
      if (countdownApi) {
        setEndTime(Date.now() + 10000);
        setUserAllowed(false);
        countdownApi.start();
      }
    }

    if (hex === "deleteSingle") {
      savePixelsToDb(pixel.x, pixel.y, hex);
    }
  };

  const handleAdminDeleteSingle = (active: boolean) => {
    if (active) {
      setHex("deleteSingle");
      setShowColorPicker(false);
    } else {
      setShowColorPicker(true);
      setHex("#000000");
    }
  };

  const setRef = (countdown: Countdown | null): void => {
    if (countdown) {
      setCountdownApi(countdown.getApi());
    }
  };

  return (
    <div className="flex flex-row">
      <Canvas
        pixelData={pixelData}
        showOverlay={true}
        onPixelClick={handlePixelUpdate}
      />
      <div className="ml-20 content-center">
        <div className="mb-10 flex items-center justify-center text-3xl">
          <Countdown
            className={`${userAllowed ? "text-green-500" : "text-red-500"} rounded-xl p-1 font-bold transition-all`}
            date={endTime}
            ref={setRef}
            onComplete={() => setUserAllowed(true)}
            autoStart={false}
            daysInHours={true}
          />
        </div>
        <div
          className={`h-[210px] w-[260px] content-center rounded-2xl bg-gray-200 pl-4 transition-all dark:bg-gray-700`}
          style={{ border: `5px solid ${hex}` }}
        >
          {showColorPicker ? (
            <CirclePicker
              colors={colors}
              color={hex}
              circleSize={32}
              onChange={(color) => {
                setHex(color.hex);
              }}
            />
          ) : (
            <div>Exit pixel deletion mode to set colors!</div>
          )}
        </div>
        <AdminComponent onDeleteSingleActive={handleAdminDeleteSingle} />
      </div>
    </div>
  );
}
