import { useEffect, useMemo, useState } from 'react';
import TopNav from './components/TopNav';
import CoverHero from './components/CoverHero';
import Dashboard from './components/Dashboard';
import RBACPanel from './components/RBAC';

const ROLES = [
  'Admin',
  'FrontDesk',
  'Housekeeping',
  'Revenue',
  'Maintenance',
  'GuestService',
  'Auditor',
];

// Central permission catalogue
const PERMISSIONS = [
  'reservations:view',
  'reservations:edit',
  'checkin:out',
  'guest:folio',
  'housekeeping:tasks',
  'maintenance:workorders',
  'rates:update',
  'reports:view',
  'reports:financial',
  'channels:manage',
  'payments:charge',
  'rbac:manage',
  'voip:calllog',
  'multiproperty:view',
];

// Role to permissions map (minimal demo set)
const ROLE_PERMISSIONS = {
  Admin: [
    'reservations:view',
    'reservations:edit',
    'checkin:out',
    'guest:folio',
    'housekeeping:tasks',
    'maintenance:workorders',
    'rates:update',
    'reports:view',
    'reports:financial',
    'channels:manage',
    'payments:charge',
    'rbac:manage',
    'voip:calllog',
    'multiproperty:view',
  ],
  FrontDesk: [
    'reservations:view',
    'reservations:edit',
    'checkin:out',
    'guest:folio',
    'payments:charge',
    'voip:calllog',
    'reports:view',
  ],
  Housekeeping: ['housekeeping:tasks', 'reports:view'],
  Maintenance: ['maintenance:workorders', 'reports:view'],
  Revenue: ['rates:update', 'channels:manage', 'reports:view', 'reports:financial'],
  GuestService: ['reservations:view', 'voip:calllog'],
  Auditor: ['reports:view', 'reports:financial', 'multiproperty:view'],
};

export default function App() {
  const [role, setRole] = useState(() => localStorage.getItem('pms_role') || 'Admin');
  const [theme, setTheme] = useState(() => localStorage.getItem('theme') || 'dark');

  useEffect(() => {
    localStorage.setItem('pms_role', role);
  }, [role]);

  useEffect(() => {
    localStorage.setItem('theme', theme);
    if (theme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [theme]);

  const can = useMemo(() => {
    const perms = new Set(ROLE_PERMISSIONS[role] || []);
    return (permission) => perms.has(permission);
  }, [role]);

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 transition-colors dark:bg-[#0b1220] dark:text-slate-100">
      <TopNav
        role={role}
        onChangeRole={setRole}
        roles={ROLES}
        theme={theme}
        onToggleTheme={() => setTheme((t) => (t === 'dark' ? 'light' : 'dark'))}
      />
      <main>
        <CoverHero />
        <section className="mx-auto -mt-20 max-w-7xl px-4 pb-24 sm:px-6 lg:px-8">
          <Dashboard role={role} can={can} />
          <div className="mt-12">
            <RBACPanel
              role={role}
              roles={ROLES}
              onChangeRole={setRole}
              catalogue={PERMISSIONS}
              rolePermissions={ROLE_PERMISSIONS}
            />
          </div>
        </section>
      </main>
    </div>
  );
}
