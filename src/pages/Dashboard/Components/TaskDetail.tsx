import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import React from "react";
import { tasksState } from "../../../redux/taskSlice";
import Stack from "@mui/material/Stack";
import { useDispatch } from "react-redux";
import { completeTask, deleteTask } from "../../../redux/taskSlice";

type Props = {
  open: boolean;
  handleClose: () => void;
  handleEditOpen: (task: tasksState) => void;
  task: tasksState | undefined;
};

const TaskDetail = ({ open, handleClose, task, handleEditOpen }: Props) => {
  const dispatch = useDispatch();

  return (
    <Dialog
      open={open}
      onClose={handleClose}
      aria-labelledby="alert-dialog-title"
      aria-describedby="alert-dialog-description"
    >
      <DialogTitle id="alert-dialog-title">{task?.title}</DialogTitle>
      <DialogContent>
        <DialogContentText id="alert-dialog-description">
          {task?.description}
        </DialogContentText>
      </DialogContent>
      <DialogActions>
        <Stack direction="row" spacing={2}>
          <Button
            onClick={() => {
              if (task) {
                handleEditOpen(task);
                handleClose();
              }
            }}
            variant="contained"
            color="success"
          >
            Edit Task
          </Button>
          <Button
            onClick={() => {
              dispatch(completeTask({ id: task?.id }));
              handleClose();
            }}
            variant="contained"
            color="warning"
          >
            Done Task
          </Button>
          <Button
            onClick={() => {
              dispatch(deleteTask({ id: task?.id }));
              handleClose();
            }}
            variant="contained"
            color="error"
          >
            Delete Task
          </Button>
        </Stack>
      </DialogActions>
    </Dialog>
  );
};

export default React.memo(TaskDetail);
