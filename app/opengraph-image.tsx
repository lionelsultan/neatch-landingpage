import { ImageResponse } from "next/og";
export const alt = "NEATCH — Piloter les transformations complexes. Livrer ce qui compte.";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";
export default function Image() {
  return new ImageResponse(<div style={{ display: "flex", flexDirection: "column", justifyContent: "space-between", background: "#f8f7f3", color: "#202d2c", width: "100%", height: "100%", padding: 72, fontFamily: "Arial" }}><div style={{ display: "flex", justifyContent: "space-between", fontSize: 26 }}><strong>NEATCH</strong><span>Transformation &amp; Delivery</span></div><div style={{ display: "flex", flexDirection: "column", gap: 20 }}><div style={{ display: "flex", fontSize: 62, letterSpacing: -3 }}>Piloter les transformations complexes.</div><div style={{ display: "flex", fontSize: 62, letterSpacing: -3, color: "#365b4a" }}>Livrer ce qui compte.</div></div><div style={{ display: "flex", justifyContent: "space-between", borderTop: "1px solid #d3d8cf", paddingTop: 25, fontSize: 22 }}><span>Gouvernance · ERP · Data · IA · Delivery</span><span>neatch.com</span></div></div>, size);
}
