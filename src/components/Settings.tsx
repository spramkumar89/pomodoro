function Settings() {
  return (
    <div className="relative h-full divide-y-2 divide-slate-600 rounded-3xl bg-slate-700 p-4 text-slate-300">
      <div className="flex justify-center p-3 text-lg tracking-widest">
        Settings
      </div>
      <div className="flex justify-between p-2 text-sm  hover:bg-slate-400 hover:text-slate-800">
        <div className="w-2/3">Pomodoro Time</div>
        <input
          type="text"
          className="w-1/3 py-1 rounded-md text-pink-500 bg-slate-400"
        />
      </div>
      <div className="flex justify-between p-2 text-sm  hover:bg-slate-400 hover:text-slate-800">
        <div className="w-2/3">Short Break Time</div>
        <input
          type="text"
          className="w-1/3 py-1 rounded-md text-pink-500 bg-slate-400"
        />
      </div>
      <div className="flex justify-between p-2 text-sm  hover:bg-slate-400 hover:text-slate-800">
        <div className="w-2/3">Long Break Time</div>
        <input
          type="text"
          className="w-1/3 py-1 rounded-md text-pink-500 bg-slate-400"
        />
      </div>

      <div className="absolute bottom-3.5 right-4 p-2 px-4 rounded-2xl bg-slate-500 text-base tracking-wider text-slate-300 uppercase">
        Save
      </div>

      <div className="absolute right-3 top-3 rounded-full bg-slate-800 p-1 shadow-2xl transition hover:delay-200 hover:scale-125 hover:bg-slate-900">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="fill-slate-800"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="bg-slate-800"
          className="h-5 w-5 stroke-1 stroke-slate-300"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M6 18L18 6M6 6l12 12"
          />
        </svg>
      </div>
    </div>
  );
}

export default Settings;
