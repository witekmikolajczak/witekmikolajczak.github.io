import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from 'flowbite-react';

/**
 * Site footer with brand mark and primary calls to action.
 * @returns {JSX.Element}
 */
export default function Footer() {
  return (
    <footer className="flex flex-col gap-3 rounded-2xl border border-white/10 bg-white/5 px-4 py-4 backdrop-blur md:flex-row md:items-center md:justify-between">
      <div className="flex items-center gap-3">
        <span className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/5">
          <img src="/logo.png" alt="Witold Mikołajczak logo" className="h-7 w-7 object-contain" />
        </span>
        <div>
          <p className="text-lg font-semibold">Witold Mikołajczak</p>
          <p className="text-slate-300">Fullstack developer delivering secure, modern products with React and Node.</p>
          <div className="mt-2 flex flex-wrap items-center gap-3 text-sm text-slate-300">
            <a href="mailto:witekmikolajczak@gmail.com" className="hover:text-mint">
              witekmikolajczak@gmail.com
            </a>
            <span className="text-slate-500">•</span>
            <a href="tel:+48731591188" className="hover:text-mint">
              +48 731 591 188
            </a>
          </div>
        </div>
      </div>
      <div className="flex gap-2">
        <a href="mailto:witekmikolajczak@gmail.com">
          <Button gradientDuoTone="purpleToBlue" className="shadow-glow">
            Start a project
          </Button>
        </a>
        <Link to="/blog">
          <Button color="gray" outline>
            Visit blog
          </Button>
        </Link>
      </div>
    </footer>
  );
}
