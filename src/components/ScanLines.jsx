export default function ScanLines() {
  return (
    <>
      {/* Scanlines CRT */}
      <div
        className="fixed inset-0 pointer-events-none"
        style={{
          zIndex: 9998,
          backgroundImage: 'repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(0,0,0,0.03) 2px, rgba(0,0,0,0.03) 4px)',
          backgroundSize: '100% 4px',
        }}
        aria-hidden="true"
      />
    </>
  )
}
