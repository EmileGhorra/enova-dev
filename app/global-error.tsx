'use client';

export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-[var(--bg)] text-white">
        <main className="section flex min-h-screen items-center">
          <div className="container max-w-2xl text-center">
            <p className="section-label justify-center">Unexpected Error</p>
            <h1 className="section-heading">Something went wrong.</h1>
            <p className="section-subtitle">
              {error.message || "An unexpected error interrupted the page render."}
            </p>
            <button type="button" className="btn-primary" onClick={() => reset()}>
              Try again
            </button>
          </div>
        </main>
      </body>
    </html>
  );
}
