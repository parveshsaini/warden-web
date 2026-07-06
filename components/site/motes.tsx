/* Deterministic gold bokeh motes — fixed values so SSR and client markup match. */
const MOTES = [
  { left: "8%", top: "72%", size: 10, dx: 40, dy: -120, dur: 14, delay: 0, op: 0.5 },
  { left: "22%", top: "88%", size: 16, dx: -30, dy: -140, dur: 18, delay: 3, op: 0.35 },
  { left: "38%", top: "80%", size: 7, dx: 50, dy: -100, dur: 12, delay: 6, op: 0.55 },
  { left: "55%", top: "90%", size: 12, dx: -40, dy: -160, dur: 16, delay: 1.5, op: 0.4 },
  { left: "70%", top: "78%", size: 9, dx: 35, dy: -110, dur: 13, delay: 4.5, op: 0.5 },
  { left: "84%", top: "85%", size: 14, dx: -25, dy: -130, dur: 17, delay: 8, op: 0.35 },
  { left: "93%", top: "70%", size: 8, dx: 20, dy: -90, dur: 11, delay: 2, op: 0.45 },
  { left: "15%", top: "60%", size: 6, dx: 30, dy: -80, dur: 10, delay: 7, op: 0.4 },
  { left: "63%", top: "65%", size: 11, dx: -35, dy: -100, dur: 15, delay: 5, op: 0.3 },
];

export function Motes({ className = "" }: { className?: string }) {
  return (
    <div aria-hidden className={`pointer-events-none absolute inset-0 overflow-hidden ${className}`}>
      {MOTES.map((m, i) => (
        <span
          key={i}
          className="mote"
          style={
            {
              left: m.left,
              top: m.top,
              width: m.size,
              height: m.size,
              "--mote-dx": `${m.dx}px`,
              "--mote-dy": `${m.dy}px`,
              "--mote-duration": `${m.dur}s`,
              "--mote-delay": `${m.delay}s`,
              "--mote-opacity": m.op,
            } as React.CSSProperties
          }
        />
      ))}
    </div>
  );
}
