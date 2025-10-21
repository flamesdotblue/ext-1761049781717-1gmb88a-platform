import { Home, Bed, Calendar, ClipboardList, BarChart3, Users, Settings, Shield, Phone, Wifi, CreditCard, Building2, Lock, Wrench, Brush } from 'lucide-react';

function ModuleCard({ title, desc, icon: Icon, tone = 'sky', accessible }) {
  const toneMap = {
    sky: 'from-sky-400 to-blue-600',
    emerald: 'from-emerald-400 to-teal-600',
    violet: 'from-violet-400 to-fuchsia-600',
    amber: 'from-amber-400 to-orange-600',
    rose: 'from-rose-400 to-pink-600',
  };
  return (
    <div className="relative rounded-3xl border border-white/10 bg-white/50 p-4 shadow-xl ring-1 ring-slate-200/40 backdrop-blur-lg transition hover:shadow-2xl dark:bg-white/5 dark:ring-white/10">
      <div className={`absolute -right-3 -top-3 h-16 w-16 rounded-full bg-gradient-to-br ${toneMap[tone]} opacity-80 blur-xl`} />
      <div className="relative flex items-start gap-3">
        <div className="grid h-12 w-12 place-items-center rounded-2xl bg-white/70 ring-1 ring-white/60 backdrop-blur dark:bg-white/10 dark:ring-white/10">
          {accessible ? (
            <Icon className="h-6 w-6 text-sky-600 dark:text-sky-300" />
          ) : (
            <Lock className="h-6 w-6 text-slate-400" />
          )}
        </div>
        <div className="flex-1">
          <div className="flex items-center gap-2">
            <h3 className="text-base font-semibold">{title}</h3>
            {accessible ? (
              <span className="inline-flex items-center rounded-full bg-emerald-500/20 px-2 py-0.5 text-xs font-semibold text-emerald-600 ring-1 ring-emerald-500/30 dark:text-emerald-300">Allowed</span>
            ) : (
              <span className="inline-flex items-center rounded-full bg-rose-500/20 px-2 py-0.5 text-xs font-semibold text-rose-600 ring-1 ring-rose-500/30 dark:text-rose-300">Restricted</span>
            )}
          </div>
          <p className="mt-1 text-sm text-slate-600 dark:text-slate-300">{desc}</p>
        </div>
      </div>
    </div>
  );
}

export default function Dashboard({ role, can }) {
  const cards = [
    {
      title: 'Reservations & Front Desk',
      desc: 'CRS, bookings, check-in/out, folios, upsells.',
      icon: Home,
      tone: 'sky',
      accessible: can('reservations:view'),
    },
    {
      title: 'Housekeeping',
      desc: 'Real-time room status, task lists, inspections.',
      icon: Brush,
      tone: 'emerald',
      accessible: can('housekeeping:tasks'),
    },
    {
      title: 'Maintenance',
      desc: 'Work orders, preventive maintenance.',
      icon: Wrench,
      tone: 'amber',
      accessible: can('maintenance:workorders'),
    },
    {
      title: 'Revenue & Rates',
      desc: 'Dynamic pricing, channels, KPIs.',
      icon: BarChart3,
      tone: 'violet',
      accessible: can('rates:update') || can('channels:manage'),
    },
    {
      title: 'Payments',
      desc: 'PCI DSS, multi-currency, chargebacks.',
      icon: CreditCard,
      tone: 'rose',
      accessible: can('payments:charge'),
    },
    {
      title: 'VOIP & Calls',
      desc: 'Call logs synced to guest folios.',
      icon: Phone,
      tone: 'sky',
      accessible: can('voip:calllog'),
    },
    {
      title: 'Reports',
      desc: 'Night audit, pace, financial analytics.',
      icon: ClipboardList,
      tone: 'emerald',
      accessible: can('reports:view'),
    },
    {
      title: 'Multi-Property',
      desc: 'Chain dashboards, unified profiles.',
      icon: Building2,
      tone: 'amber',
      accessible: can('multiproperty:view'),
    },
    {
      title: 'Security & RBAC',
      desc: 'Roles, permissions, audit trails.',
      icon: Shield,
      tone: 'violet',
      accessible: can('rbac:manage'),
    },
  ];

  return (
    <section>
      <div className="mb-6 flex flex-wrap items-center justify-between gap-3">
        <div>
          <h2 className="text-2xl font-semibold">Command Center</h2>
          <p className="text-sm text-slate-600 dark:text-slate-300">Welcome back. You are signed in as {role}.</p>
        </div>
        <div className="flex items-center gap-2">
          <span className="inline-flex items-center gap-2 rounded-full bg-blue-500/15 px-3 py-1 text-xs font-semibold text-blue-600 ring-1 ring-blue-500/30 dark:text-blue-300">
            <Wifi className="h-3.5 w-3.5" /> Live Sync
          </span>
          <span className="inline-flex items-center gap-2 rounded-full bg-amber-500/15 px-3 py-1 text-xs font-semibold text-amber-600 ring-1 ring-amber-500/30 dark:text-amber-300">
            <Calendar className="h-3.5 w-3.5" /> Arrivals Surge
          </span>
        </div>
      </div>

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {cards.map((c) => (
          <ModuleCard key={c.title} {...c} />
        ))}
      </div>

      <div className="mt-8 grid grid-cols-1 gap-4 md:grid-cols-3">
        <div className="rounded-3xl border border-white/10 bg-gradient-to-br from-sky-500/10 to-indigo-500/10 p-5 ring-1 ring-slate-200/40 backdrop-blur dark:ring-white/10">
          <div className="flex items-center gap-3">
            <div className="grid h-12 w-12 place-items-center rounded-2xl bg-white/70 ring-1 ring-white/60 backdrop-blur dark:bg-white/10 dark:ring-white/10">
              <Bed className="h-6 w-6 text-sky-600 dark:text-sky-300" />
            </div>
            <div>
              <h4 className="font-semibold">Occupancy</h4>
              <p className="text-sm text-slate-600 dark:text-slate-300">Today: 86% | ADR: $172</p>
            </div>
          </div>
          <div className="mt-4 h-2 w-full rounded-full bg-white/40 dark:bg-white/10">
            <div className="h-2 w-[86%] rounded-full bg-gradient-to-r from-sky-400 to-blue-600" />
          </div>
        </div>
        <div className="rounded-3xl border border-white/10 bg-gradient-to-br from-amber-500/10 to-orange-500/10 p-5 ring-1 ring-slate-200/40 backdrop-blur dark:ring-white/10">
          <div className="flex items-center gap-3">
            <div className="grid h-12 w-12 place-items-center rounded-2xl bg-white/70 ring-1 ring-white/60 backdrop-blur dark:bg-white/10 dark:ring-white/10">
              <Users className="h-6 w-6 text-amber-600 dark:text-amber-300" />
            </div>
            <div>
              <h4 className="font-semibold">Arrivals</h4>
              <p className="text-sm text-slate-600 dark:text-slate-300">Next hour: 12 | Early check-in: 4</p>
            </div>
          </div>
          <div className="mt-4 flex gap-2">
            <span className="rounded-full bg-amber-500/20 px-2 py-0.5 text-xs font-semibold text-amber-700 dark:text-amber-300">High</span>
            <span className="rounded-full bg-rose-500/20 px-2 py-0.5 text-xs font-semibold text-rose-700 dark:text-rose-300">Alert</span>
          </div>
        </div>
        <div className="rounded-3xl border border-white/10 bg-gradient-to-br from-emerald-500/10 to-teal-500/10 p-5 ring-1 ring-slate-200/40 backdrop-blur dark:ring-white/10">
          <div className="flex items-center gap-3">
            <div className="grid h-12 w-12 place-items-center rounded-2xl bg-white/70 ring-1 ring-white/60 backdrop-blur dark:bg-white/10 dark:ring-white/10">
              <Settings className="h-6 w-6 text-emerald-600 dark:text-emerald-300" />
            </div>
            <div>
              <h4 className="font-semibold">System Health</h4>
              <p className="text-sm text-slate-600 dark:text-slate-300">All services operational</p>
            </div>
          </div>
          <div className="mt-4 flex gap-2">
            <span className="rounded-full bg-emerald-500/20 px-2 py-0.5 text-xs font-semibold text-emerald-700 dark:text-emerald-300">OK</span>
          </div>
        </div>
      </div>
    </section>
  );
}
