function Task(props: any) {
  return (
    <div className="flex justify-between p-2 text-sm hover:bg-slate-400 hover:rounded-sm hover:text-slate-800">
      <span className="font-mono">{props.task.taskName}</span>
      <span className="font-mono">{props.task.numberOfPomodoros}</span>
    </div>
  );
}

export default Task;
