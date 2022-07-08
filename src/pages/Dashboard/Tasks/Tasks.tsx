import AddIcon from "@mui/icons-material/Add";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Fab from "@mui/material/Fab";
import Stack from "@mui/material/Stack";
import React from "react";
import { useSelector } from "react-redux";
import type { tasksState } from "../../../redux/taskSlice";
import type { RootState } from "../../../store";
import AddTask from "../Components/AddTask";
import DoneTaskModal from "../Components/DoneTaskModal";
import EditTask from "../Components/EditTask";
import TaskCard from "../Components/TaskCard";
import TaskDetail from "../Components/TaskDetail";

const Tasks = () => {
  const [open, setOpen] = React.useState(false);
  const [openEdit, setOpenEdit] = React.useState(false);
  const [openDetail, setOpenDetail] = React.useState(false);
  const [selectedTask, setSelectedTask] = React.useState<tasksState>();
  const [openDoneTask, setOpenDoneTask] = React.useState(false);
  const tasks = useSelector((state: RootState) => {
    return state.tasks;
  });

  // open and clode add task modal
  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  // open and close Done Task Modal
  const handleDoneTaskOpen = () => {
    let doneTask = tasks.filter((elem) => elem.completed);
    if (doneTask.length > 0) {
      setOpenDoneTask(true);
    }
  };
  const handleDoneTaskClose = () => {
    setOpenDoneTask(false);
  };

  // open and close edit task modal
  const handleEditOpen = (task: tasksState) => {
    setSelectedTask(task);
    setOpenEdit(true);
  };
  const handleEditClose = () => {
    setSelectedTask(undefined);
    setOpenEdit(false);
  };

  //open and close task detail modal
  const handleDetailOpen = (task: tasksState) => {
    setSelectedTask(task);
    setOpenDetail(true);
  };

  const handleDetailClose = () => {
    setOpenDetail(false);
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
          <React.Fragment key={index}>
            <TaskCard
              handleDetailOpen={handleDetailOpen}
              handleEditOpen={handleEditOpen}
              task={task}
            />
          </React.Fragment>
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
      <EditTask
        open={openEdit}
        handleClose={handleEditClose}
        task={selectedTask}
      />
      <DoneTaskModal open={openDoneTask} handleClose={handleDoneTaskClose} />
      <TaskDetail
        open={openDetail}
        handleEditOpen={handleEditOpen}
        handleClose={handleDetailClose}
        task={selectedTask}
      />
    </>
  );
};

export default React.memo(Tasks);
