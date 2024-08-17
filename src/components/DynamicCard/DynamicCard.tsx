import React, { FC, memo } from "react";

import { DynamicCardwrapper } from "./style";

interface propsType {
  title: string;
  image: string;
  text: string;
}

const DynamicCard: FC<propsType> = memo(({ title, image, text }) => {
  return (
    <DynamicCardwrapper>
      <div className="card">
        <h2 className="title">{title}</h2>
        <a href="">
          <img src={image} alt="" className="image" />
        </a>
        <div className="content">
          <span>{text}</span>
        </div>
      </div>
    </DynamicCardwrapper>
  );
});

export default DynamicCard;
