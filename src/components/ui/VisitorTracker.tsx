'use client';

import { useEffect } from 'react';
import { usePathname } from 'next/navigation';

export default function VisitorTracker() {
  const pathname = usePathname();

  useEffect(() => {
    // Ne pas tracker la page admin
    if (pathname.startsWith('/admin')) return;

    // Délai court pour ne pas bloquer le rendu
    const timer = setTimeout(() => {
      fetch('/api/track-visit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          page: pathname,
          referrer: document.referrer || '',
        }),
      }).catch(() => {
        // Silencieux — le tracking ne doit jamais bloquer l'UI
      });
    }, 500);

    return () => clearTimeout(timer);
  }, [pathname]);

  return null;
}
