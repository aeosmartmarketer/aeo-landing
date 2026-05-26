/* ============================================================
   AEO.co — Tailwind CDN runtime configuration
   Palette: green on near-black (matches AEO.co brand mark)
   Fonts:   Inter (sans) · Fraunces (display) · JetBrains Mono
   ============================================================ */
tailwind.config = {
  theme: {
    extend: {
      colors: {
        aeo:    { DEFAULT: '#4FE584', dark: '#2BB763', glow: '#6FE69D' },
        ink:    '#0A0A0A',   // base background
        panel:  '#111111',   // card / section surface
        line:   '#1F1F1F',   // divider
        line2:  '#2A2A2A',   // stronger divider
        mute:   '#A0A0A0',   // secondary text
        mute2:  '#6E6E6E',   // tertiary text
        paper:  '#F5F5F5',   // primary text
      },
      fontFamily: {
        sans:    ['Inter', 'ui-sans-serif', 'system-ui', '-apple-system', 'Segoe UI', 'sans-serif'],
        display: ['"Fraunces"', 'Georgia', 'serif'],
        mono:    ['"JetBrains Mono"', 'ui-monospace', 'SFMono-Regular', 'monospace'],
      },
      letterSpacing: {
        tightest: '-0.04em',
      },
    },
  },
};
