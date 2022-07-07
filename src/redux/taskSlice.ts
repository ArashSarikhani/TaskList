import { createSlice } from "@reduxjs/toolkit";

export interface tasksState {
  id: any;
  title: string;
  descrption: string;
  completed: boolean;
  gift: string;
  priority: string;
}

const initialState: tasksState[] = [];

export const tasksSlice = createSlice({
  name: "tasks",
  initialState,
  reducers: {
    addTask: (state, action) => {
      const newTask: tasksState = {
        id: new Date(),
        title: action.payload.title,
        descrption: action.payload.descrption,
        completed: false,
        gift: action.payload.gift,
        priority: action.payload.priority,
      };
      state.push(newTask);
    },
    deleteTask: (state, action) => {
      return state.filter((item) => item.id !== action.payload.id);
    },
  },
});

// Action creators are generated for each case reducer function
export const { addTask, deleteTask } = tasksSlice.actions;

export default tasksSlice.reducer;
