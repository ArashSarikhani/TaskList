import React from "react";
import Stack from "@mui/material/Stack";
import AddTask from "../Components/AddTask";
import { RedButton } from "../Components/ColorButton";

const NoTaskState = () => {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <Stack
      direction="column"
      justifyContent="center"
      alignItems="center"
      spacing={12}
    >
      <p>Hello World</p>
      <RedButton onClick={handleClickOpen} variant="contained">
        Create Your First Task ;)
      </RedButton>
      <AddTask open={open} handleClose={handleClose} />
    </Stack>
  );
};

export default React.memo(NoTaskState);
