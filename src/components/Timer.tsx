import Task from "./Task";
import { useSelector, useDispatch } from "react-redux";
import type { RootState } from "../redux/store";
import {
  addTask,
  saveSetting,
  setCurrentTime,
  updateTask,
} from "../redux/slice/PomodoroSlice";
import { useState } from "react";
import Countdown, { zeroPad } from "react-countdown";

function Timer(props) {
  const calculateTimeLeft = () => {
    let year = new Date().getFullYear();
    let difference = +new Date(`10/01/${year}`) - +new Date();

    let timeLeft = {};

    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    }

    return timeLeft;
  };

  let [selectedTime, setSelectedTime] = useState("");
  let [timeLeft, setTimeLeft] = useState(calculateTimeLeft());
  let currentTime = useSelector(
    (state: RootState) => state.pomodoro.settings.currentTime
  );
  let tasks = useSelector((state: RootState) => state.pomodoro.tasks);
  let pomodoroTime = useSelector(
    (state: RootState) => state.pomodoro.settings.pomodoroTime
  );
  let shortBreakTime = useSelector(
    (state: RootState) => state.pomodoro.settings.shortBreakTime
  );
  let longBreakTime = useSelector(
    (state: RootState) => state.pomodoro.settings.longBreakTime
  );
  const dispatch = useDispatch();

  function updateTime(selectedTime: string) {
    setSelectedTime(selectedTime);
    if (selectedTime == "pomodoro") {
      dispatch(setCurrentTime(pomodoroTime * 60 * 1000));
    } else if (selectedTime == "shortBreak") {
      dispatch(setCurrentTime(shortBreakTime * 60 * 1000));
    } else {
      dispatch(setCurrentTime(longBreakTime * 60 * 1000));
    }
  }

  let countdownApi;
  function setRef(countdown) {
    if (countdown) {
      countdownApi = countdown.getApi();
    }
  }

  const renderer = ({ minutes, seconds }) => {
    return (
      <span>
        {zeroPad(minutes)}:{zeroPad(seconds)}
      </span>
    );
  };

  return (
    <>
      <div className="relative h-1/3 rounded-t-3xl bg-slate-400">
        <div className="flex h-1/4 items-center justify-between px-16 text-slate-800">
          <div
            className={`rounded-lg px-2 hover:bg-slate-300 ${
              selectedTime == "pomodoro" ? "bg-slate-300" : ""
            } cursor-pointer`}
            onClick={() => updateTime("pomodoro")}
          >
            Pomodoro
          </div>
          <div
            className={`rounded-lg px-2 hover:bg-slate-300 ${
              selectedTime == "shortBreak" ? "bg-slate-300" : ""
            } cursor-pointer`}
            onClick={() => updateTime("shortBreak")}
          >
            Short Break
          </div>
          <div
            className={`rounded-lg px-2 hover:bg-slate-300 ${
              selectedTime == "longBreak" ? "bg-slate-300" : ""
            } cursor-pointer`}
            onClick={() => updateTime("longBreak")}
          >
            Long Break
          </div>
        </div>
        <div className="flex h-2/4 items-center justify-center text-9xl text-slate-600">
          <Countdown
            date={Date.now() + currentTime}
            ref={setRef}
            renderer={renderer}
            autoStart={false}
          />
        </div>
        <div className="flex h-1/4 justify-center items-center py-8">
          <button
            className="py-1 px-4 rounded-xl bg-slate-700 text-lg text-slate-400 font-extrabold hover:bg-slate-500 hover:text-slate-600"
            onClick={() => countdownApi.start()}
          >
            START
          </button>
        </div>
        <div
          className="absolute bottom-2 right-2 transition hover:delay-200 hover:rotate-90"
          onClick={() => props.view(true)}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="w-10 h-10 stroke-1 stroke-slate-700"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M10.343 3.94c.09-.542.56-.94 1.11-.94h1.093c.55 0 1.02.398 1.11.94l.149.894c.07.424.384.764.78.93.398.164.855.142 1.205-.108l.737-.527a1.125 1.125 0 011.45.12l.773.774c.39.389.44 1.002.12 1.45l-.527.737c-.25.35-.272.806-.107 1.204.165.397.505.71.93.78l.893.15c.543.09.94.56.94 1.109v1.094c0 .55-.397 1.02-.94 1.11l-.893.149c-.425.07-.765.383-.93.78-.165.398-.143.854.107 1.204l.527.738c.32.447.269 1.06-.12 1.45l-.774.773a1.125 1.125 0 01-1.449.12l-.738-.527c-.35-.25-.806-.272-1.203-.107-.397.165-.71.505-.781.929l-.149.894c-.09.542-.56.94-1.11.94h-1.094c-.55 0-1.019-.398-1.11-.94l-.148-.894c-.071-.424-.384-.764-.781-.93-.398-.164-.854-.142-1.204.108l-.738.527c-.447.32-1.06.269-1.45-.12l-.773-.774a1.125 1.125 0 01-.12-1.45l.527-.737c.25-.35.273-.806.108-1.204-.165-.397-.505-.71-.93-.78l-.894-.15c-.542-.09-.94-.56-.94-1.109v-1.094c0-.55.398-1.02.94-1.11l.894-.149c.424-.07.765-.383.93-.78.165-.398.143-.854-.107-1.204l-.527-.738a1.125 1.125 0 01.12-1.45l.773-.773a1.125 1.125 0 011.45-.12l.737.527c.35.25.807.272 1.204.107.397-.165.71-.505.78-.929l.15-.894z"
            />
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
            />
          </svg>
        </div>
      </div>

      <div className="h-2/3 rounded-b-3xl bg-slate-800 p-6">
        <div className="h-full divide-y-2 overflow-y-auto rounded-3xl bg-slate-700 p-4 text-slate-300 divide-slate-600">
          {tasks.map((task, index) => (
            <Task key={index} task={task} />
          ))}
        </div>
      </div>
    </>
  );
}

export default Timer;
