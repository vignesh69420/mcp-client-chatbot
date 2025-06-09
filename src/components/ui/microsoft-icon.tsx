export function MicrosoftIcon({ className }: { className?: string }) {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 24 24"
      className={className}
      data-view-component="true"
    >
      <rect x="1" y="1" width="10" height="10" fill="currentColor" />
      <rect x="13" y="1" width="10" height="10" fill="currentColor" />
      <rect x="1" y="13" width="10" height="10" fill="currentColor" />
      <rect x="13" y="13" width="10" height="10" fill="currentColor" />
    </svg>
  );
}
