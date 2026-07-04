export default function Navbar() {
  return (
    <header className="bg-[#6F408A] text-white shadow-md">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-8 py-5">
        <h1 className="text-2xl font-bold tracking-wide">
          Chihowa Okla UMC
        </h1>

        <nav>
          <ul className="flex gap-8 text-lg">
            <li className="cursor-pointer hover:text-yellow-200">Home</li>
            <li className="cursor-pointer hover:text-yellow-200">Events</li>
            <li className="cursor-pointer hover:text-yellow-200">History</li>
            <li className="cursor-pointer hover:text-yellow-200">Visit</li>
            <li className="cursor-pointer hover:text-yellow-200">Contact</li>
          </ul>
        </nav>
      </div>
    </header>
  );
}