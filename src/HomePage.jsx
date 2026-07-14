import { HeadNavBar } from "./components/HeadNavBar";
import { ProductCarts } from "./components/ProductCarts";

import "./App.css";
import "./HomePage.css";
import { useNavigate } from "react-router";
import { useEffect } from "react";

export function HomePage({
  orderPlacedDate,
  itemOnSearch,
  setItemOnSearch,
  productdetails,
  setproductdetails,
  itemToAdd,
  setItemsToAdd,
}) {
  const navigate = useNavigate();
  useEffect(() => {
    const loggedInUser = localStorage.getItem("loggedInUser");

    if (!loggedInUser) {
      navigate("/");
    }
  }, []);
  function LogoutUser() {
    localStorage.removeItem("loggedInUser");
    navigate("/");
  }
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
          ? itemOnSearch.map((productitem) => (
              <ProductCarts
                key={productitem.id}
                id={productitem.id}
                imageurl={productitem.imageurl}
                productname={productitem.productname}
                price={productitem.price}
                itemToAdd={itemToAdd}
                setItemsToAdd={setItemsToAdd}
                starImage={productitem.starImage}
                rating={productitem.rating}
              />
            ))
          : productdetails.map((productitem) => (
              <ProductCarts
                key={productitem.id}
                id={productitem.id}
                orderPlacedDate={orderPlacedDate}
                imageurl={productitem.imageurl}
                productname={productitem.productname}
                price={productitem.price}
                itemToAdd={itemToAdd}
                setItemsToAdd={setItemsToAdd}
                starImage={productitem.starImage}
                rating={productitem.rating}
              />
            ))}
        <div className="logoutbutton" onClick={LogoutUser}>
          Logout
        </div>
      </div>
      {/* <OrdersSection /> */}
      {/* <CartSectionHeader />
      <CartSectionsMainSection /> */}
      {/* <TrackingSection /> */}
    </>
  );
}
