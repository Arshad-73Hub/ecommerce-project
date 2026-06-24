import "./OrdersSection.css";
import "../App.css";

export function Orderplacedtotalid({
  itemToAdd,
  itemsOrderPlacedDate,
  itemsproductprice,
  itemsShippingCost,
  itemsProductQuantity,
}) {
  const itemTotalPrice =
    Number(itemsproductprice * itemsProductQuantity) + itemsShippingCost;
  const taxonitem = (itemTotalPrice * 10) / 100;
  const totalwithtaxitemvalue = itemTotalPrice + taxonitem;
  return (
    <>
      <div className="orderplacedtotaliddiv">
        <div className="orderplacedandtotaldiv">
          <div className="orderplacedtotaldiv">
            <div className="orderplacedtextdiv ordersectionorderplaceddiv">
              Order Placed:
            </div>
            <div>{itemsOrderPlacedDate}</div>
          </div>
          <div className="totalvalueoforderdiv">
            <div className="orderplacedtextdiv">Total:</div>
            <div>${totalwithtaxitemvalue.toFixed(2)}</div>
          </div>
        </div>
        <div className="orderiddiv">
          <div className="ordersectionorderiddiv orderplacedtextdiv">
            Order ID:
          </div>
          <div className="orderidvaluediv">
            27cba69d-4c3d-4098-b42d-ac7fa62b7664
          </div>
        </div>
      </div>
    </>
  );
}
