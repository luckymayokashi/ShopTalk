import Link from "next/link";
import { useRouter } from "next/router";

const NavItems = () => {
  //Map over array passed to compoenent and build out each item based on list of categories
  const router = useRouter();

  //console.log(router.query.categoryName);
  //console.log(router.pathname);

  const selectedCategory = router.query.categoryName;

  return (
    <>
      <li className="nav-item hover-underline-animation">
        <Link href="#">
          <a
            className={
              selectedCategory == "category" ? "nav-link active" : "nav-link"
            }
          >
            Category
          </a>
        </Link>
      </li>
      <li className="nav-item hover-underline-animation">
        <Link href="/tag/getting-started">
          <a
            className={
              selectedCategory == "getting-started"
                ? "nav-link active"
                : "nav-link"
            }
          >
            Getting Started
          </a>
        </Link>
      </li>
      <li className="nav-item hover-underline-animation">
        <Link href="/">
          <a
            className={router.pathname == "/" ? "nav-link active" : "nav-link"}
          >
            Home
          </a>
        </Link>
      </li>
      <li className="nav-item hover-underline-animation">
        <Link href="/tag/cars-and-stuff">
          <a
            className={
              selectedCategory == "cars-and-stuff"
                ? "nav-link active"
                : "nav-link"
            }
          >
            Cars and Stuff
          </a>
        </Link>
      </li>
      <li className="nav-item hover-underline-animation">
        <Link href="/tag/dev-corner">
          <a
            className={
              selectedCategory == "dev-corner" ? "nav-link active" : "nav-link"
            }
          >
            Dev Corner
          </a>
        </Link>
      </li>
    </>
  );
};

export default NavItems;
