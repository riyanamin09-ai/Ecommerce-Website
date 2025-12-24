import FirstSection from "../FirstSec/FirstSection";
import Deals from "./Deals&Offers/Deals"
import HomeAndOutdoor from "./HomeSec/HomeAndOutdoor"
import UserInput from "./UserInputSec/UserInput"
import RecommItems from "./RecommentedItems/RecommItems"
import ExtraServices from "./ExtraServices/ExtraServices"
import RegionSection from "./RegionSec/RegionSection"
import SubscribeSection from "./SubscribeSec/SubscribeSection"

 const LandingPage = () => {

    let firstLeftImgText = (
        <h2>
          Home and <br />
          Outdoor
        </h2>
      );
      let secondLeftImgText = (
        <h2>
          Consumer <br /> electronics and <br /> gadgets
        </h2>
      );
    
      const firstSecProductDetail = [
        {
          id: 1,
          productName: "Soft chairs",
          price: "USD 19",
          productImg: "src/assets/HomeSecImg/sofa.png",
        },
        {
          id: 2,
          productName: "Lamps",
          price: "USD 19",
          productImg: "src/assets/HomeSecImg/lamp.png",
        },
        {
          id: 3,
          productName: "Bedroom items",
          price: "USD 19",
          productImg: "src/assets/HomeSecImg/bedroom.png",
        },
        {
          id: 4,
          productName: "Kitchen dishes",
          price: "USD 19",
          productImg: "src/assets/HomeSecImg/kitchen.png",
        },
        {
          id: 5,
          productName: "Kitchen mixers",
          price: "USD 100",
          productImg: "src/assets/HomeSecImg/mixer.png",
        },
        {
          id: 6,
          productName: "Coffee maker",
          price: "USD 39",
          productImg: "src/assets/HomeSecImg/coffeemaker.png",
        },
        {
          id: 7,
          productName: "Home appliances",
          price: "USD 19",
          productImg: "src/assets/HomeSecImg/homeAppliances.png",
        },
        {
          id: 8,
          productName: "Home decoration",
          price: "USD 10",
          productImg: "src/assets/HomeSecImg/decor.png",
        },
      ];
      const secondSecProductDetail = [
        {
          id: 1,
          productName: "Smart watches",
          price: "USD 19",
          productImg: "src/assets/ConsumerSecImg/watch.png",
        },
        {
          id: 2,
          productName: "Cameras",
          price: "USD 89",
          productImg: "src/assets/ConsumerSecImg/camera.png",
        },
        {
          id: 3,
          productName: "Headphones",
          price: "USD 10",
          productImg: "src/assets/ConsumerSecImg/headphone.png",
        },
        {
          id: 4,
          productName: "Electric kettle",
          price: "USD 90",
          productImg: "src/assets/ConsumerSecImg/kettle.png",
        },
        {
          id: 5,
          productName: "Gaming set",
          price: "USD 35",
          productImg: "src/assets/ConsumerSecImg/gamingSet.png",
        },
        {
          id: 6,
          productName: "Laptops & PC",
          price: "USD 340",
          productImg: "src/assets/ConsumerSecImg/laptop.png",
        },
        {
          id: 7,
          productName: "Tablets",
          price: "USD 19",
          productImg: "src/assets/ConsumerSecImg/tablet.png",
        },
        {
          id: 8,
          productName: "Smartphones",
          price: "USD 240",
          productImg: "src/assets/ConsumerSecImg/phone.png",
        },
      ];
    
  return (
    <div>
      <FirstSection />
      <Deals/>
      <HomeAndOutdoor
        leftImg={"src/assets/HomeSecImg/Home.png"}
        leftImgText={firstLeftImgText}
        firstSecProductDetail={firstSecProductDetail}
      />
      <HomeAndOutdoor
        leftImg={"src/assets/ConsumerSecImg/Consumer.png"}
        leftImgText={secondLeftImgText}
        secondSecProductDetail={secondSecProductDetail}
      />
      <UserInput />
      <RecommItems />
      <ExtraServices />
      <RegionSection />
      <SubscribeSection />
    </div>
  );
};
export default LandingPage;
