import { NavLink } from "react-router";

function Header() {
  return (
    <nav className="flex justify-end items-center text-lg p-5 bg-gray-900 text-white gap-8 shadow-lg">
      <NavLink to="" className={({ isActive }) => "font-medium hover:text-amber-400 transition " + (isActive ? "text-amber-400" : "text-white")}>
        Home
      </NavLink>
      <NavLink to="create-emp" className={({ isActive }) => "font-medium hover:text-amber-400 transition " + (isActive ? "text-amber-400" : "text-white")}>
        CreateEmp
      </NavLink>
      <NavLink to="list" className={({ isActive }) => "font-medium hover:text-amber-400 transition " + (isActive ? "text-amber-400" : "text-white")}>
        Employees
      </NavLink>
    </nav>
  );
}

export default Header;