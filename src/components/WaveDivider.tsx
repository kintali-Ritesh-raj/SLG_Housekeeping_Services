import * as React from 'react';

const WaveDivider: React.FC<{ flip?: boolean; color?: string }> = ({ flip = false, color = '#ECFEFF' }) => (
  <div style={{ lineHeight: 0 }} aria-hidden="true">
    <svg
      viewBox="0 0 1440 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      style={{
        display: 'block',
        width: '100%',
        transform: flip ? 'scaleY(-1)' : undefined,
      }}
    >
      <path
        d="M0,0 C480,100 960,0 1440,100 L1440,100 L0,100 Z"
        fill={color}
      />
    </svg>
  </div>
);

export default WaveDivider; 