import React, { FC, memo } from "react";
import PropTypes from "prop-types";
import { PageCardWrapper } from "./style";

// 定义属性类型
interface PageCardProps {
  title: string;
  image?: string;
}

const PageCard: FC<PageCardProps> = ({ title, image }) => {
  return (
    <PageCardWrapper>
      <div className="imghtml">
        {image && <img className="image" src={image} alt="html" />}
        <div className="title">
          <span>{title}</span>
        </div>
      </div>
    </PageCardWrapper>
  );
};

PageCard.propTypes = {
  title: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
};
export default memo(PageCard);
