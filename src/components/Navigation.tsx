import { useState } from 'react';
import { NavLink } from 'react-router-dom';

export default function Navigation(): JSX.Element {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => setMenuOpen(false);

  return (
    <nav className="rounded-2xl border border-white/10 bg-white/5 px-4 py-3 backdrop-blur">
      <div className="flex flex-wrap items-center justify-between gap-3">
        <NavLink to="/" className="flex items-center gap-3 text-white hover:text-mint" onClick={closeMenu}>
          <span className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/5">
            <img src="/logo.png" alt="Witold Mikołajczak logo" className="h-7 w-7 object-contain" />
          </span>
          <span className="text-lg font-semibold tracking-wide">Witold Mikołajczak</span>
        </NavLink>

        <div className="hidden items-center gap-2 text-sm md:flex">
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
          <a
            href="/Witek_Mikolajczak_CV.pdf"
            target="_blank"
            rel="noreferrer"
            className="rounded-xl border border-white/15 bg-white/10 px-3 py-1.5 text-white transition hover:border-mint/60 hover:text-mint"
          >
            Download CV
          </a>
        </div>

        <button
          type="button"
          className="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-white transition hover:border-mint/60 hover:text-mint md:hidden"
          aria-label="Toggle navigation menu"
          aria-expanded={menuOpen}
          aria-controls="mobile-menu"
          onClick={() => setMenuOpen((open) => !open)}
        >
          <svg viewBox="0 0 24 24" className="h-5 w-5" aria-hidden="true">
            {menuOpen ? (
              <path
                d="M6 6l12 12M6 18L18 6"
                stroke="currentColor"
                strokeWidth="1.8"
                strokeLinecap="round"
              />
            ) : (
              <path
                d="M4 7h16M4 12h16M4 17h16"
                stroke="currentColor"
                strokeWidth="1.8"
                strokeLinecap="round"
              />
            )}
          </svg>
        </button>

        <div className="pill hidden md:inline-flex">Fullstack · React Native · NestJS · Performance</div>
      </div>

      {menuOpen ? (
        <div
          id="mobile-menu"
          className="mt-3 grid gap-2 rounded-2xl border border-white/10 bg-white/5 p-3 text-sm text-slate-100 md:hidden"
        >
          <NavLink
            to="/"
            end
            onClick={closeMenu}
            className={({ isActive }) =>
              [
                'rounded-xl px-3 py-2',
                isActive ? 'bg-white/10 text-white border border-white/15' : 'hover:bg-white/5 text-slate-200',
              ].join(' ')
            }
          >
            Home
          </NavLink>
          <NavLink
            to="/projects"
            onClick={closeMenu}
            className={({ isActive }) =>
              [
                'rounded-xl px-3 py-2',
                isActive ? 'bg-white/10 text-white border border-white/15' : 'hover:bg-white/5 text-slate-200',
              ].join(' ')
            }
          >
            Projects
          </NavLink>
          <NavLink
            to="/blog"
            onClick={closeMenu}
            className={({ isActive }) =>
              [
                'rounded-xl px-3 py-2',
                isActive ? 'bg-white/10 text-white border border-white/15' : 'hover:bg-white/5 text-slate-200',
              ].join(' ')
            }
          >
            Blog
          </NavLink>
          <a
            href="/Witek_Mikolajczak_CV.pdf"
            target="_blank"
            rel="noreferrer"
            onClick={closeMenu}
            className="rounded-xl border border-white/15 bg-white/10 px-3 py-2 text-white transition hover:border-mint/60 hover:text-mint"
          >
            Download CV
          </a>
          <div className="pill justify-center">Fullstack · React Native · NestJS · Performance</div>
        </div>
      ) : null}
    </nav>
  );
}
