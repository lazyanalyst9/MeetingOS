import Link from "next/link";

export function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-slate-800 bg-slate-950/90 backdrop-blur">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <Link href="/" className="text-lg font-semibold">MeetingOS</Link>
        <div className="flex items-center gap-4 text-sm text-slate-300">
          <Link href="/dashboard">Dashboard</Link>
          <Link href="/upload">Upload</Link>
          <Link href="/action-items">Action Board</Link>
          <Link href="/settings">Settings</Link>
        </div>
      </nav>
    </header>
  );
}
