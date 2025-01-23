import React from "react";

interface FooterComponentProps {}

const FooterComponent: React.FC<FooterComponentProps> = (props) => {
  return (
    <div className="h-11 mt-8 flex justify-center items-center">Footer</div>
  );
};

export default FooterComponent;
