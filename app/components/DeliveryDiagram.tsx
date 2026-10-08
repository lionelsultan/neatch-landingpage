"use client";

import { useEffect, useRef, useState } from "react";

type Variant = "converge" | "sequence" | "reporting" | "risks" | "decisions";

const drawings: Record<Variant, { paths: string[]; nodes: number[][] }> = {
  converge: {
    paths: ["M24 24 H88 Q112 24 112 56 V64 Q112 88 144 88 H208", "M24 88 H208", "M24 152 H88 Q112 152 112 120 V112 Q112 88 144 88 H208", "M240 88 H336"],
    nodes: [[24,24], [24,88], [24,152], [224,88], [336,88]],
  },
  sequence: {
    paths: ["M40 88 H120", "M120 88 H240", "M240 88 H320"],
    nodes: [[40,88], [120,88], [240,88], [320,88]],
  },
  reporting: {
    // Three source documents feed a single reporting dashboard.
    paths: ["M30 32 H70 V64 H30 Z M40 43 H60 M40 53 H55", "M30 76 H70 V108 H30 Z M40 87 H60 M40 97 H55", "M30 120 H70 V152 H30 Z M40 131 H60 M40 141 H55", "M70 48 H94 Q116 48 116 72 V92 H174", "M70 92 H174", "M70 136 H94 Q116 136 116 112 V92", "M182 36 H326 V148 H182 Z M182 60 H326", "M200 80 H244 M200 92 H232", "M204 130 V112 H220 V130 M236 130 V100 H252 V130 M268 130 V84 H284 V130 M198 130 H308"],
    nodes: [[174,92]],
  },
  risks: {
    // A dependency graph exposes a central risk before it spreads.
    paths: ["M48 48 L144 48 L224 88 L312 40", "M48 136 L144 136 L224 88 L312 136", "M144 48 V136", "M224 60 L248 104 H200 Z", "M224 76 V88 M224 94 V96"],
    nodes: [[48,48], [48,136], [144,48], [144,136], [312,40], [312,136]],
  },
  decisions: {
    // Options are compared, then one documented decision is selected.
    paths: ["M28 88 H80 M80 88 V40 H142 M80 88 H142 M80 88 V136 H142", "M150 26 H202 V54 H150 Z", "M150 74 H202 V102 H150 Z", "M150 122 H202 V150 H150 Z", "M202 40 H226 Q244 40 244 64 V88 H272", "M202 88 H272", "M202 136 H226 Q244 136 244 112 V88", "M280 62 H332 V114 H280 Z", "M292 88 L302 98 L322 78"],
    nodes: [[28,88]],
  },
};

/** Decorative diagrams; all meaning is also provided by the adjacent copy. */
export default function DeliveryDiagram({ variant = "converge" }: { variant?: Variant }) {
  const ref = useRef<SVGSVGElement>(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const element = ref.current;
    if (!element) return;
    if (!("IntersectionObserver" in window)) { setVisible(true); return; }
    const observer = new IntersectionObserver(([entry]) => setVisible(entry.isIntersecting), { threshold: 0.25 });
    observer.observe(element);
    return () => observer.disconnect();
  }, []);
  const { paths, nodes } = drawings[variant];

  return (
    <svg ref={ref} data-active={visible} data-diagram={variant} viewBox="0 0 360 176" fill="none" aria-hidden="true" focusable="false" className="delivery-diagram my-6 block h-auto w-full text-brand" strokeLinecap="round" strokeLinejoin="round">
      {paths.map((d, index) => (
        <g key={d}>
          <path d={d} stroke="hsl(var(--border))" strokeWidth="1.5" />
          <path className="delivery-diagram-flow" d={d} pathLength="1" stroke="currentColor" strokeWidth="1.5" style={{ animationDelay: `${index * 0.16}s` }} />
        </g>
      ))}
      {nodes.map(([cx, cy], index) => (
        <g key={`${cx}-${cy}`}>
          <circle cx={cx} cy={cy} r={variant === "converge" && index === 3 ? 15 : 7} fill="hsl(var(--background))" stroke="hsl(var(--border))" strokeWidth="1.5" />
          <circle className="delivery-diagram-node" cx={cx} cy={cy} r="3" fill="currentColor" style={{ animationDelay: `${index * 0.2}s` }} />
        </g>
      ))}
      {variant === "sequence" && ["Diagnose", "Structure", "Operate", "Automate"].map((label, index) => (
        <text key={label} x={nodes[index][0]} y="124" textAnchor="middle" fill="hsl(var(--muted-foreground))" stroke="none" className="font-mono text-[10px]">{label}</text>
      ))}
    </svg>
  );
}
