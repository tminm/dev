import React, { memo } from "react";
import { AsideWrapper } from "./style";
import MyHome from "../../assets/icon/zhuye.png";
import ArticleIcon from "../../assets/icon/16.png";
import FeelIcon from "../../assets/icon/liaotian_1.png";
import ClockIcon from "../../assets/icon/时钟.png";

const Aside = memo(() => {
  return (
    <AsideWrapper>
      <div className="title">
        <div className="top">
          <h3 className="h3">小窝公告栏</h3>
          <h3>学业繁忙，随缘更新</h3>
        </div>
        <div className="center">
          <div className="date">
            <h3>日期：2024.6.30</h3>
            <h3>时间:20:38</h3>
            <h3>每日一句：所有热爱的事情都要不遗余力</h3>
          </div>
          <div className="list">
            <ul>
              <li>
                <img src={MyHome} alt="" />
                <a href="/home">首页</a>
              </li>
              <li>
                <img src={ArticleIcon} alt="" />
                <a href="">文章</a>
              </li>
              <li>
                <img src={FeelIcon} alt="" />
                <a href="">说说</a>
              </li>
              <li>
                <img src={ClockIcon} alt="" />
                <a href="">归档</a>
              </li>
            </ul>
          </div>
        </div>
        <div className="bottom"></div>
      </div>
    </AsideWrapper>
  );
});

export default Aside;
