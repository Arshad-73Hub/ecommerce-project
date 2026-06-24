import { CartSectionProducts } from "./CartSectionProducts";
import { CartSectionPaymentSummary } from "./CartSectionPaymentSummary";
import { CartSectionHeader } from "./CartSectionHeader";
import "./CartSection.css";

export function CartSectionsMainSection({
  setItemOnSearch,
  totalValueOfOrder,
  setTotalValueOfOrder,
  totalShippingCost,
  setTotalShippingCost,
  orderPlacedDate,
  freeDeliveryDate,
  fastDeliveryDate,
  expressDeliveryDate,
  itemToAdd,
  setItemsToAdd,
  orderItemsToAdd,
  setOrderItemsToAdd,
}) {
  return (
    <>
      <title>Checkout</title>
      <CartSectionHeader
        setItemOnSearch={setItemOnSearch}
        itemToAdd={itemToAdd}
        setItemsToAdd={setItemsToAdd}
      />
      <div className="cartsectionsmainsection">
        <div className="cartsectionreviewordertext">Review Your Order</div>
        <div className="cartsectiondeliverydetails">
          <CartSectionProducts
            totalShippingCost={totalShippingCost}
            setTotalShippingCost={setTotalShippingCost}
            orderPlacedDate={orderPlacedDate}
            freeDeliveryDate={freeDeliveryDate}
            fastDeliveryDate={fastDeliveryDate}
            expressDeliveryDate={expressDeliveryDate}
            itemToAdd={itemToAdd}
            setItemsToAdd={setItemsToAdd}
          />
          <CartSectionPaymentSummary
            totalValueOfOrder={totalValueOfOrder}
            setTotalValueOfOrder={setTotalValueOfOrder}
            totalShippingCost={totalShippingCost}
            setTotalShippingCost={setTotalShippingCost}
            orderItemsToAdd={orderItemsToAdd}
            setOrderItemsToAdd={setOrderItemsToAdd}
            itemToAdd={itemToAdd}
            setItemsToAdd={setItemsToAdd}
          />
        </div>
      </div>
    </>
  );
}
