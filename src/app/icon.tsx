import { ImageResponse } from 'next/og';

export const size = {
  width: 64,
  height: 64,
};

export const contentType = 'image/png';

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          background: '#050505',
          borderRadius: '16px',
          border: '2px solid #1f1f1f',
          position: 'relative',
        }}
      >
        <div
          style={{
            position: 'absolute',
            inset: '6px',
            borderRadius: '12px',
            background: 'linear-gradient(135deg, rgba(227,109,0,0.18), rgba(255,177,104,0.06))',
          }}
        />
        <div
          style={{
            position: 'relative',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            width: '42px',
            height: '42px',
            borderRadius: '14px',
            background: 'linear-gradient(135deg, #e36d00, #ffb168)',
            boxShadow: '0 10px 24px rgba(227,109,0,0.35)',
            color: 'white',
            fontSize: '28px',
            fontWeight: 700,
            fontFamily: 'system-ui, sans-serif',
          }}
        >
          U
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
}
