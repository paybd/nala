'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default function Header() {
  const [isOverHero, setIsOverHero] = useState(false);

  useEffect(() => {
    if (typeof window === 'undefined') return;
    const hero = document.getElementById('hero');
    if (!hero) {
      setIsOverHero(false);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsOverHero(entry.isIntersecting);
      },
      { root: null, rootMargin: '-64px 0px 0px 0px', threshold: 0 }
    );

    observer.observe(hero);
    return () => observer.disconnect();
  }, []);

  const containerBgClass = 'bg-white shadow-sm';

  return (
    <header className={`fixed top-0 left-0 right-0 z-40 ${containerBgClass} transition-colors`}>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 md:h-16 py-2 flex items-center justify-between flex-wrap gap-y-2">
        <Link href="/" className="flex items-center gap-3 shrink-0">
          <Image src="/assets/logo_2.png" alt="PI Business" width={50} height={10} className="object-contain" />
        </Link>
        <nav className="flex flex-wrap items-center gap-4 sm:gap-6 md:gap-8 text-xs sm:text-sm text-gray-700">
          <Link href="/about" className="hover:text-[#218A48] transition-colors">আমাদের সম্পর্কে</Link>
          <Link href="/business" className="hover:text-[#218A48] transition-colors">ব্যবসার জন্য</Link>
        </nav>
        <div className="flex items-center gap-3 shrink-0">
          <Link href="/pi_business.apk" className="rounded-lg bg-[#218A48] text-white px-4 py-2 text-sm font-medium hover:bg-[#1a6b38] transition">এখনই ডাউনলোড</Link>
        </div>
      </div>
    </header>
  );
}


