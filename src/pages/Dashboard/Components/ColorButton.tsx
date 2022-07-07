import { styled } from "@mui/material/styles";
import Button from "@mui/material/Button";
import { red } from "@mui/material/colors";

export const RedButton = styled(Button)(({ theme }) => ({
  color: theme.palette.getContrastText(red[500]),
  backgroundColor: red[500],
  "&:hover": {
    backgroundColor: red[700],
  },
}));
