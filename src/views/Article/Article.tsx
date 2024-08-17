import React, { memo } from "react";
import { ArticleWrapper } from "./style";
import htmlImage from "../../assets/images/html.png";
import cssImage from "../../assets/images/css.png";
import PageCard from "../../components/PageCard/PageCard";
import themeImage from "../../assets/images/argontheme.png";

const Article = memo(() => {
  return (
    <ArticleWrapper>
      <div>
        <PageCard title="博客技术栈及源码" image={themeImage}></PageCard>
        <PageCard title="HTML基础知识" image={htmlImage}></PageCard>
        <PageCard title="CSS基础知识" image={cssImage}></PageCard>
      </div>
    </ArticleWrapper>
  );
});

export default Article;
