import Link from 'next/link';

export default function Header() {
  return (
    <header className="top-0 z-40 flex items-center justify-between w-full p-4 bg-black border-b border-gray-700">
      <h1 className="text-2xl font-bold text-white">Toolyst</h1>
      <div className="hidden gap-4 md:flex">
        <a
          href="/submit"
          className="font-medium text-gray-300 transition-colors duration-200 hover:text-white"
        >
          Submit a Tool
        </a>
      </div>
    </header>
  );
}
