import { SignedOut, SignInButton, SignedIn, UserButton } from "@clerk/nextjs";

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

        <SignedOut>
          <SignInButton>
            <span className="cursor-pointer rounded-lg border px-4 py-1 text-sm transition hover:scale-90">
              Login
            </span>
          </SignInButton>
        </SignedOut>
        <SignedIn>
          <UserButton />
        </SignedIn>
      </nav>
    </header>
  );
}
