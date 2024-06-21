import { Tooltip } from "@nextui-org/tooltip";
import { confirmAlert } from "react-confirm-alert";
import "react-confirm-alert/src/react-confirm-alert.css";
import React, { useEffect, useState } from "react";
import { deleteCanvas } from "@/app/lib/actions";
import { AdminComponentProps } from "@/app/lib/definitions";

export default function AdminComponent({
  onDeleteSingleActive,
}: AdminComponentProps) {
  const [active, setActive] = useState(false);

  const DeleteConfirmDialog = () => {
    confirmAlert({
      title: "Are you sure you want to delete the canvas?",
      buttons: [
        {
          label: "Yes",
          onClick: () => deleteCanvas(),
        },
        {
          label: "No",
        },
      ],
    });
  };

  const changeActive = () => {
    if (!active) {
      setActive(true);
    } else if (active) {
      setActive(false);
    }
  };

  useEffect(() => {
    onDeleteSingleActive(active);
  }, [active]);

  return (
    <div className="mt-10 flex flex-row justify-end">
      <div className="mr-5">
        <Tooltip content="Delete single Pixel" placement="bottom">
          <button
            className={`${active ? "border-4 border-red-500" : ""} h - 12 w-12 rounded-3xl bg-black p-2 transition-all hover:scale-110 dark:bg-white`}
            onClick={() => changeActive()}
          >
            <img
              className="dark:invert"
              src="/images/eraser.svg"
              alt="dashboard"
            />
          </button>
        </Tooltip>
      </div>
      <div>
        <Tooltip content="Delete Canvas" placement="bottom">
          <button
            onClick={DeleteConfirmDialog}
            className="h-12 w-12 rounded-3xl bg-black p-2 transition-all hover:scale-110 dark:invert"
          >
            <img src="/images/trashcan.svg" alt="dashboard" />
          </button>
        </Tooltip>
      </div>
    </div>
  );
}
