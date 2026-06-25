import { Orderplacedtotalid } from "./Ordersplacedtotalid";
import { Placedordercarts } from "./Placedordercarts";
import "./OrdersSection.css";
import "../App.css";
import dayjs from "dayjs";

export function OrderSectionOrders({
  key,
  id,
  itemsOrderPlacedDate,
  itemsShippingCost,
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
  return (
    <>
      <div className="placedorderscarts">
        <Orderplacedtotalid
          itemToAdd={itemToAdd}
          itemsproductprice={itemsproductprice}
          itemsShippingCost={itemsShippingCost}
          itemsProductQuantity={itemsProductQuantity}
          itemsOrderPlacedDate={itemsOrderPlacedDate}
        />
        <div className="Placedordercartswrapper">
          <Placedordercarts
            id={id}
            itemsOrderPlacedDate={itemsOrderPlacedDate}
            itemsDeliveryDate={itemsDeliveryDate}
            itemToAdd={itemToAdd}
            setItemsToAdd={setItemsToAdd}
            itemsimageurl={itemsimageurl}
            itemsproductname={itemsproductname}
            itemsproductprice={itemsproductprice}
            itemsProductQuantity={itemsProductQuantity}
            trackingItem={trackingItem}
            setTrackingItem={setTrackingItem}
          />
        </div>
      </div>
    </>
  );
}
