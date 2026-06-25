import { OrderSectionOrders } from "./OrderSectionOrders";
import { HeadNavBar } from "./HeadNavBar";

import "./OrdersSection.css";
import "../App.css";

export function OrdersSection({
  setItemOnsearch,
  freeDeliveryDate,
  orderPlacedDate,
  itemToAdd,
  setItemsToAdd,
  orderItemsToAdd,
  setOrderItemsToAdd,
  trackingItem,
  setTrackingItem,
}) {
  console.log(orderItemsToAdd);
  return (
    <>
      <title>Orders</title>
      <HeadNavBar setItemOnSearch={setItemOnsearch} />
      <div className="orderswrapperdiv">
        <div className="mainsectionoforders">
          <div className="yourordertextdiv">Your Orders</div>
          {orderItemsToAdd.map((items) => (
            <OrderSectionOrders
              key={items.id}
              id={items.id}
              itemToAdd={itemToAdd}
              setItemsToAdd={setItemsToAdd}
              itemsimageurl={items.imageurl}
              itemsproductname={items.productname}
              itemsproductprice={items.productprice}
              itemsDeliveryDate={items.deliveryDate}
              itemsShippingCost={items.shippingCost}
              itemsOrderPlacedDate={items.orderPlacedDate}
              itemsProductQuantity={items.itemQuantity}
              trackingItem={trackingItem}
              setTrackingItem={setTrackingItem}
            />
          ))}
        </div>
      </div>
    </>
  );
}
