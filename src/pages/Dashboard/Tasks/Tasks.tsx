import AddIcon from "@mui/icons-material/Add";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Fab from "@mui/material/Fab";
import Stack from "@mui/material/Stack";
import React from "react";
import { useSelector } from "react-redux";
import type { RootState } from "../../../store";
import AddTask from "../Components/AddTask";
import DoneTaskModal from "../Components/DoneTaskModal";
import TaskCard from "../Components/TaskCard";

const Tasks = () => {
  const [open, setOpen] = React.useState(false);
  const [openDoneTask, setOpenDoneTask] = React.useState(false);
  const tasks = useSelector((state: RootState) => {
    return state.tasks;
  });
  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleDoneTaskOpen = () => {
    let doneTask = tasks.filter((elem) => elem.completed);
    if (doneTask.length > 0) {
      setOpenDoneTask(true);
    }
  };

  const handleClose = () => {
    setOpen(false);
  };
  const handleDoneTaskClose = () => {
    setOpenDoneTask(false);
  };
  return (
    <>
      <Stack alignItems="center" direction="row" spacing={3}>
        <Box margin="1rem" sx={{ position: "absolute" }}>
          <Button onClick={handleDoneTaskOpen} variant="contained">
            View Done Tasks
          </Button>
        </Box>
        <Box display="flex" justifyContent="center" flex="1">
          <p>Hello World</p>
        </Box>
      </Stack>
      {tasks
        .filter((elem) => !elem.completed)
        .map((task, index) => (
          <TaskCard index={index} task={task} />
        ))}
      <Box
        sx={{
          position: "absolute",
          right: 0,
          bottom: 0,

          "& > :not(style)": { m: 1 },
        }}
      >
        <Fab onClick={handleClickOpen} color="secondary" aria-label="add">
          <AddIcon />
        </Fab>
      </Box>
      <AddTask open={open} handleClose={handleClose} />
      <DoneTaskModal open={openDoneTask} handleClose={handleDoneTaskClose} />
    </>
  );
};

export default React.memo(Tasks);
