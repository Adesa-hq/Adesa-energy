import { ImageResponse } from "next/og";

export const contentType = "image/png";

export function GET(request) {
  const requestedTitle = new URL(request.url).searchParams.get("title")?.trim();
  const title = (requestedTitle || "Mobile CNG conversion and refueling in Nigeria")
    .slice(0, 110);

  return new ImageResponse(
    (
      <div
        style={{
          alignItems: "center",
          background:
            "radial-gradient(circle at 82% 16%, #59c6e5 0, #22244e 34%, #081126 72%)",
          color: "white",
          display: "flex",
          height: "100%",
          justifyContent: "center",
          padding: "76px 84px",
          width: "100%",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            maxWidth: "1020px",
            width: "100%",
          }}
        >
          <div
            style={{
              color: "#f59e0b",
              display: "flex",
              fontSize: 28,
              fontWeight: 700,
              letterSpacing: 4,
              textTransform: "uppercase",
            }}
          >
            Adesa Energy
          </div>
          <div
            style={{
              display: "flex",
              fontSize: title.length > 70 ? 58 : 70,
              fontWeight: 800,
              letterSpacing: -3,
              lineHeight: 1.05,
              marginTop: 30,
            }}
          >
            {title}
          </div>
          <div
            style={{
              color: "#dbeafe",
              display: "flex",
              fontSize: 28,
              lineHeight: 1.35,
              marginTop: 32,
            }}
          >
            Cleaner mobility and lower fuel costs for Nigerian drivers and fleets.
          </div>
        </div>
      </div>
    ),
    {
      width: 1200,
      height: 630,
      headers: {
        "Cache-Control": "public, max-age=3600, s-maxage=86400",
      },
    },
  );
}
