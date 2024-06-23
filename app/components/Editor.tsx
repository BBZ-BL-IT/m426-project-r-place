"use client";

import AdminComponent from "@/app/components/AdminComponent";
import Canvas from "@/app/components/Canvas";
import { savePixelsToDb } from "@/app/lib/actions";
import { PixelType } from "@/app/lib/definitions";
import { createClient } from "@/app/lib/supabase/client";
import { useEffect, useState } from "react";
import { CirclePicker } from "react-color";
import Countdown, { CountdownApi } from "react-countdown";

interface EditorProps {
  pixelData: PixelType[];
}

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

export default function Editor({ pixelData: initialPixelData }: EditorProps) {
  const [pixelData] = useState(initialPixelData);
  const supabase = createClient();
  const [pixels, setPixels] = useState<PixelType[]>(pixelData);
  const [hex, setHex] = useState("#000000");
  const [showColorPicker, setShowColorPicker] = useState(true);
  const [countdownApi, setCountdownApi] = useState<CountdownApi | null>(null);
  const [userAllowed, setUserAllowed] = useState(true);
  const [godModeActive, setGodModeActive] = useState(false);
  const [, setClickCount] = useState(0);
  const [endTime, setEndTime] = useState<number | string | Date | undefined>(
    Date.now() + 10000,
  );

  const handlePixelUpdate = (pixel: PixelType) => {
    if (userAllowed && hex !== "deleteSingle") {
      savePixelsToDb(pixel.x, pixel.y, hex);
      if (countdownApi && !godModeActive) {
        setEndTime(Date.now() + 10000);
        countdownApi.start();
        setUserAllowed(false);
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

  const handleDeleteEvent = (payload: any) => {
    setPixels((prevPixels) =>
      prevPixels.filter((pixel) => pixel.id !== payload.old.id),
    );
  };

  const handleUpdateEvent = (payload: any) => {
    setPixels((prevPixels) =>
      prevPixels.map((pixel) =>
        pixel.id === payload.old.id
          ? { ...pixel, color: payload.new.color }
          : pixel,
      ),
    );
  };

  const handleInsertEvent = (payload: any) => {
    setPixels((prevPixels) => [
      ...prevPixels,
      {
        id: payload.new.id,
        x: payload.new.x_position,
        y: payload.new.y_position,
        color: payload.new.color,
      },
    ]);
  };

  const handleTimerClick = () => {
    setClickCount((prevCount) => {
      const newCount = prevCount + 1;
      if (newCount === 10) {
        setGodModeActive(true);
        console.log("God mode activated!");
        return 0;
      }
      return newCount;
    });
  };

  useEffect(() => {
    const channel = supabase
      .channel("schema-db-changes")
      .on(
        "postgres_changes",
        {
          event: "*",
          schema: "public",
        },
        (payload: any) => {
          if (payload.eventType === "DELETE") {
            handleDeleteEvent(payload);
          } else if (payload.eventType === "UPDATE") {
            handleUpdateEvent(payload);
          } else {
            handleInsertEvent(payload);
          }
        },
      )
      .subscribe();
    return () => {
      supabase.removeChannel(channel);
    };
  }, [supabase]);

  useEffect(() => {
    if (countdownApi) {
      setEndTime(Date.now() + 10000);
      countdownApi.start();
      setUserAllowed(false);
    }
  }, [countdownApi]);

  return (
    <div className="flex flex-row">
      <Canvas
        pixelData={pixels}
        showOverlay={true}
        onPixelClick={handlePixelUpdate}
      />
      <div className="ml-20 content-center">
        <div
          className="mb-10 flex items-center justify-center text-3xl"
          onClick={handleTimerClick}
        >
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
