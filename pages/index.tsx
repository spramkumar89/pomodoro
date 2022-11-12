import Settings from "../src/components/Settings";
import Timer from "../src/components/Timer";
import TaskList from "../src/components/TaskList";

export default function Home() {
  return (
    <div className="h-screen w-screen p-6 flex justify-center bg-slate-900">
      <div className="flex h-full w-2/3 justify-center">
        <div className="m-2 w-1/2 rounded-3xl">
          <Timer />
        </div>
        <div className="m-2 w-1/2 rounded-3xl">
          <TaskList />
        </div>
      </div>
    </div>
  );
}
