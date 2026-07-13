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
import rating35 from "./assets/rating-35.png";

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
import balletflats from "./assets/women-knit-ballet-flat-white.jpg";
import poloshirt from "./assets/men-golf-polo-t-shirt-gray.jpg";
import laundrydetergent from "./assets/laundry-detergent-tabs.jpg";
import coverset from "./assets/duvet-cover-set-gray-queen.jpg";
import menspaints from "./assets/men-chino-pants-beige.jpg";
import navigaotsunglasses from "./assets/men-navigator-sunglasses-black.jpg";
import brownflatshoes from "./assets/men-brown-flat-sneakers.jpg";
import cookingset from "./assets/non-stick-cooking-set-4-pieces.jpg";
import mirror from "./assets/vanity-mirror-pink.jpg";
import glassjars from "./assets/glass-screw-lid-food-containers.jpg";
import coffeemachine from "./assets/black-and-silver-espresso-maker.jpg";
import blackcurtains from "./assets/blackout-curtains-set-teal.jpg";
import bathtowels from "./assets/bath-towel-set-gray-rosewood.jpg";
import sneakershoesgray from "./assets/athletic-skateboard-shoes-gray.jpg";
import hoodie from "./assets/men-cozy-fleece-hoodie-light-teal.jpg";
import bowlset from "./assets/artistic-bowl-set-6-piece.jpg";
import kitchenpapertowels from "./assets/kitchen-paper-towels-8-pack.jpg";

import "./App.css";
import "./HomePage.css";
import SignIn from "./components/LoginPage/SigninForm";
import Signup from "./components/LoginPage/SignupForm";
import Forgot from "./components/LoginPage/ForgotPage";

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
    {
      imageurl: balletflats,
      productname: "Women's Ballet Flat - White",
      price: "26.40",
      id: 18,
      starImage: rating4,
      rating: "326",
    },
    {
      imageurl: poloshirt,
      productname: "Men's Golf Polo Shirt - Gray",
      price: "15.99",
      id: 19,
      starImage: rating45,
      rating: "2556",
    },
    {
      imageurl: laundrydetergent,
      productname: "Laundry Detergent Tabs, 50 Loads",
      price: "28.99",
      id: 20,
      starImage: rating45,
      rating: "305",
    },
    {
      imageurl: coverset,
      productname: "Duvet Cover Set, Diamond Pattern",
      price: "43.99",
      id: 21,
      starImage: rating4,
      rating: "456",
    },
    {
      imageurl: menspaints,
      productname: "Men's Chino Pants - Beige",
      price: "22.90",
      id: 22,
      starImage: rating45,
      rating: "9017",
    },
    {
      imageurl: navigaotsunglasses,
      productname: "Men's Navigator Sunglasses",
      price: "36.90",
      id: 23,
      starImage: rating35,
      rating: "42",
    },
    {
      imageurl: brownflatshoes,
      productname: "Men's Brown Flat Sneakers",
      price: "24.99",
      id: 24,
      starImage: rating45,
      rating: "562",
    },
    {
      imageurl: cookingset,
      productname: "Non-Stick Cook Set With Lids - 4 Pieces",
      price: "67.97",
      id: 25,
      starImage: rating45,
      rating: "511",
    },
    {
      imageurl: mirror,
      productname: "Vanity Mirror with LED Lights - Pink",
      price: "25.49",
      id: 26,
      starImage: rating45,
      rating: "130",
    },
    {
      imageurl: glassjars,
      productname: "Glass Screw Lid Containers - 3 Pieces",
      price: "28.99",
      id: 27,
      starImage: rating4,
      rating: "126",
    },
    {
      imageurl: coffeemachine,
      productname: "Black and Silver Espresso Maker",
      price: "82.50",
      id: 28,
      starImage: rating45,
      rating: "1211",
    },
    {
      imageurl: blackcurtains,
      productname: "Blackout Curtains Set 42 x 84-Inch - Teal",
      price: "30.99",
      id: 29,
      starImage: rating45,
      rating: "363",
    },
    {
      imageurl: bathtowels,
      productname: "Bath Towels 2 Pack - Gray, Rosewood",
      price: "29.90",
      id: 30,
      starImage: rating45,
      rating: "93",
    },
    {
      imageurl: sneakershoesgray,
      productname: "Athletic Skateboard Shoes - Gray",
      price: "33.90",
      id: 31,
      starImage: rating4,
      rating: "89",
    },
    {
      imageurl: hoodie,
      productname: "Men's Fleece Hoodie - Light Teal",
      price: "38.00",
      id: 32,
      starImage: rating45,
      rating: "3157",
    },
    {
      imageurl: bowlset,
      productname: "Artistic Bowl and Plate Set - 6 Pieces",
      price: "38.99",
      id: 33,
      starImage: rating5,
      rating: "679",
    },
    {
      imageurl: kitchenpapertowels,
      productname: "2-Ply Kitchen Paper Towels - 8 Pack",
      price: "18.99",
      id: 34,
      starImage: rating45,
      rating: "1045",
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
        <Route path="/" element={<SignIn />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/forgot" element={<Forgot />} />

        <Route
          path="/home"
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
