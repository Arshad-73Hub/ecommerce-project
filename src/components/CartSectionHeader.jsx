import greenLogoImage from "../assets/mobile-logo.svg";
import logoImage from "../assets/logo.svg";
import dollarImage from "../assets/font-awesome-money-check.svg";
import { Link } from "react-router-dom";

import "./CartSection.css";

export function CartSectionHeader({
  itemToAdd,
  setItemsToAdd,
  setItemOnSearch,
}) {
  const totalItems = itemToAdd.reduce(
    (sum, num) => sum + Number(num.itemQuantity),
    0,
  );

  function emptytItemOnSearch() {
    setItemOnSearch([]);
  }

  return (
    <>
      <div className="cartsectionheaderwrapper">
        <div className="cartsectionheaderdiv">
          <Link to="/home" onClick={emptytItemOnSearch}>
            <div className="cartsectionlogoimagediv">
              <img
                src={logoImage}
                alt="image"
                className="cartsectionlogoimage"
              />
              <img
                src={greenLogoImage}
                alt=""
                className="cartsectionmobilelogoimage"
              />
            </div>
          </Link>
          <div className="cartsectioncheckouttextdiv">
            Checkout (
            <span className="cartsectionchecout3item">{totalItems} items</span>)
          </div>
          <div className="cartsectiondollarimagediv">
            <img
              src={dollarImage}
              alt="img"
              className="cartsectiondollarimage"
            />
          </div>
        </div>
      </div>
    </>
  );
}
