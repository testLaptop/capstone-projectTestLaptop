const Nav = () => {
  return (
    <nav>
      <ul>
        <li>Doormat Navigation</li>
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
      <ul>
        <li>Contact</li>
        <li>
          <Link>Address</Link>
        </li>
        <li>
          <Link>Phone Number</Link>
        </li>
        <li>
          <Link>Email</Link>
        </li>
      </ul>
      <ul>
        <li>Socail Media Links</li>
        <li>
          <Link>Facebook</Link>
        </li>
        <li>
          <Link>Instagram</Link>
        </li>
        <li>
          <Link>GitHub</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
