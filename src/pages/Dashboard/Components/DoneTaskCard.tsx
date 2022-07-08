import Box from "@mui/material/Box";
import Chip from "@mui/material/Chip";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import React from "react";
import type { tasksState } from "../../../redux/taskSlice";

type Props = {
  index: number;
  task: tasksState;
};

const DoneTaskCard = ({ index, task }: Props) => {
  return (
    <Box
      sx={{
        p: 2,
        mb: 2,
        width: 400,
        border: "1px solid #ccc",
        borderRadius: 5,
      }}
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
      </Stack>
    </Box>
  );
};

export default React.memo(DoneTaskCard);
