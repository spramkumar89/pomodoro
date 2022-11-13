import Settings from "../src/components/Settings";
import Timer from "../src/components/Timer";
import TaskList from "../src/components/TaskList";
import { useState } from "react";

export default function Home() {
  let [settingsView, setSettingsView] = useState(false);
  return (
    <div className="h-screen w-screen p-6 flex justify-center bg-slate-900">
      <div className="flex h-full w-2/3 justify-center">
        <div className="m-2 w-1/2 rounded-3xl">
          <Timer view={setSettingsView} />
        </div>
        <div className="m-2 w-1/2 rounded-3xl">
          {settingsView ? <Settings view={setSettingsView} /> : <TaskList />}
        </div>
      </div>
    </div>
  );
}
