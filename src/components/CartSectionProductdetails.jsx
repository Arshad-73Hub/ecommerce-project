import { useState, useRef, useEffect } from "react";
import dayjs from "dayjs";
import "./CartSection.css";

export function CartSectionAddedProducts({
  setItemsToAdd,
  selectedOption: initialOption,
  totalShippingCost,
  setTotalShippingCost,
  id,
  orderPlacedDate,
  freeDeliveryDate,
  fastDeliveryDate,
  expressDeliveryDate,
  itemsimageurl,
  itemsproductname,
  itemsproductprice,
  itemsproductquantity,
}) {
  const [selectedOption, setSelectedOption] = useState(initialOption || "free");
  const [deliveryDate, setDeliveryDate] = useState(
    dayjs().add(11, "day").format("dddd, MMMM D"),
  );
  const [isEditing, setIsEditing] = useState(false);
  const [quantity, setQuantity] = useState(itemsproductquantity);
  const inputValue = useRef(null);

  const [shippingCharge, setShippingCharge] = useState(0);

  const freeShipping = 0;
  const fastShipping = 4.99;
  const expressShipping = 9.99;

  function setFreeShippingCharge() {
    const cost = freeShipping;
    setTotalShippingCost((prev) => {
      return prev - shippingCharge + cost;
    });
    setSelectedOption("free");
    setItemsToAdd((prev) => {
      return prev.map((item) =>
        item.id === id
          ? {
              ...item,
              selectedOption: "free",
              deliveryDate: freeDeliveryDate,
              shippingCost: cost,
            }
          : item,
      );
    });
    setShippingCharge(cost);
    setDeliveryDate(freeDeliveryDate);
  }
  function setFastShippingCharge() {
    const cost = fastShipping;
    setTotalShippingCost((prev) => {
      return prev - shippingCharge + cost;
    });
    setSelectedOption("fast");
    setItemsToAdd((prev) => {
      return prev.map((item) =>
        item.id === id
          ? {
              ...item,
              selectedOption: "fast",
              deliveryDate: fastDeliveryDate,
              shippingCost: cost,
            }
          : item,
      );
    });
    setShippingCharge(cost);
    setDeliveryDate(fastDeliveryDate);
  }
  function setExpressShippingCharge() {
    const cost = expressShipping;
    setTotalShippingCost((prev) => {
      return prev - shippingCharge + cost;
    });
    setSelectedOption("express");
    setItemsToAdd((prev) => {
      return prev.map((item) =>
        item.id === id
          ? {
              ...item,
              selectedOption: "express",
              deliveryDate: expressDeliveryDate,
              shippingCost: cost,
            }
          : item,
      );
    });
    setShippingCharge(cost);
    setDeliveryDate(expressDeliveryDate);
  }
  function deleteParticularItemFromCart() {
    setTotalShippingCost((prev) => {
      return prev - shippingCharge;
    });
    setItemsToAdd((prev) => prev.filter((item) => item.id !== id));
  }

  function checkValueOfItemQuantity() {
    if (quantity == "") {
      alert("Quantity cannot be empty");
    } else {
      if (Number(quantity) < 0) {
        alert("Enter a valid Quantity");
      } else {
        if (Number(quantity) === 0) {
          setItemsToAdd((prev) => prev.filter((item) => item.id !== id));
          setTotalShippingCost((prev) => {
            return prev - shippingCharge;
          });
        }
        if (Number(quantity) > 0) {
          setItemsToAdd((prev) =>
            prev.map((item) =>
              item.id == id
                ? { ...item, itemQuantity: Number(quantity) }
                : item,
            ),
          );
        }

        setIsEditing(false);
      }
    }
  }
  function updateInputValue(value) {
    setQuantity(value);
  }

  return (
    <>
      <div className="cartsectiontotalproductsaddedtocartdiv">
        <div className="cartsectiondeliverydatediv">
          Delivery date: {deliveryDate}
        </div>
        <div className="cartsectionproductdetailsdiv">
          <img
            className="cartsectionsocksitemimage"
            src={itemsimageurl}
            alt="image"
          />
          <div className="cartsectionproductnamepricequantitydiv">
            <div className="cartsectionproductnamediv">{itemsproductname}</div>
            <div className="cartsectionproductpricediv">
              ${itemsproductprice}
            </div>
            <div className="cartsectionquantityupdatesavedeletediv">
              Quantity:{" "}
              <span className="cartsectionquantitynumber">
                {itemsproductquantity}
              </span>
              <span className="cartsectiontoupdatequantityofitemspan">
                {isEditing == true && (
                  <input
                    value={quantity}
                    onChange={(event) => {
                      updateInputValue(event.target.value);
                    }}
                    className="cartsectiontoupdatequantityofitem"
                    min="1"
                    type="number"
                  />
                )}
                {isEditing ? (
                  <span
                    onClick={checkValueOfItemQuantity}
                    className="cartsectionitemquantitysavebutton"
                  >
                    Save
                  </span>
                ) : (
                  <span
                    onClick={() => {
                      setIsEditing(true);
                    }}
                    className="cartsectionupdatefetaure cartsectionupdatedelete"
                  >
                    Update
                  </span>
                )}
              </span>
              <span
                onClick={deleteParticularItemFromCart}
                className="cartsectiondeletefeature cartsectionupdatedelete"
              >
                Delete
              </span>
            </div>
          </div>

          <div className="cartsectionchooseadeliveryoptiondateshippingdiv">
            <div className="cartsectionchooseadelvieryoptiondiv">
              Choose a delivery option
            </div>

            <div className="cartsectiondeliveryoptionradiodiv">
              <input
                value="free"
                onChange={setFreeShippingCharge}
                className="cartsectionradiobutton"
                type="radio"
                checked={selectedOption === "free"}
                name={`delivery-${id}`}
              />
              <div className="cartsectiondeliverydateshippingcostdiv">
                <div className="cartsectiondeliverydateradiodiv">
                  {freeDeliveryDate}
                </div>
                <div className="cartsectionfreeshippingdiv">FREE Shipping</div>
              </div>
            </div>

            <div className="cartsectiondeliveryoptionradiodiv">
              <input
                value="fast"
                onChange={setFastShippingCharge}
                checked={selectedOption === "fast"}
                className="cartsectionradiobutton"
                type="radio"
                name={`delivery-${id}`}
              />
              <div className="cartsectiondeliverydateshippingcostdiv">
                <div className="cartsectiondeliverydateradiodiv">
                  {fastDeliveryDate}
                </div>
                <div className="cartsectionfreeshippingdiv">
                  ${fastShipping} - Shipping
                </div>
              </div>
            </div>

            <div className="cartsectiondeliveryoptionradiodiv">
              <input
                value="express"
                onChange={setExpressShippingCharge}
                checked={selectedOption === "express"}
                className="cartsectionradiobutton"
                type="radio"
                name={`delivery-${id}`}
              />
              <div className="cartsectiondeliverydateshippingcostdiv">
                <div className="cartsectiondeliverydateradiodiv">
                  {expressDeliveryDate}
                </div>
                <div className="cartsectionfreeshippingdiv">
                  ${expressShipping} - Shipping
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
