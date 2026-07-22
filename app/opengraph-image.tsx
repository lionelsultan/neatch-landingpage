import { ImageResponse } from "next/og";

export const alt = "Neatch - Conseil IT, Product & Delivery";
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = "image/png";

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          alignItems: "stretch",
          background: "#fbfaf7",
          color: "#0a0a0a",
          display: "flex",
          fontFamily: "Arial, sans-serif",
          height: "100%",
          justifyContent: "space-between",
          padding: "72px",
          width: "100%",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            maxWidth: 820,
          }}
        >
          <div style={{ display: "flex", fontSize: 34, fontWeight: 900 }}>
            Neatch
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: 30 }}>
            <div
              style={{
                border: "1px solid #d6d3d1",
                borderRadius: 8,
                color: "#525252",
                display: "flex",
                fontSize: 24,
                fontWeight: 700,
                padding: "12px 18px",
                width: 380,
              }}
            >
              Conseil IT, produit et delivery
            </div>
            <div
              style={{
                display: "flex",
                fontSize: 74,
                fontWeight: 900,
                lineHeight: 0.96,
              }}
            >
              Trouvez le bon expert pour faire avancer vos projets IT.
            </div>
            <div
              style={{
                color: "#525252",
                display: "flex",
                fontSize: 30,
                lineHeight: 1.35,
              }}
            >
              Lionel Sultan accompagne vos missions critiques et qualifie les
              consultants capables de les tenir.
            </div>
          </div>
          <div
            style={{
              color: "#78716c",
              display: "flex",
              fontSize: 24,
              fontWeight: 700,
            }}
          >
            neatch.com
          </div>
        </div>
        <div
          style={{
            alignSelf: "center",
            border: "1px solid #d6d3d1",
            borderRadius: 18,
            boxShadow: "0 24px 70px rgba(23, 23, 23, 0.12)",
            display: "flex",
            flexDirection: "column",
            height: 360,
            overflow: "hidden",
            width: 310,
          }}
        >
          <div
            style={{
              alignItems: "center",
              background: "#f5f5f4",
              borderBottom: "1px solid #e7e5e4",
              display: "flex",
              gap: 9,
              height: 52,
              paddingLeft: 20,
            }}
          >
            {[0, 1, 2].map((dot) => (
              <div
                key={dot}
                style={{
                  background: "#d6d3d1",
                  borderRadius: 999,
                  height: 12,
                  width: 12,
                }}
              />
            ))}
          </div>
          <div
            style={{
              background: "#ffffff",
              display: "flex",
              flexDirection: "column",
              flexGrow: 1,
              gap: 18,
              padding: 24,
            }}
          >
            {["Comprendre", "Chercher", "Qualifier", "Présenter"].map((step, index) => (
              <div
                key={step}
                style={{
                  alignItems: "center",
                  border: "1px solid #e7e5e4",
                  borderRadius: 10,
                  display: "flex",
                  gap: 14,
                  padding: 14,
                }}
              >
                <div
                  style={{
                    color: "#a8a29e",
                    display: "flex",
                    fontSize: 18,
                    fontWeight: 900,
                  }}
                >
                  0{index + 1}
                </div>
                <div style={{ display: "flex", fontSize: 22, fontWeight: 800 }}>
                  {step}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    ),
    size,
  );
}
