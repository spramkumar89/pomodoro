import { useState } from "react";
import { useAppSelector, useAppDispatch } from "../redux/hooks";
import type { RootState } from "../redux/store";
import {
  addTask,
  saveSetting,
  setCurrentTime,
  updateTask,
} from "../redux/slice/PomodoroSlice";
import Task from "./Task";

interface Task {
  taskName: string;
  completedTime: string;
  numberOfPomodoros: number;
  isCompleted: boolean;
}

function TaskList() {
  let [addTaskView, setAddTaskView] = useState(false);
  const dispatch = useAppDispatch();
  let [newTask, setNewTask] = useState("");
  let tasks = useAppSelector((state: RootState) => state.pomodoro.tasks);
  function formatTask() {
    let tempNewTask: Task = {
      taskName: newTask,
      completedTime: "",
      numberOfPomodoros: 1,
      isCompleted: false,
    };
    return tempNewTask;
  }

  return (
    <div className="relative h-full">
      <div className="h-full overflow-y-auto divide-y-2 rounded-3xl p-4 text-sm bg-slate-700 text-slate-300 divide-slate-600">
        {tasks.map((task, index) => (
          <Task key={index} task={task} />
        ))}
      </div>

      <div
        className={`${
          addTaskView ? "hidden" : "block"
        } absolute right-4 bottom-4 rounded-full bg-slate-800 p-2 shadow-2xl transition hover:delay-200 hover:scale-110 hover:bg-slate-900`}
        onClick={() => {
          setAddTaskView(true);
        }}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="currentColor"
          className="w-6 h-6 text-slate-500"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M12 4.5v15m7.5-7.5h-15"
          />
        </svg>
      </div>

      <div
        className={`${
          addTaskView ? "block" : "hidden"
        } absolute bottom-0 left-0 h-1/3 w-full rounded-b-3xl bg-slate-800 p-4 transition delay-200`}
      >
        <div className="flex w-full flex-col">
          <div className="p-2 text-slate-400">Add Task</div>
          <input
            type="text"
            className="rounded-md py-6 bg-slate-300 p-2 text-slate-800"
            onChange={(event) => {
              setNewTask(event.target.value);
            }}
            value={newTask}
          />
          <div className="flex justify-end">
            <button
              className="w-1/4 mt-4 mx-2 rounded-lg bg-slate-500 p-2 px-8 text-slate-200"
              onClick={() => {
                setNewTask("");
                setAddTaskView(false);
              }}
            >
              Cancel
            </button>
            <button
              className="w-1/4 mt-4 rounded-lg bg-slate-500 p-2 px-8 text-slate-200"
              onClick={() => {
                if (newTask.length > 0) {
                  dispatch(addTask(formatTask()));
                  setAddTaskView(false);
                }
              }}
            >
              Add
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TaskList;
