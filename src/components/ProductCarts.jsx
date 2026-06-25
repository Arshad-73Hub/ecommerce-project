import { useRef, useState } from "react";
import dayjs from "dayjs";
// import socksImage from "../assets/athletic-cotton-socks-6-pairs.jpg";
import ratingsImage from "../assets/rating-45.png";
import checkMarkImage from "../assets/font-awesome-checkmark.svg";
import "./ProductCarts.css";
import "../HomePage.css";
import "../App.css";

export function ProductCarts({
  starImage,
  rating,
  id,
  orderPlacedDate,
  imageurl,
  productname,
  price,
  itemToAdd,
  setItemsToAdd,
}) {
  const [itemQuantity, setItemQuantity] = useState(1);
  const deliveryDate = dayjs().add(11, "day").format("dddd, MMMM D");

  const addtocarttext = useRef(null);
  function showaddeditemstocart() {
    addtocarttext.current.style.opacity = "1";
    setTimeout(() => {
      addtocarttext.current.style.opacity = "0";
    }, 1000);

    const newobj = {
      imageurl: imageurl,
      productname: productname,
      productprice: price,
      itemQuantity: itemQuantity,
      shippingCost: 0,
      deliveryDate: deliveryDate,
      orderPlacedDate: orderPlacedDate,
      selectedOption: "free",
      id: id,
    };
    setItemsToAdd((prev) => [...prev, newobj]);
  }

  function handleQuantityofitemsinHomePage(value) {
    setItemQuantity(value);
  }

  return (
    <>
      <div className="carts-div">
        <div className="socksdiv">
          <img className="socksimage" src={imageurl} alt="socks" />
        </div>
        <div className="product-namediv product-namedivprop">{productname}</div>
        <div className="product-ratingdiv">
          <div className="product-ratingimagediv">
            <img className="product-ratingimage" src={starImage} alt="stars" />
          </div>
          <div className="product-ratingtext">{rating}</div>
        </div>
        <div className="product-pricediv">${price}</div>
        <div className="carts-quantitydiv">
          <select
            onChange={(event) => {
              handleQuantityofitemsinHomePage(event.target.value);
            }}
            className="carts-quantity"
            name=""
            id=""
          >
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
            <option value="6">6</option>
            <option value="7">7</option>
            <option value="8">8</option>
            <option value="9">9</option>
            <option value="10">10</option>
          </select>
        </div>
        <div ref={addtocarttext} className="addedtocartmessagediv">
          <img className="checkMarkImage" src={checkMarkImage} alt="" />{" "}
          <span>Added</span>
        </div>
        <button onClick={showaddeditemstocart} className="addtocartbutton">
          Add to Cart
        </button>
      </div>
    </>
  );
}
