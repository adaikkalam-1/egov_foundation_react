import { Link } from "react-router-dom";
import Common from "../../common/Common";

const Navbar = () => {
  const { menuList } = Common();
  console.log("menu", menuList);
  return (
    <header className="fixed-top shadow-sm">
      <nav className="navbar navbar-expand-xl bg-white main-nav py-2">
        <div className="container">
          <Link className="navbar-brand d-flex align-items-center" to="/">
            <div className="logo-text d-flex align-items-center">
              <span className="logo-e">e</span>
              <span className="logo-gov">GOV</span>
            </div>
            <div className="logo-foundation small ms-1 text-uppercase">
              Foundation
            </div>
          </Link>

          <button
            className="navbar-toggler border-0 shadow-none"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navMenu"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navMenu">
            <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
              {menuList?.map((item, index) => (
                <li className="nav-item dropdown" key={index}>
                  <Link className="nav-link" to={item?.path}>
                    {item?.name}
                    <i className="fa-solid fa-chevron-down text-secondary ms-1 icon_size"></i>
                  </Link>
                </li>
              ))}
            </ul>
            <div className="search-box ms-3">
              <i className="fa-solid fa-magnifying-glass text-secondary"></i>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
