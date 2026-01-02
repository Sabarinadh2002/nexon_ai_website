import { useEffect } from 'react';

export const useExternalScripts = () => {
  useEffect(() => {
    // Load Tailwind if not present
    if (!document.querySelector('script[src="https://cdn.tailwindcss.com"]')) {
      const script = document.createElement('script');
      script.src = "https://cdn.tailwindcss.com";
      document.head.appendChild(script);
    }

    // Load Lucide Icons if not present
    if (!document.querySelector('script[src="https://unpkg.com/lucide@latest"]')) {
      const script = document.createElement('script');
      script.src = "https://unpkg.com/lucide@latest";
      script.onload = () => {
        if (window.lucide) window.lucide.createIcons();
      };
      document.head.appendChild(script);
    }
  }, []);
};