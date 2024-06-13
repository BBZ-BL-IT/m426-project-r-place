import Link from "next/link";
import { Tooltip } from "@nextui-org/tooltip";
import { confirmAlert } from "react-confirm-alert";
import "react-confirm-alert/src/react-confirm-alert.css";
import React from "react";

export default function AdminComponent() {
  const DeleteConfirmDialog = () => {
    confirmAlert({
      title: "Are you sure you want to delete the canvas?",
      buttons: [
        {
          label: "Yes",
          onClick: () => {
            // Logik
            console.log("Canvas deleted");
          },
        },
        {
          label: "No",
          onClick: () => console.log("Deletion canceled"),
        },
      ],
    });
  };

  return (
    <div className="mt-10 flex flex-row justify-end">
      <div className="mr-5">
        <Tooltip content="Delete single Pixel" placement="bottom">
          <button className="h-12 w-12 rounded-3xl bg-black p-2 dark:invert">
            <img src="/images/eraser.svg" alt="dashboard" />
          </button>
        </Tooltip>
      </div>
      <div>
        <Tooltip content="Delete Canvas" placement="bottom">
          <button
            onClick={DeleteConfirmDialog}
            className="h-12 w-12 rounded-3xl bg-black p-2 dark:invert"
          >
            <img src="/images/trashcan.svg" alt="dashboard" />
          </button>
        </Tooltip>
      </div>
    </div>
  );
}
