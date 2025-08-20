import { Link, NavLink, Outlet, useLocation } from "react-router";

import { ShoppingCart } from "lucide-react";

function App() {
  const location = useLocation();

  return (
    <>
      <header>
        <nav>
          <ul>
            <li>
              <NavLink to="/">Home</NavLink>
            </li>
            <li>
              <NavLink to="shop">Shop</NavLink>
            </li>
            {location.pathname.includes('shop') &&
              <li>
                <Link to="shop/cart"><ShoppingCart /></Link>
              </li>
            }
          </ul>
        </nav>
      </header>

      <main>
        <Outlet />
      </main>
    </>
  );
}

export default App;
