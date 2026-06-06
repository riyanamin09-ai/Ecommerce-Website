import React from "react";
import LeftSection from "./LeftSection";
import CenterSection from "./CenterSection";
import RightSection from "./RightSection";

const Footer = () => {
  return (
    <div className="px-30 flex mt-5 gap-20 py-10 bg-white">
      <LeftSection />
      <CenterSection
        heading="About"
        firstText="About Us"
        secondText="Find store
"
        thirdText="Categories"
        fourthText="Blogs
"
      />
      <CenterSection
        heading="Partnership"
        firstText="About Us"
        secondText="Find store
"
        thirdText="Categories"
        fourthText="Blogs
"
      />
      <CenterSection
        heading="Information"
        firstText="Help Center"
        secondText="Money Refund
"
        thirdText="Shipping"
        fourthText="Contact us
"
      />
      <CenterSection
        heading="For users"
        firstText="Login"
        secondText="Register
"
        thirdText="Settings"
        fourthText="My Orders
"
      />
      <RightSection />
    </div>
  );
};

export default Footer;
