import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { NavbarWrapper } from "./style";
import MyHome from "../../assets/icon/zhuye.png";
import ArticleIcon from "../../assets/icon/16.png";
import AboutIcon from "../../assets/icon/wenhao.png";
import FeelIcon from "../../assets/icon/liaotian_1.png";
import MessageIcon from "../../assets/icon/zhifeiji_fabu.png";

const AppHeader = () => {
  return (
    <NavbarWrapper>
      <div className="header">
        <div className="center">
          <div className="logo">
            <img src="/logo.png" alt="个人logo" />
          </div>
          <div className="list">
            <ul className="lis">
              <li>
                <img src={MyHome} alt="" />
                <Link to="/">首页</Link>
              </li>
              <li>
                <img src={ArticleIcon} alt="" />

                <Link to="/home/article">文章</Link>
              </li>
              <li>
                <img src={AboutIcon} alt="" />

                <Link to="/home/about">关于我</Link>
              </li>
              <li>
                <img src={FeelIcon} alt="" />

                <Link to="/home/feel">碎碎念</Link>
              </li>
              <li>
                <img src={MessageIcon} alt="" />
                <Link to="/home/message">留言板</Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </NavbarWrapper>
  );
};

export default AppHeader;
