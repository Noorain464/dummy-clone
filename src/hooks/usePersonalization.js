// src/hooks/usePersonalization.js
import { useState, useEffect } from 'react';

const SELECTORS = {
  "Hero Headline": "h1",
  "Hero Supporting Paragraph": "h1 + p",
  "Primary Hero CTA": "button.hero-cta, a.hero-cta, section button:first-of-type",
  "Benefits Section Headline": "h2:nth-of-type(1)",
  "Programs Section Headline": "h2:nth-of-type(2)",
  "Testimonials Section Headline": "h2:nth-of-type(3)",
  "Bottom-of-Page CTA": "button:last-of-type, section:last-of-type button"
};

export function usePersonalization() {
  const [slots, setSlots] = useState(null);

  useEffect(() => {
    const p = new URLSearchParams(window.location.search);
    fetch('https://martech-7l0n.onrender.com/api/variants/resolve', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        customer_id:  '69ca8c8da011aaaf8f2c56f8',
        utm_campaign: p.get('utm_campaign'),
        utm_source:   p.get('utm_source'),
        utm_medium:   p.get('utm_medium'),
        referrer:     document.referrer,
      }),
    })
      .then((r) => r.json())
      .then((data) => setSlots(data.slots || null))
      .catch(() => {});
  }, []);

  // Returns: slot values + the CSS selectors to target
  return { slots, selectors: SELECTORS };
}

// Usage in your component:
// const { slots } = usePersonalization();
// <h1>{slots?.['Hero Headline'] ?? 'Your default headline'}</h1>