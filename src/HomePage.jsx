import { HeadNavBar } from "./components/HeadNavBar";
import { ProductCarts } from "./components/ProductCarts";

import "./App.css";
import "./HomePage.css";

export function HomePage({
  orderPlacedDate,
  itemOnSearch,
  setItemOnSearch,
  productdetails,
  setproductdetails,
  itemToAdd,
  setItemsToAdd,
}) {
  return (
    <>
      <title>Ecommerce Project</title>
      <HeadNavBar
        productdetails={productdetails}
        itemOnSearch={itemOnSearch}
        setItemOnSearch={setItemOnSearch}
      />
      <div className="mainsection maincontainer">
        {itemOnSearch.length > 0
          ? itemOnSearch.map((productitem, index) => (
              <ProductCarts
                key={index}
                imageurl={productitem.imageurl}
                productname={productitem.productname}
                price={productitem.price}
                itemToAdd={itemToAdd}
                setItemsToAdd={setItemsToAdd}
              />
            ))
          : productdetails.map((productitem, index) => (
              <ProductCarts
                key={index}
                orderPlacedDate={orderPlacedDate}
                imageurl={productitem.imageurl}
                productname={productitem.productname}
                price={productitem.price}
                itemToAdd={itemToAdd}
                setItemsToAdd={setItemsToAdd}
              />
            ))}
      </div>
      {/* <OrdersSection /> */}
      {/* <CartSectionHeader />
      <CartSectionsMainSection /> */}
      {/* <TrackingSection /> */}
    </>
  );
}
