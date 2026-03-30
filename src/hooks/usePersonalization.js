import { useState, useEffect } from 'react';

const SELECTORS = {
  "Hero Headline": "#root h1",
  "Hero Supporting Copy": "#root h1 + p",
  "Social Proof Subheadline": "#root h2:nth-of-type(1)",
  "Primary Hero CTA": "#root button:nth-of-type(1)",
  "Secondary Hero CTA": "#root button:nth-of-type(2)",
  "Programs Section Headline": "#root h2:nth-of-type(2)",
  "Outcomes / Benefits Headline": "#root h2:nth-of-type(3)",
  "Outcomes Supporting Copy": "#root h2:nth-of-type(3) + p"
};

export function usePersonalization() {
  const [slots, setSlots] = useState(null);

  useEffect(() => {
    const p = new URLSearchParams(window.location.search);
    fetch('https://martech-7l0n.onrender.com/api/variants/resolve', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        customer_id: '69ca8c8da011aaaf8f2c56f8',
        utm_campaign: p.get('utm_campaign'),
        utm_source: p.get('utm_source'),
        utm_medium: p.get('utm_medium'),
        referrer: document.referrer,
      }),
    })
      .then((r) => r.json())
      .then((data) => setSlots(data.slots || null))
      .catch(() => {});
  }, []);

  return { slots, selectors: SELECTORS };
}
