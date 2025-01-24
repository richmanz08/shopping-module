"use client";
import React from "react";
import { AdverTisePaper } from "./childrens/advertise";
import { ProductList } from "./childrens/productList";
import { HomeComponentProps } from "./home.interface";

const HomeComponent: React.FC<HomeComponentProps> = (props) => {
  const {} = props;
  return (
    <div className="flex flex-col w-full max-w-screen-xl justify-center px-8">
      {/* <AdverTisePaper /> */}
      <ProductList />
    </div>
  );
};

export default HomeComponent;
