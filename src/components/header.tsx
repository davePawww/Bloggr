export default function Header() {
  return (
    <header className="flex items-center justify-between py-8">
      <h1 className="text-2xl font-bold tracking-tight text-emerald-200 underline decoration-orange-400 subpixel-antialiased">
        Bloggr
      </h1>

      <nav className="flex items-center gap-8">
        <ul className="flex items-center gap-4">
          <li className="text-sm">New Story</li>
          <li className="text-sm">My Stories</li>
        </ul>

        <div className="flex size-9 items-center justify-center rounded-full bg-gray-300">
          <p className="text-sm font-bold text-slate-800">CN</p>
        </div>
      </nav>
    </header>
  );
}
