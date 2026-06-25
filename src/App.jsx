import { useState } from "react";
import dayjs from "dayjs";

import { HomePage } from "./HomePage";
import { Routes, Route } from "react-router-dom";
import { OrdersSection } from "./components/OrdersSectionpage";
import { CartSectionsMainSection } from "./components/CartSectionsMainSectionpage";
import { TrackingSection } from "./components/TrackingSectionpage";

import rating4 from "./assets/rating-4.png";
import rating45 from "./assets/rating-45.png";
import rating5 from "./assets/rating-5.png";

import socksImage from "./assets/athletic-cotton-socks-6-pairs.jpg";
import tshirtImage from "./assets/adults-plain-cotton-tshirt-2-pack-teal.jpg";
import basketballImage from "./assets/intermediate-composite-basketball.jpg";
import toasterImage from "./assets/2-slot-toaster-white.jpg";
import dinnerSetImage from "./assets/elegant-white-dinner-plate-set.jpg";
import cookingPotImage from "./assets/3-piece-cooking-set.jpg";
import towelImage from "./assets/luxury-towel-set.jpg";
import tissueImage from "./assets/facial-tissue-2-ply-8-boxes.jpg";
import sandalheelsImage from "./assets/women-sandal-heels-white-pink.jpg";
import sunglassImage from "./assets/round-sunglasses-gold.jpg";
import curtainsImage from "./assets/blackout-curtain-set-beige.jpg";
import hotwatercattleImage from "./assets/electric-steel-hot-water-kettle-white.jpg";
import athleticshoesImage from "./assets/knit-athletic-sneakers-gray.jpg";
import sunhatImage from "./assets/straw-sunhat.jpg";
import athlecticsneakerwhiteImage from "./assets/men-athletic-shoes-white.jpg";
import menswoolsweaterImage from "./assets/men-stretch-wool-sweater-black.jpg";
import matImage from "./assets/bathroom-mat.jpg";
import "./App.css";
import "./HomePage.css";

function App() {
  const [productdetails, setproductdetails] = useState([
    {
      imageurl: socksImage,
      productname: "Black and Gray Athletic Cotton Socks - 6 Pairs",
      price: "10.90",
      id: 1,
      starImage: rating45,
      rating: "87",
    },
    {
      imageurl: basketballImage,
      productname: "Intermediate Size Basketball",
      price: "20.95",
      id: 2,
      starImage: rating4,
      rating: "127",
    },
    {
      imageurl: tshirtImage,
      productname: "Adults Plain Cotton T-Shirt - 2 Pack",
      price: "7.99",
      id: 3,
      starImage: rating45,
      rating: "56",
    },
    {
      imageurl: toasterImage,
      productname: "2 Slot Toaster - White",
      price: "18.99",
      id: 4,
      starImage: rating5,
      rating: "2197",
    },
    {
      imageurl: dinnerSetImage,
      productname: "2 Piece White Dinner Plate Set",
      price: "20.67",
      id: 5,
      starImage: rating4,
      rating: "37",
    },
    {
      imageurl: cookingPotImage,
      productname: "3 Piece Non-Stick, Black Cooking Pot Set",
      price: "34.99",
      id: 6,
      starImage: rating45,
      rating: "175",
    },
    {
      imageurl: towelImage,
      productname: "2 Piece Luxury Towel Set - White",
      price: "35.99",
      id: 7,
      starImage: rating45,
      rating: "144",
    },
    {
      imageurl: tissueImage,
      productname: "Ultra Soft Tissue 2-Ply - 8 Boxes",
      price: "23.74",
      id: 8,
      starImage: rating4,
      rating: "99",
    },
    {
      imageurl: sandalheelsImage,
      productname: "Women's Sandal Heels - Pink",
      price: "53.00",
      id: 9,
      starImage: rating45,
      rating: "2286",
    },
    {
      imageurl: sunglassImage,
      productname: "Round Sunglasses",
      price: "35.60",
      id: 10,
      starImage: rating45,
      rating: "30",
    },
    {
      imageurl: curtainsImage,
      productname: "Blackout Curtains Set - Beige",
      price: "45.999",
      id: 11,
      starImage: rating45,
      rating: "232",
    },
    {
      imageurl: hotwatercattleImage,
      productname: "Electric Hot Water Kettle - White",
      price: "50.74",
      id: 12,
      starImage: rating5,
      rating: "846",
    },
    {
      imageurl: athleticshoesImage,
      productname: "Waterproof Knit Athletic Sneakers - Gray",
      price: "53.90",
      id: 13,
      starImage: rating4,
      rating: "89",
    },
    {
      imageurl: sunhatImage,
      productname: "Straw Wide Brim Sun Hat",
      price: "22.00",
      id: 14,
      starImage: rating4,
      rating: "215",
    },
    {
      imageurl: athlecticsneakerwhiteImage,
      productname: "Men's Athletic Sneaker - White",
      price: "45.90",
      id: 15,
      starImage: rating4,
      rating: "229",
    },
    {
      imageurl: menswoolsweaterImage,
      productname: "Men's Wool Sweater - Black",
      price: "33.74",
      id: 16,
      starImage: rating45,
      rating: "2465",
    },
    {
      imageurl: matImage,
      productname: "Bathroom Bath Mat 16 x 32 Inch - Grey",
      price: "18.50",
      id: 17,
      starImage: rating45,
      rating: "119",
    },
  ]);

  const [itemOnSearch, setItemOnSearch] = useState([]);
  const [itemToAdd, setItemsToAdd] = useState([]);
  const [orderItemsToAdd, setOrderItemsToAdd] = useState([]);
  const [trackingItem, setTrackingItem] = useState(null);
  const [totalValueOfOrder, setTotalValueOfOrder] = useState(0);

  const orderPlacedDate = dayjs().format("dddd, MMMM D");
  const freeDeliveryDate = dayjs().add(11, "day").format("dddd, MMMM D");
  const fastDeliveryDate = dayjs().add(5, "day").format("dddd, MMMM D");
  const expressDeliveryDate = dayjs().add(1, "day").format("dddd, MMMM D");
  const [totalShippingCost, setTotalShippingCost] = useState(0);

  console.log("itemOnSearch", itemOnSearch);

  return (
    <>
      <Routes>
        <Route
          path="/"
          element={
            <HomePage
              orderPlacedDate={orderPlacedDate}
              itemOnSearch={itemOnSearch}
              setItemOnSearch={setItemOnSearch}
              productdetails={productdetails}
              setproductdetails={setproductdetails}
              itemToAdd={itemToAdd}
              setItemsToAdd={setItemsToAdd}
            />
          }
        />
        <Route
          path="/OrderSection"
          element={
            <OrdersSection
              setItemOnSearch={setItemOnSearch}
              freeDeliveryDate={freeDeliveryDate}
              orderPlacedDate={orderPlacedDate}
              itemToAdd={itemToAdd}
              setItemsToAdd={setItemsToAdd}
              orderItemsToAdd={orderItemsToAdd}
              setOrderItemsToAdd={setOrderItemsToAdd}
              trackingItem={trackingItem}
              setTrackingItem={setTrackingItem}
            />
          }
        />
        <Route
          path="/CartSection"
          element={
            <CartSectionsMainSection
              setItemOnSearch={setItemOnSearch}
              totalValueOfOrder={totalValueOfOrder}
              setTotalValueOfOrder={setTotalValueOfOrder}
              totalShippingCost={totalShippingCost}
              setTotalShippingCost={setTotalShippingCost}
              orderPlacedDate={orderPlacedDate}
              freeDeliveryDate={freeDeliveryDate}
              fastDeliveryDate={fastDeliveryDate}
              expressDeliveryDate={expressDeliveryDate}
              itemToAdd={itemToAdd}
              setItemsToAdd={setItemsToAdd}
              orderItemsToAdd={orderItemsToAdd}
              setOrderItemsToAdd={setOrderItemsToAdd}
            />
          }
        />
        <Route
          path="/TrackingSection"
          element={
            <TrackingSection
              trackingItemImage={trackingItem?.imageurl}
              trackingItemName={trackingItem?.productname}
              trackingItemDeliveryDate={trackingItem?.deliveryDate}
              trackingItemQuantity={trackingItem?.itemQuantity}
            />
          }
        />
      </Routes>
    </>
  );
}
export default App;
