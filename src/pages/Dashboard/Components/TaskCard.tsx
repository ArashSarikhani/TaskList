import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Chip from "@mui/material/Chip";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import React from "react";
import { useDispatch } from "react-redux";
import type { tasksState } from "../../../redux/taskSlice";
import { completeTask } from "../../../redux/taskSlice";

type Props = {
  task: tasksState;
  handleEditOpen: (task: tasksState) => void;
  handleDetailOpen: (task: tasksState) => void;
};

const TaskCard = ({ task, handleEditOpen, handleDetailOpen }: Props) => {
  const dispatch = useDispatch();

  return (
    <Box
      sx={{
        cursor: "pointer",
        m: 2,
        p: 2,
        border: "1px solid #ccc",
        borderRadius: 5,
      }}
      display="flex"
      onClick={() => {
        handleDetailOpen(task);
      }}
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
            onClick={(event) => {
              event.stopPropagation();
              dispatch(completeTask({ id: task?.id }));
            }}
            variant="contained"
            color="warning"
          >
            Done Task
          </Button>
          <Button
            onClick={(event) => {
              event.stopPropagation();
              handleEditOpen(task);
            }}
            variant="contained"
            color="success"
          >
            Edit Task
          </Button>
        </Stack>
      </Stack>
    </Box>
  );
};

export default React.memo(TaskCard);
