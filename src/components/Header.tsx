import { Suspense } from "react";
import { MdCurrencyExchange } from "react-icons/md";
import { NavLink, Outlet } from "react-router";
import { buttonVariants } from "./ui/button";

const Header = () => {
  return (
    <>
      <header className="flex items-center justify-between px-2.5 py-5 shadow-accent-foreground">
        <div className="flex items-center">
          <MdCurrencyExchange className="mr-8 size-10" />
          <nav>
            <ul className="flex items-center g-5">
              <li>
                <NavLink
                  to="/"
                  className={({ isActive }) =>
                    buttonVariants(
                      isActive ? { variant: "default" } : { variant: "default" }
                    )
                  }
                >
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/rates"
                  className={({ isActive }) =>
                    buttonVariants(
                      isActive ? { variant: "default" } : { variant: "ghost" }
                    )
                  }
                >
                  Rates
                </NavLink>
              </li>
            </ul>
          </nav>
        </div>
      </header>
      <Suspense fallback={"Loading..."}>
        <Outlet />
      </Suspense>
    </>
  );
};

export default Header;
