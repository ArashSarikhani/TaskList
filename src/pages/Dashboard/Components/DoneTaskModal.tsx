import React from "react";
import Dialog from "@mui/material/Dialog";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import { useSelector } from "react-redux";
import type { RootState } from "../../../store";
import DoneTaskCard from "./DoneTaskCard";

type Props = {
  open: boolean;
  handleClose: () => void;
};

const DoneTaskModal = ({ open, handleClose }: Props) => {
  const tasks = useSelector((state: RootState) => {
    return state.tasks;
  });
  return (
    <Dialog maxWidth="lg" open={open} onClose={handleClose}>
      <DialogTitle>Done Task</DialogTitle>
      <DialogContent>
        {tasks
          .filter((elem) => elem.completed)
          .map((task, index) => (
            <DoneTaskCard index={index} task={task} />
          ))}
      </DialogContent>
    </Dialog>
  );
};

export default React.memo(DoneTaskModal);
