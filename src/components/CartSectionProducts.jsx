import { CartSectionAddedProducts } from "./CartSectionProductdetails";

import "./CartSection.css";

export function CartSectionProducts({
  totalShippingCost,
  setTotalShippingCost,
  orderPlacedDate,
  freeDeliveryDate,
  fastDeliveryDate,
  expressDeliveryDate,
  itemToAdd,
  setItemsToAdd,
}) {
  return (
    <>
      <div className="cartsectionproductdetailsanddeliverydatediv">
        {itemToAdd.map((items, index) => (
          <CartSectionAddedProducts
            id={crypto.randomUUID()}
            index={index}
            setItemsToAdd={setItemsToAdd}
            totalShippingCost={totalShippingCost}
            setTotalShippingCost={setTotalShippingCost}
            orderPlacedDate={orderPlacedDate}
            freeDeliveryDate={freeDeliveryDate}
            fastDeliveryDate={fastDeliveryDate}
            expressDeliveryDate={expressDeliveryDate}
            itemsimageurl={items.imageurl}
            itemsproductname={items.productname}
            itemsproductprice={items.productprice}
            itemsproductquantity={items.itemQuantity}
          />
        ))}
      </div>
    </>
  );
}
