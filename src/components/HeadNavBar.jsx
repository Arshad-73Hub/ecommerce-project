import { Link, useNavigate, NavLink } from "react-router-dom";
import { useEffect, useRef } from "react";
import logoImage from "../assets/logo-white.svg";
import logoImage2 from "../assets/mobile-logo-white.svg";
import cartImage from "../assets/font-awesome-cart-white.svg";
import rightArrow from "../assets/font-awesome-right-arrow.svg";
import "./HeadNavBar.css";

export function HeadNavBar({ productdetails, itemOnSearch, setItemOnSearch }) {
  const navigate = useNavigate();
  useEffect(() => {
    const loggedInUser = localStorage.getItem("loggedInUser");

    if (!loggedInUser) {
      navigate("/");
    }
  }, []);
  const searchInputValue = useRef(null);
  // function addItemToItemOnSearch(value) {}
  function addItemsonSearch() {
    console.log("inside homepage header");
    const value = searchInputValue.current.value.toLowerCase().trim();

    if (!value) return;

    setItemOnSearch(
      productdetails.filter((item) =>
        item.productname.toLowerCase().includes(value),
      ),
    );
  }

  function emptySearchItems() {
    searchInputValue.current.value = "";
    setItemOnSearch([]);
  }

  function LogoutUser() {
    localStorage.removeItem("loggedInUser");
    navigate("/");
  }

  return (
    <>
      <div className="headnavbar">
        <Link to="/home">
          <div className="logoImagediv" onClick={emptySearchItems}>
            <img className="logoImage" src={logoImage} alt="" />
            <img className="logoImage logoImage2" src={logoImage2} alt="" />
          </div>
        </Link>

        <div className="headinputimagediv">
          <input
            ref={searchInputValue}
            // onChange={(event) => {
            //   addItemToItemOnSearch(event.target.value);
            // }}
            className="navbar-input"
            type="text"
            placeholder="Search"
          />
          <div className="navbar-search-button" onClick={addItemsonSearch}>
            <img className="navbar-arrow-icon" src={rightArrow} alt="" />
          </div>
        </div>
        <div className="ordercartsdiv">
          <NavLink
            to="/OrderSection"
            className={({ isActive }) => (isActive ? "activeLink" : "")}
          >
            <div className="ordersdiv">
              <p>Orders</p>
            </div>
          </NavLink>
          <NavLink
            to="/CartSection"
            className={({ isActive }) => (isActive ? "activeLink" : "")}
          >
            <div className="cartimagediv">
              <img className="cartImage" src={cartImage} alt="cart" />
              <p>Cart</p>
            </div>
          </NavLink>
        </div>

        <div className="logoutbutton" onClick={LogoutUser}>
          Logout
        </div>
      </div>
    </>
  );
}
