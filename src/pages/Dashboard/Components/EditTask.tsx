import Dialog from "@mui/material/Dialog";
import DialogContent from "@mui/material/DialogContent";
import FormControlLabel from "@mui/material/FormControlLabel";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import Stack from "@mui/material/Stack";
import TextField from "@mui/material/TextField";
import React from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { editTask, tasksState } from "../../../redux/taskSlice";
import { RedButton } from "./ColorButton";

type Props = {
  open: boolean;
  handleClose: () => void;
  task: tasksState | undefined;
};

type Inputs = {
  title: string;
  description: string;
  gift: string;
  priority: string;
};

const EditTask = ({ open, handleClose, task }: Props) => {
  const dispatch = useDispatch();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<Inputs>();
  const onSubmit: SubmitHandler<Inputs> = (data) => {
    dispatch(
      editTask({
        id: task?.id,
        title: data.title,
        description: data.description,
        gift: data.gift,
        priority: data.priority,
      })
    );
    reset();
    handleClose();
  };

  return (
    <Dialog fullWidth maxWidth="lg" open={open} onClose={handleClose}>
      <DialogContent>
        <form onSubmit={handleSubmit(onSubmit)}>
          <TextField
            error={errors.title ? true : false}
            helperText={errors.title ? "Title is required" : false}
            fullWidth
            placeholder={task?.title}
            autoFocus
            margin="dense"
            id="title"
            label="Task Title"
            variant="outlined"
            {...register("title", { required: true })}
          />
          <TextField
            error={errors.description ? true : false}
            helperText={errors.description ? "Descrption is required" : false}
            fullWidth
            placeholder={task?.description}
            sx={{
              "& .MuiOutlinedInput-root": {
                height: "100px",
              },
            }}
            margin="dense"
            id="Description"
            label="Description"
            variant="outlined"
            {...register("description", { required: true })}
          />
          <TextField
            error={errors.gift ? true : false}
            helperText={errors.gift ? "Title is required" : false}
            fullWidth
            placeholder={task?.gift}
            margin="dense"
            id="Gift"
            label="Gift"
            variant="outlined"
            {...register("gift")}
          />
          <RadioGroup
            row
            sx={{
              margin: "10px 0px",
              justifyContent: "space-between",
            }}
            aria-labelledby="demo-row-radio-buttons-group-label"
            name="row-radio-buttons-group"
            defaultValue={task?.priority}
          >
            <FormControlLabel
              value="Low"
              control={<Radio {...register("priority")} />}
              label="Low"
            />
            <FormControlLabel
              value="Medium"
              control={<Radio {...register("priority")} />}
              label="Medium"
            />
            <FormControlLabel
              value="High"
              control={<Radio {...register("priority")} />}
              label="High"
            />
          </RadioGroup>

          <Stack width="100%" alignItems="center" spacing={2}>
            <RedButton
              type="submit"
              onClick={() => handleSubmit(onSubmit)}
              variant="contained"
            >
              Add To Tasks
            </RedButton>
          </Stack>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default React.memo(EditTask);
