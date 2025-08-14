export default function Header() {
  return (
    <header className="flex items-center justify-between p-4 bg-black border-b border-gray-500">
      <h1 className="text-2xl font-bold text-white">Toolyst</h1>
      <div className="hidden md:block">
        <a
          href="/submit"
          className="text-gray-300 transition-colors duration-200 hover:text-white"
        >
          Submit a Tool
        </a>
      </div>
    </header>
  );
}
