export type BrandName = 'mail' | 'linkedin' | 'github' | 'telegram';

interface BrandData {
  viewBox: string;
  bg: string;
  path: string;
}

const BRANDS: Record<BrandName, BrandData> = {
  mail: {
    viewBox: '0 0 24 24',
    bg: '#EA4335',
    path: 'M4 6h16a1 1 0 0 1 1 1v10a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V7a1 1 0 0 1 1-1Zm0 1.4V8l8 5.4L20 8v-.6l-8 5.2-8-5.2Z',
  },
  linkedin: {
    viewBox: '0 0 24 24',
    bg: '#0A66C2',
    path: 'M6.94 8.75H4.06v11.25h2.88V8.75ZM5.5 7.5a1.67 1.67 0 1 0 0-3.33 1.67 1.67 0 0 0 0 3.33ZM19.94 20v-6.17c0-3.3-1.76-4.84-4.11-4.84-1.9 0-2.74 1.04-3.21 1.77V8.75H9.75c.04.83 0 11.25 0 11.25h2.87v-6.28c0-.34.02-.67.12-.91.27-.67.87-1.36 1.9-1.36 1.34 0 1.87 1.02 1.87 2.51V20h2.87Z',
  },
  github: {
    viewBox: '0 0 24 24',
    bg: '#181717',
    path: 'M12 2a10 10 0 0 0-3.16 19.5c.5.09.68-.22.68-.48v-1.7c-2.78.6-3.37-1.34-3.37-1.34-.46-1.15-1.11-1.46-1.11-1.46-.9-.62.07-.6.07-.6 1 .07 1.53 1.03 1.53 1.03.9 1.52 2.34 1.08 2.91.83.09-.65.35-1.08.63-1.33-2.22-.25-4.56-1.11-4.56-4.94 0-1.09.39-1.99 1.03-2.69-.1-.25-.45-1.27.1-2.64 0 0 .84-.27 2.75 1.03A9.6 9.6 0 0 1 12 6.8c.85 0 1.71.11 2.51.33 1.9-1.3 2.74-1.03 2.74-1.03.55 1.37.2 2.39.1 2.64.64.7 1.03 1.6 1.03 2.69 0 3.84-2.34 4.68-4.57 4.93.36.31.68.92.68 1.85v2.74c0 .27.18.58.69.48A10 10 0 0 0 12 2Z',
  },
  telegram: {
    viewBox: '0 0 240 240',
    bg: '#26A5E4',
    path: 'M120 0a120 120 0 1 0 0 240 120 120 0 0 0 0-240Zm55.6 81.5-18.5 87.3c-1.4 6.3-5.1 7.8-10.3 4.9l-28.4-21-13.7 13.2c-1.5 1.5-2.8 2.8-5.7 2.8l2-28.9 52.6-47.6c2.3-2 -0.5-3.2-3.5-1.2l-65 41-28-8.8c-6.1-1.9-6.2-6.1 1.3-9l109.4-42.2c5-1.9 9.5 1.2 7.8 8.5Z',
  },
};

export function BrandIcon({ name, size = 40 }: { name: BrandName; size?: number }) {
  const { viewBox, bg, path } = BRANDS[name];

  return (
    <span
      style={{
        display: 'inline-flex',
        alignItems: 'center',
        justifyContent: 'center',
        width: size,
        height: size,
        borderRadius: '50%',
        background: bg,
        flexShrink: 0,
      }}
    >
      <svg width={size * 0.55} height={size * 0.55} viewBox={viewBox} fill="#fff" aria-hidden="true">
        <path d={path} />
      </svg>
    </span>
  );
}
