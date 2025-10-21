import { Bell, Moon, Sun, Shield } from 'lucide-react';

export default function TopNav({ role, roles, onChangeRole, theme, onToggleTheme }) {
  return (
    <header className="sticky top-0 z-50 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
        <div className="flex items-center gap-3">
          <div className="relative h-10 w-10">
            <div className="absolute inset-0 rounded-full bg-gradient-to-br from-sky-400 via-blue-500 to-indigo-600 shadow-lg" />
            <div className="absolute inset-[2px] rounded-full bg-white/10 ring-1 ring-white/20 backdrop-blur-md dark:bg-black/20" />
          </div>
          <div className="flex flex-col">
            <span className="text-sm tracking-wide text-slate-500 dark:text-slate-300">All-in-One PMS</span>
            <h1 className="text-lg font-semibold">Aurora Hotel Cloud</h1>
          </div>
        </div>
        <div className="flex items-center gap-2 sm:gap-4">
          <div className="hidden items-center gap-2 rounded-full bg-white/60 px-2 py-1 text-xs text-slate-700 ring-1 ring-slate-200 backdrop-blur dark:bg-white/5 dark:text-slate-200 dark:ring-white/10 sm:flex">
            <Shield className="h-3.5 w-3.5 text-sky-500" />
            <span className="font-medium">Role:</span>
            <select
              className="rounded-full bg-transparent px-2 py-1 outline-none"
              value={role}
              onChange={(e) => onChangeRole(e.target.value)}
            >
              {roles.map((r) => (
                <option key={r} value={r} className="bg-white dark:bg-slate-900">
                  {r}
                </option>
              ))}
            </select>
          </div>
          <button
            aria-label="Notifications"
            className="group relative grid h-10 w-10 place-items-center rounded-full bg-white/60 ring-1 ring-slate-200 backdrop-blur transition hover:scale-105 hover:ring-slate-300 dark:bg-white/5 dark:ring-white/10"
          >
            <Bell className="h-5 w-5 text-sky-600 dark:text-sky-300" />
            <span className="pointer-events-none absolute -right-0 -top-0 rounded-full bg-red-500 px-1.5 py-0.5 text-[10px] font-bold text-white shadow-sm">3</span>
          </button>
          <button
            onClick={onToggleTheme}
            aria-label="Toggle theme"
            className="grid h-10 w-10 place-items-center rounded-full bg-white/60 ring-1 ring-slate-200 backdrop-blur transition hover:scale-105 hover:ring-slate-300 dark:bg-white/5 dark:ring-white/10"
          >
            {theme === 'dark' ? (
              <Sun className="h-5 w-5 text-amber-400" />
            ) : (
              <Moon className="h-5 w-5 text-slate-700" />
            )}
          </button>
        </div>
      </div>
    </header>
  );
}
