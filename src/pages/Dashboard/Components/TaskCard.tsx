import React from "react";
import type { tasksState } from "../../../redux/taskSlice";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Chip from "@mui/material/Chip";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import EditTask from "./EditTask";
import { completeTask } from "../../../redux/taskSlice";
import { useDispatch } from "react-redux";

type Props = {
  index: number;
  task: tasksState;
};

const TaskCard = ({ index, task }: Props) => {
  const [open, setOpen] = React.useState(false);
  const [selectedTask, setSelectedTask] = React.useState<tasksState>();
  const dispatch = useDispatch();

  const handleClickOpen = (task: tasksState) => {
    setSelectedTask(task);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  return (
    <Box
      sx={{ m: 2, p: 2, border: "1px solid #ccc", borderRadius: 5 }}
      key={index}
      display="flex"
    >
      <Box flex="1 1 auto">
        <Typography variant="h6" gutterBottom component="div">
          {task.title}
        </Typography>
        <Typography color="gray" variant="button" display="block" gutterBottom>
          {task.description}
        </Typography>
      </Box>
      <Stack
        direction="column"
        justifyContent="center"
        alignItems="flex-end"
        spacing={2}
      >
        <Box display="block">
          <Chip
            label={task.priority}
            color={
              task.priority === "Low"
                ? "success"
                : task.priority === "Medium"
                ? "warning"
                : "error"
            }
          />
        </Box>
        <Stack direction="row" spacing={2}>
          <Button
            onClick={() => {
              dispatch(completeTask({ id: task?.id }));
            }}
            variant="contained"
            color="warning"
          >
            Done Task
          </Button>
          <Button
            onClick={() => handleClickOpen(task)}
            variant="contained"
            color="success"
          >
            Edit Task
          </Button>
        </Stack>
      </Stack>
      <EditTask open={open} handleClose={handleClose} task={selectedTask} />
    </Box>
  );
};

export default React.memo(TaskCard);
