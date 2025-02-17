import { Suspense } from "react";
import { MdCurrencyExchange } from "react-icons/md";
import { NavLink, Outlet } from "react-router";

import RatesSelector from "./CurrencySelector";
import ThemeToggle from "./ThemeToggle";
import { buttonVariants } from "./ui/button";

import { useAppSelector } from "@/hooks/reduxHooks";
import { selectBaseCurrency } from "@/redux/currency/selectors";

const Header = () => {
  const baseCurrency = useAppSelector(selectBaseCurrency);

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
                      isActive ? { variant: "default" } : { variant: "ghost" }
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

        <div className="flex gap-10">
          {baseCurrency && <RatesSelector baseCurrency={baseCurrency} />}

          <ThemeToggle />
        </div>
      </header>
      <Suspense fallback={"Loading..."}>
        <Outlet />
      </Suspense>
    </>
  );
};

export default Header;
