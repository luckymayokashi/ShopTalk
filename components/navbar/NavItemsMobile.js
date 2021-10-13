import Link from "next/dist/client/link";

const NavItemsMobile = () => {
  //Map over array passed to compoenent and build out each item based on list of categories

  const closeMenu = () => {
    const menu = document.getElementById("mobile--nav-button");
    menu.classList.remove("nav--active");
    document.body.style.overflow = "scroll";
  };

  return (
    <>
      <li className="nav__item">
        <Link href="/">
          <a onClick={closeMenu} className="nav__link">
            Home
          </a>
        </Link>
      </li>
      <li className="nav__item">
        <Link href="/tag/getting-started">
          <a onClick={closeMenu} className="nav__link">
            Getting Started
          </a>
        </Link>
      </li>
      <li className="nav__item">
        <Link href="/tag/cars-and-stuff">
          <a onClick={closeMenu} className="nav__link">
            Cars and Stuff
          </a>
        </Link>
      </li>
      <li className="nav__item">
        <Link href="/tag/dev-corner">
          <a onClick={closeMenu} className="nav__link">
            Dev Corner
          </a>
        </Link>
      </li>
      <li className="nav__item">
        <Link href="/tag/getting-started">
          <a onClick={closeMenu} className="nav__link">
            Catagory
          </a>
        </Link>
      </li>
    </>
  );
};

export default NavItemsMobile;
