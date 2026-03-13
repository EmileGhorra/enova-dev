export default function Footer() {
  return (
    <footer className="section pt-0">
      <div className="container text-center text-white/70 text-sm space-y-2">
        <div>E-Nova Dev — © 2025. All Rights Reserved.</div>
        <a
          href="https://www.instagram.com/enova.dev/"
          target="_blank"
          rel="noreferrer"
          aria-label="Follow E-Nova on Instagram"
          className="inline-flex items-center justify-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-2 text-white/80 hover:text-white hover:border-white/30 transition"
        >
          <svg
            aria-hidden="true"
            focusable="false"
            className="h-4 w-4"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.6"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <rect x="4" y="4" width="16" height="16" rx="4" />
            <circle cx="12" cy="12" r="4" />
            <circle cx="17" cy="7" r="0.9" fill="currentColor" stroke="none" />
          </svg>
          Follow us on Instagram @enova.dev
        </a>
      </div>
    </footer>
  );
}
