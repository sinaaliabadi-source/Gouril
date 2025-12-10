'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const navLinks = [
  { label: 'خانه', href: '#hero' },
  { label: 'خدمات', href: '#services' },
  { label: 'چرا گوریل', href: '#features' },
  { label: 'مشتریان', href: '#clients' },
  { label: 'تماس', href: '#contact' },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 mb-10 bg-gradient-to-b from-gouril-dark/80 via-gouril-dark/70 to-transparent backdrop-blur-xl">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-4">
        <div className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-white/10 text-lg font-bold text-white shadow-card">
            G
          </div>
          <div>
            <p className="text-sm text-slate-300">Gouril</p>
            <p className="text-xs text-slate-400">توسعه هوشمند برند</p>
          </div>
        </div>

        <nav className="hidden items-center gap-6 text-sm text-slate-200 md:flex">
          {navLinks.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="transition hover:text-white hover:drop-shadow"
            >
              {item.label}
            </a>
          ))}
          <a
            href="#contact"
            className="rounded-full bg-white/10 px-5 py-2 text-sm font-semibold text-white shadow-card transition hover:-translate-y-0.5 hover:bg-white/15 hover:shadow-glow"
          >
            شروع همکاری
          </a>
        </nav>

        <button
          className="relative inline-flex h-10 w-10 items-center justify-center rounded-2xl border border-white/15 bg-white/5 text-slate-100 transition hover:border-white/30 hover:bg-white/10 md:hidden"
          onClick={() => setOpen((prev) => !prev)}
          aria-label="باز کردن منو"
        >
          <span className="absolute block h-[2px] w-5 -translate-y-1 bg-white transition" style={{ transform: open ? 'translateY(0) rotate(45deg)' : undefined }} />
          <span className="absolute block h-[2px] w-5 bg-white transition" style={{ opacity: open ? 0 : 1 }} />
          <span className="absolute block h-[2px] w-5 translate-y-1 bg-white transition" style={{ transform: open ? 'translateY(0) rotate(-45deg)' : undefined }} />
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden"
          >
            <div className="mx-5 mb-4 rounded-2xl border border-white/10 bg-white/5 p-4 shadow-card">
              <div className="flex flex-col gap-3 text-sm text-slate-100">
                {navLinks.map((item) => (
                  <a
                    key={item.href}
                    href={item.href}
                    className="rounded-xl px-3 py-2 transition hover:bg-white/10"
                    onClick={() => setOpen(false)}
                  >
                    {item.label}
                  </a>
                ))}
                <a
                  href="#contact"
                  className="rounded-xl bg-white/10 px-4 py-2 text-center font-semibold shadow-card transition hover:bg-white/20"
                  onClick={() => setOpen(false)}
                >
                  شروع همکاری
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
