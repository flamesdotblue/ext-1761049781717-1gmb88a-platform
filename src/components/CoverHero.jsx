import Spline from '@splinetool/react-spline';
import { ArrowRight } from 'lucide-react';

export default function CoverHero() {
  return (
    <section className="relative h-[62vh] w-full overflow-hidden">
      <div className="absolute inset-0">
        <Spline
          scene="https://prod.spline.design/BWzdo650n-g-M9RS/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />
      </div>
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(59,130,246,0.20),transparent_40%),radial-gradient(circle_at_80%_30%,rgba(34,197,94,0.10),transparent_35%)]" />
      <div className="relative z-10 mx-auto flex h-full max-w-7xl flex-col justify-end px-4 pb-10 sm:px-6 lg:px-8">
        <div className="max-w-2xl rounded-3xl border border-white/10 bg-white/10 p-6 shadow-2xl backdrop-blur-xl dark:bg-black/20">
          <p className="text-sm font-medium uppercase tracking-widest text-slate-100">All-in-One Hotel PMS</p>
          <h2 className="mt-1 text-3xl font-semibold text-white sm:text-4xl">Minimalist, glassy, and RBAC-secure</h2>
          <p className="mt-2 text-slate-100/80">
            Reservations, front desk, housekeeping, revenue, VOIP, payments, channel management, and multi-property dashboards in one place.
          </p>
          <div className="mt-4 flex items-center gap-3">
            <button className="pointer-events-auto inline-flex items-center gap-2 rounded-full bg-sky-500 px-4 py-2 text-sm font-semibold text-white shadow-lg shadow-sky-500/30 transition hover:bg-sky-600">
              Launch Console <ArrowRight className="h-4 w-4" />
            </button>
            <div className="pointer-events-auto inline-flex items-center gap-2 rounded-full bg-white/40 px-3 py-1.5 text-xs font-medium text-slate-800 ring-1 ring-white/50 backdrop-blur dark:bg-white/10 dark:text-slate-100 dark:ring-white/20">
              <span className="inline-block h-2 w-2 animate-pulse rounded-full bg-emerald-400" />
              Live sync: Channels, VOIP, Payments
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
