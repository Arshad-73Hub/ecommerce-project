import { HeadNavBar } from "./HeadNavBar";
import socksImage from "../assets/athletic-cotton-socks-6-pairs.jpg";
import "./TrackingSection.css";
import { Link } from "react-router";

export function TrackingSection({
  trackingItemImage,
  trackingItemName,
  trackingItemDeliveryDate,
  trackingItemQuantity,
}) {
  return (
    <>
      <title>Tracking</title>
      <HeadNavBar />
      <div className="trackingsectionsmainsectiondiv">
        <div className="trackingsectionproducttrackingdetailsdiv">
          <Link to="/OrderSection">
            <div className="trackingsectionviewallorderlinkdiv">
              <a href="">View all orders</a>
            </div>
          </Link>
          <div className="trackingsectionarrivingdatediv">
            Arriving on {trackingItemDeliveryDate}
          </div>
          <div className="trackingsectionproductnamediv">
            {trackingItemName}
          </div>
          <div className="trackingsectionproductquantitydiv">
            Quantity: {trackingItemQuantity}
          </div>
          <div className="trackingsectionimagediv">
            <img
              className="trackingsectionimage"
              src={trackingItemImage}
              alt="image"
            />
          </div>
          <div className="trackingsectionproductjourneydiv">
            <div className="trackingsectionproductatpreparingdiv trackingsectionproductjourneysamecss">
              Preparing
            </div>
            <div className="trackingsectionproductjourneysamecss">Shipped</div>
            <div className="trackingsectionproductjourneysamecss">
              Delivered
            </div>
          </div>
          <div className="trackingsectionslidermovediv">
            <div className="trackingsectionsliderinsidecolordiv"></div>
          </div>
        </div>
      </div>
    </>
  );
}
