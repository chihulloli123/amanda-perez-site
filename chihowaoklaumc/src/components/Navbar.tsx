import { NavLink } from "react-router-dom";

export default function Navbar() {
  const linkClass = ({ isActive }: { isActive: boolean }) =>
    `transition ${
      isActive
        ? "font-bold text-yellow-200"
        : "hover:text-yellow-200"
    }`;

  return (
    <header className="bg-[#6F408A] text-white shadow-md">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-8 py-5">
        <h1 className="text-2xl font-bold">
          Chihowa Okla UMC
        </h1>

        <nav>
          <ul className="flex gap-8 text-lg">
            <li>
              <NavLink to="/" className={linkClass} end>
                Home
              </NavLink>
            </li>

            <li>
              <NavLink to="/about" className={linkClass}>
                About
              </NavLink>
            </li>

            <li>
              <NavLink to="/events" className={linkClass}>
                Events
              </NavLink>
            </li>

            <li>
              <NavLink to="/history" className={linkClass}>
                History
              </NavLink>
            </li>

            <li>
              <NavLink to="/visit" className={linkClass}>
                Visit
              </NavLink>
            </li>

            <li>
              <NavLink to="/contact" className={linkClass}>
                Contact
              </NavLink>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}