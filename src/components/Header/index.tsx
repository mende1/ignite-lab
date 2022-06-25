import { Logo } from "../Logo";

export function Header() {
  return (
    <header className="w-full py-5 flex items-center justify-center sticky top-0 bg-gray-700 border-b border-gray-600">
      <Logo />
    </header>
  );
}
