import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

interface Task {
  taskName: string;
  completedTime: string;
  numberOfPomodoros: number;
  isCompleted: boolean;
}

interface Setting {
  pomodoroTime: number;
  shortBreakTime: number;
  longBreakTime: number;
  currentTime: number;
}

interface PomodoroState {
  taskHistory: Task[];
  tasks: Task[];
  settings: Setting;
}

const initialState: PomodoroState = {
  taskHistory: [],
  tasks: [],
  settings: {
    pomodoroTime: 25,
    shortBreakTime: 5,
    longBreakTime: 15,
    currentTime: 0,
  },
};

export const PomodoroSlice = createSlice({
  name: "pomodoro",
  initialState,
  reducers: {
    addTask: (state, action: PayloadAction<Task>) => {
      state.tasks.push(action.payload);
    },
    setCurrentTime: (state, action: PayloadAction<number>) => {
      state.settings.currentTime = action.payload;
    },
    updateTask: (state, action: PayloadAction<Task>) => {
      let index: number = state.tasks.findIndex((item: Task) => {
        return item.taskName === action.payload.taskName;
      });
      state.tasks[index] = action.payload;
    },
    saveSetting: (state, action: PayloadAction<Setting>) => {
      state.settings = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { addTask, setCurrentTime, updateTask, saveSetting } =
  PomodoroSlice.actions;

export default PomodoroSlice.reducer;
