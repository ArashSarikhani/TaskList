import { createSlice } from "@reduxjs/toolkit";

export interface tasksState {
  id: number;
  title: string;
  description: string;
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
        id: Date.now(),
        title: action.payload.title,
        description: action.payload.description,
        completed: false,
        gift: action.payload.gift,
        priority: action.payload.priority,
      };
      state.push(newTask);
    },
    editTask: (state, action) => {
      const index = state.findIndex((elem) => elem.id === action.payload.id);
      if (index !== -1) {
        state[index].title = action.payload.title;
        state[index].description = action.payload.description;
        state[index].gift = action.payload.gift;
        state[index].priority = action.payload.priority;
      }
    },
    completeTask: (state, action) => {
      const index = state.findIndex((elem) => elem.id === action.payload.id);
      if (index !== -1) {
        state[index].completed = true;
      }
    },
    deleteTask: (state, action) => {
      return state.filter((item) => item.id !== action.payload.id);
    },
  },
});

// Action creators are generated for each case reducer function
export const { addTask, deleteTask, editTask, completeTask } =
  tasksSlice.actions;

export default tasksSlice.reducer;
