"use client";

import Canvas from "@/app/components/Canvas";
import { PixelType } from "@/app/lib/definitions";
import { useState } from "react";
import { CirclePicker } from "react-color";
import AdminComponent from "@/app/components/AdminComponent";
import { savePixelsToDb } from "@/app/lib/actions";

interface EditorProps {
  pixelData: PixelType[];
}

export default function Editor({ pixelData }: EditorProps) {
  const [hex, setHex] = useState("#000000");
  const [showColorPicker, setShowColorPicker] = useState(true);

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
    savePixelsToDb(pixel.x, pixel.y, hex);
  };

  const handleAdminDeleteSingle = (active: boolean) => {
    console.log("Editor: ", active);
    if (active) {
      setHex("deleteSingle");
      setShowColorPicker(false);
    } else {
      setShowColorPicker(true);
      setHex("#000000");
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
        <div className="h-[250px] w-[250px] content-center rounded-2xl bg-gray-200 pl-4 dark:bg-gray-700">
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
