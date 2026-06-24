import { useState, useRef, useEffect } from "react";
import dayjs from "dayjs";
import "./CartSection.css";

export function CartSectionAddedProducts({
  setItemsToAdd,
  index,
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
  const [deliveryDate, setDeliveryDate] = useState(
    dayjs().add(11, "day").format("dddd, MMMM D"),
  );

  const updateButton = useRef(null);
  const inputSaveSpan = useRef(null);
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
    setItemsToAdd((prev) => {
      return prev.map((item, i) =>
        index === i
          ? {
              ...item,
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
    setItemsToAdd((prev) => {
      return prev.map((item, i) =>
        index === i
          ? {
              ...item,
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
    setItemsToAdd((prev) => {
      return prev.map((item, i) =>
        index === i
          ? {
              ...item,
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
    setItemsToAdd((prev) =>
      prev.filter((item, i) => {
        if (index != i) {
          return item;
        }
      }),
    );
  }

  function checkValueOfItemQuantity() {
    if (inputValue.current.value == "") {
      alert("Quantity cannot be empty");
      return;
    }
    if (Number(inputValue.current.value) < 0) {
      alert("Enter a valid Quantity");
    } else {
      if (Number(inputValue.current.value) === 0) {
        setItemsToAdd((prev) => prev.filter((item, i) => i !== index));
      }
      if (Number(inputValue.current.value) > 0) {
        setItemsToAdd((prev) =>
          prev.map((item, i) =>
            index == i
              ? { ...item, itemQuantity: inputValue.current.value }
              : item,
          ),
        );
      }
      updateButton.current.style.display = "inline-block";
      inputSaveSpan.current.style.display = "none";
    }
  }

  function updateItemQuantity() {
    updateButton.current.style.display = "none";
    inputSaveSpan.current.style.display = "inline-block";
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
              <span
                ref={inputSaveSpan}
                className="cartsectiontoupdatequantityofitemspan"
              >
                <input
                  ref={inputValue}
                  className="cartsectiontoupdatequantityofitem"
                  min="1"
                  type="number"
                />{" "}
                <span
                  onClick={checkValueOfItemQuantity}
                  className="cartsectionitemquantitysavebutton"
                >
                  Save
                </span>
              </span>
              <span
                ref={updateButton}
                onClick={updateItemQuantity}
                className="cartsectionupdatefetaure cartsectionupdatedelete"
              >
                Update
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
                onChange={setFreeShippingCharge}
                className="cartsectionradiobutton"
                type="radio"
                defaultChecked
                name={id}
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
                onChange={setFastShippingCharge}
                className="cartsectionradiobutton"
                type="radio"
                name={id}
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
                onChange={setExpressShippingCharge}
                className="cartsectionradiobutton"
                type="radio"
                name={id}
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
