import React from 'react';
import { NavLink } from 'react-router-dom';

/**
 * Primary site navigation with brand logo and top-level links.
 * @returns {JSX.Element}
 */
export default function Navigation() {
  return (
    <header className="flex flex-wrap items-center justify-between gap-3 rounded-2xl border border-white/10 bg-white/5 px-4 py-3 backdrop-blur">
      <NavLink to="/" className="flex items-center gap-3 text-white hover:text-mint">
        <span className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/5">
          <img src="/logo.png" alt="Witold Mikołajczak logo" className="h-7 w-7 object-contain" />
        </span>
        <span className="text-lg font-semibold tracking-wide">Witold Mikołajczak</span>
      </NavLink>
      <div className="flex items-center gap-2 text-sm">
        <NavLink
          to="/"
          end
          className={({ isActive }) =>
            [
              'rounded-xl px-3 py-1.5',
              isActive ? 'bg-white/10 text-white border border-white/15' : 'text-slate-300 hover:text-white',
            ].join(' ')
          }
        >
          Home
        </NavLink>
        <NavLink
          to="/projects"
          className={({ isActive }) =>
            [
              'rounded-xl px-3 py-1.5',
              isActive ? 'bg-white/10 text-white border border-white/15' : 'text-slate-300 hover:text-white',
            ].join(' ')
          }
        >
          Projects
        </NavLink>
        <NavLink
          to="/blog"
          className={({ isActive }) =>
            [
              'rounded-xl px-3 py-1.5',
              isActive ? 'bg-white/10 text-white border border-white/15' : 'text-slate-300 hover:text-white',
            ].join(' ')
          }
        >
          Blog
        </NavLink>
      </div>
      <div className="pill">Fullstack · React Native · NestJS · Performance</div>
    </header>
  );
}
