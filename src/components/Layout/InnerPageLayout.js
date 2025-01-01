import React from "react";
import DemoHeaderOne from "./Header/DemoHeader/DemoHeaderOne";
import FooterOne from "./Footer/FooterOne";
import MobileHeader from "./Header/DemoHeader/DemoHeaderMobile";
import DemoHeaderTen from "./Header/DemoHeader/DemoHeaderTen";

export default function InnerPageLayout({ children }) {
  return (
    <div>
      {/* <DemoHeaderOne /> */}
      <DemoHeaderTen />
      <MobileHeader />
      {children}
      <FooterOne />
    </div>
  );
}
