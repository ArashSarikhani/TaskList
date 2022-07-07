import React from "react";
import CssBaseline from "@mui/material/CssBaseline";
import { useSelector } from "react-redux";
import type { RootState } from "../../store";
import NoTaskState from "./NoTaskState/NoTaskState";
import Tasks from "./Tasks/Tasks";
type Props = {};

const Dashboard = (props: Props) => {
  const tasks = useSelector((state: RootState) => {
    return state.tasks;
  });
  return (
    <React.Fragment>
      <CssBaseline />
      {tasks?.length > 0 ? <Tasks /> : <NoTaskState />}
    </React.Fragment>
  );
};

export default Dashboard;
