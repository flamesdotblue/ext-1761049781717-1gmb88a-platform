import { Shield, Key, Lock } from 'lucide-react';

export default function RBACPanel({ role, roles, onChangeRole, catalogue, rolePermissions }) {
  const perms = new Set(rolePermissions[role] || []);

  return (
    <div className="rounded-3xl border border-white/10 bg-white/50 p-6 ring-1 ring-slate-200/40 backdrop-blur-lg dark:bg-white/5 dark:ring-white/10">
      <div className="mb-4 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="grid h-10 w-10 place-items-center rounded-2xl bg-white/70 ring-1 ring-white/60 backdrop-blur dark:bg-white/10 dark:ring-white/10">
            <Shield className="h-5 w-5 text-sky-600 dark:text-sky-300" />
          </div>
          <div>
            <h3 className="text-lg font-semibold">Role-Based Access Control</h3>
            <p className="text-sm text-slate-600 dark:text-slate-300">Switch roles to preview access across modules.</p>
          </div>
        </div>
        <div className="hidden items-center gap-2 sm:flex">
          <Key className="h-4 w-4 text-amber-500" />
          <span className="rounded-full bg-amber-500/20 px-2 py-0.5 text-xs font-semibold text-amber-700 dark:text-amber-300">Principle of Least Privilege</span>
        </div>
      </div>

      <div className="mb-5 flex flex-wrap gap-2">
        {roles.map((r) => (
          <button
            key={r}
            onClick={() => onChangeRole(r)}
            className={`rounded-full px-3 py-1.5 text-sm font-medium ring-1 transition ${
              r === role
                ? 'bg-sky-500 text-white ring-sky-400'
                : 'bg-white/50 text-slate-800 ring-slate-200 hover:bg-white/70 dark:bg-white/10 dark:text-slate-100 dark:ring-white/10'
            }`}
          >
            {r}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-1 gap-2 md:grid-cols-2 lg:grid-cols-3">
        {catalogue.map((p) => {
          const allowed = perms.has(p);
          return (
            <div
              key={p}
              className={`flex items-center justify-between rounded-2xl border p-3 text-sm ring-1 backdrop-blur ${
                allowed
                  ? 'border-emerald-500/20 bg-emerald-500/10 ring-emerald-500/20'
                  : 'border-rose-500/20 bg-rose-500/10 ring-rose-500/20'
              }`}
            >
              <span className="font-medium">{p}</span>
              {allowed ? (
                <span className="rounded-full bg-emerald-500/20 px-2 py-0.5 text-xs font-semibold text-emerald-700 dark:text-emerald-300">Allowed</span>
              ) : (
                <span className="inline-flex items-center gap-1 rounded-full bg-rose-500/20 px-2 py-0.5 text-xs font-semibold text-rose-700 dark:text-rose-300">
                  <Lock className="h-3.5 w-3.5" /> Blocked
                </span>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}
