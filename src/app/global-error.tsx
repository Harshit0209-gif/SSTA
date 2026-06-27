"use client";

export default function GlobalError({
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <html lang="en">
      <body
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          minHeight: "100vh",
          fontFamily: "sans-serif",
          background: "#F7F6F3",
          gap: "1rem",
        }}
      >
        <h2 style={{ color: "#1F2937", margin: 0 }}>Something went wrong</h2>
        <button
          onClick={reset}
          style={{
            padding: "0.6rem 1.5rem",
            background: "#A32020",
            color: "#fff",
            border: "none",
            borderRadius: "9999px",
            cursor: "pointer",
            fontSize: "0.9rem",
          }}
        >
          Try again
        </button>
      </body>
    </html>
  );
}
