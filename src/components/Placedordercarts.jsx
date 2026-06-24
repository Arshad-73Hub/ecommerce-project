import { Link } from "react-router-dom";
import { useRef } from "react";
import dayjs from "dayjs";
import cartImage from "../assets/font-awesome-cart-white.svg";
import checkmarimage from "../assets/font-awesome-checkmark-white.svg";
import "./OrdersSection.css";
import "../App.css";

export function Placedordercarts({
  itemsOrderPlacedDate,
  itemsDeliveryDate,
  itemToAdd,
  setItemsToAdd,
  itemsimageurl,
  itemsproductname,
  itemsproductprice,
  itemsProductQuantity,
  trackingItem,
  setTrackingItem,
}) {
  const deliveryDate = dayjs().add(11, "day").format("dddd, MMMM D");
  const getaddtocartelementimage = useRef(null);
  const getaddtocartelementdiv = useRef(null);
  const getcheckmarkimageelementdiv = useRef(null);
  function showTrackingofProduct() {
    const obj = {
      imageurl: itemsimageurl,
      productname: itemsproductname,
      deliveryDate: itemsDeliveryDate,
      itemQuantity: itemsProductQuantity,
    };
    setTrackingItem(obj);
  }

  function addItemsToCartfromOrderSection() {
    const tempobj = {
      imageurl: itemsimageurl,
      productname: itemsproductname,
      productprice: itemsproductprice,
      itemQuantity: 1,
      deliveryDate: deliveryDate,
      shippingCost: 0,
      orderPlacedDate: itemsOrderPlacedDate,
    };
    setItemsToAdd([...itemToAdd, tempobj]);
    getaddtocartelementdiv.current.style.display = "none";
    getaddtocartelementimage.current.style.display = "none";
    getcheckmarkimageelementdiv.current.style.display = "flex";
    setTimeout(() => {
      getaddtocartelementdiv.current.style.display = "block";
      getaddtocartelementimage.current.style.display = "block";
      getcheckmarkimageelementdiv.current.style.display = "none";
    }, 1000);
  }

  return (
    <>
      <div className="placedordercontainerdiv">
        <div className="placedorder1div">
          <div className="ordersectionsocksimagediv">
            <img className="socksImage" src={itemsimageurl} alt="image" />
          </div>
          <div className="ordersectionproductnamearrivingquantityaddtocartdiv">
            <div className="ordernamediv orderplacedtextdiv">
              {itemsproductname}
            </div>
            <div className="orderarrivingdatediv">
              Arriving on: {itemsDeliveryDate}
            </div>
            <div className="orderquantitydiv">
              Quantity: {itemsProductQuantity}
            </div>
            <div className="ordersectionimageaddtocartdiv">
              <button
                onClick={addItemsToCartfromOrderSection}
                className="ordersectionaddbutton "
              >
                <img
                  ref={getaddtocartelementimage}
                  className="ordersectionbuttoncartimage"
                  src={cartImage}
                  alt="cartimage"
                />
                <span
                  ref={getaddtocartelementdiv}
                  className="ordersectionbuttontext"
                >
                  Add to Cart
                </span>
                <span
                  ref={getcheckmarkimageelementdiv}
                  className="OrderSectioncheckmarkaddedimage"
                >
                  <img
                    className="OrderSectioncheckmarkimage"
                    src={checkmarimage}
                    alt=""
                  />
                  Added
                </span>
              </button>
            </div>
          </div>
          <div className="ordersectiontrackingbuttondiv">
            <Link to="/TrackingSection" className="Trackbuttonlinkdiv">
              <button
                onClick={showTrackingofProduct}
                className="ordersectiontrackingbutton"
              >
                Track Package
              </button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
