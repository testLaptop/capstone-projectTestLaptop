import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <nav>
      <ul>
        <li>
          <Link>Home</Link>
        </li>
        <li>
          <Link>About</Link>
        </li>
        <li>
          <Link>Menu</Link>
        </li>
        <li>
          <Link>Rezervations</Link>
        </li>
        <li>
          <Link>Order Online</Link>
        </li>
        <li>
          <Link>Login</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
