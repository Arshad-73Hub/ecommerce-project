import "./CartSection.css";

export function CartSectionPaymentSummary({
  totalValueOfOrder,
  setTotalValueOfOrder,
  totalShippingCost,
  setTotalShippingCost,
  itemToAdd,
  setItemsToAdd,
  orderItemsToAdd,
  setOrderItemsToAdd,
}) {
  const totalvalueoforder = itemToAdd.reduce(
    (sum, num) => sum + Number(num.productprice * num.itemQuantity),
    0,
  );
  const totalordervalue = totalvalueoforder;
  const ShippingCost = totalShippingCost;
  const totaltaxbeforevalue = totalordervalue + ShippingCost;
  const Estimatedtax = (totaltaxbeforevalue * 10) / 100;
  const totaltaxaftervalue = totaltaxbeforevalue + Estimatedtax;

  function addProductsToOrderSection() {
    setOrderItemsToAdd([...itemToAdd, ...orderItemsToAdd]);
    setTotalValueOfOrder(totaltaxaftervalue);
    setItemsToAdd([]);
    setTotalShippingCost(0);
  }

  return (
    <>
      <div className="cartsectionpaymentsummarydiv">
        <div className="cartsectionpaymentsummarytextdiv">Payment Summary</div>
        <div className="cartsectionpaymentsummarysamefeatureofgrid ordersectiontotalitempricediv">
          <div>Items ({itemToAdd.length}):</div>
          <div>${totalordervalue.toFixed(2)}</div>
        </div>
        <div className="cartsectionpaymentsummarysamefeatureofgrid">
          <div>Shipping & handling:</div>
          <div>${ShippingCost.toFixed(2)}</div>
        </div>
        <div className="cartsectionpaymentsummarysamefeatureofgrid">
          <div className="cartsectiontotaltaxpricesamefeature ">
            Total value before tax:
          </div>
          <div className="cartsectiontotaltaxpricesamefeature cartsectiontotalpricebeforetaxdiv">
            ${totaltaxbeforevalue.toFixed(2)}
          </div>
        </div>
        <div className="cartsectionpaymentsummarysamefeatureofgrid">
          <div>Estimated tax (10%):</div>
          <div>${Estimatedtax.toFixed(2)}</div>
        </div>
        <div className="cartsectionordertotalaftertaxpricediv">
          <div className="cartsectionordertotaltextdiv">Order total:</div>
          <div>${totaltaxaftervalue.toFixed(2)}</div>
        </div>
        <div>
          <button
            onClick={addProductsToOrderSection}
            className={
              itemToAdd.length != 0
                ? "cartsectionpaymentsummarybutton"
                : "cartsectionpaymentbuttondisable"
            }
          >
            Place your order
          </button>
        </div>
      </div>
    </>
  );
}
