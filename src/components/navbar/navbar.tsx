import {
  HeartIcon,
  ShoppingCartIcon,
  UserIcon,
} from "@heroicons/react/24/outline";
import React from "react";

const NavbarComponent: React.FC<NavbarComponentProps> = (props) => {
  const {} = props;
  return (
    <div className="w-full flex flex-col mb-6 shadow-lg">
      <div className="h-11 bg-primary-default w-full flex items-center justify-between p-2">
        <div className="text-white text-a6 font-standard">
          arnonrungrueng08@gmail.com
        </div>
        <div className="flex gap-2 items-center">
          <div className="text-white font-standard">Welcome to my shopping</div>{" "}
          |<div className="text-white font-standard">English</div> |
          <div className="text-white font-standard">My Point 889</div>
        </div>
      </div>
      <div className="flex w-full h-19 bg-white px-6 py-2">
        <div className="flex-1 text-secondary-default text-h4 font-standard">
          My Shopping
        </div>

        <HeartIcon className="size-7 text-secondary-default cursor-pointer" />
        <ShoppingCartIcon className="size-7 text-secondary-default cursor-pointer" />
        <UserIcon className="size-7 text-secondary-default cursor-pointer" />
      </div>

      <div id="div-parent">
        <div id="div-children">div a</div>
        <div>detail</div>
      </div>
    </div>
  );
};

export default NavbarComponent;
