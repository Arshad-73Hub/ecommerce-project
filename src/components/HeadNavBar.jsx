import { Link, useNavigate } from "react-router-dom";
import { useRef } from "react";
import logoImage from "../assets/logo-white.svg";
import logoImage2 from "../assets/mobile-logo-white.svg";
import cartImage from "../assets/font-awesome-cart-white.svg";
import rightArrow from "../assets/font-awesome-right-arrow.svg";
import "./HeadNavBar.css";

export function HeadNavBar({ productdetails, itemOnSearch, setItemOnSearch }) {
  const navigate = useNavigate();
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
    navigate("/");
  }

  return (
    <>
      <div className="headnavbar">
        <div className="logoImagediv" onClick={emptySearchItems}>
          <img className="logoImage" src={logoImage} alt="" />
          <img className="logoImage logoImage2" src={logoImage2} alt="" />
        </div>

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
          <Link to="/OrderSection">
            <div className="ordersdiv">
              <p>Orders</p>
            </div>
          </Link>
          <Link to="/CartSection">
            <div className="cartimagediv">
              <img className="cartImage" src={cartImage} alt="cart" />
              <p>Cart</p>
            </div>
          </Link>
        </div>
      </div>
    </>
  );
}
