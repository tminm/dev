import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { NavbarWrapper } from "./style";
import HomeIconLight from "../../assets/icon/home_light.png";
import HomeIconDark from "../../assets/icon/home_dark.png";
import ArticleIcon from "../../assets/icon/16.png";
import ArticleIcomDark from "../../assets/icon/wenzhang_dark.png";
import AboutIcon from "../../assets/icon/wenhao.png";
import AboutIconDark from "../../assets/icon/wenhao_dark.png";
import FeelIcon from "../../assets/icon/liaotian_1.png";
import FeelIconDark from "../../assets/icon/chat_dark.png";
import MessageIcon from "../../assets/icon/zhifeiji_fabu.png";
import MessageIconDark from "../../assets/icon/zhifenji_dark.png";
import ThemeToggleButton from "../ThemeToggleButton/ThemeToggleButton";
interface NavbarProps {
  theme: "light" | "dark";
  toggleTheme: () => void;
}
const AppHeader: React.FC<NavbarProps> = ({ theme, toggleTheme }) => {
  // 当主题变化时，更新 HTML 的 data-theme 属性
  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
  }, [theme]);

  // 根据主题选择不同的图标
  const homeIcon = theme === "light" ? HomeIconLight : HomeIconDark;
  const articleIcon = theme === "light" ? ArticleIcon : ArticleIcomDark;
  const aboutIcon = theme === "light" ? AboutIcon : AboutIconDark;
  const feelIcon = theme === "light" ? FeelIcon : FeelIconDark;
  const messageIcon = theme === "light" ? MessageIcon : MessageIconDark;

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
                {/* 根据主题动态切换 Home 图标 */}
                <img src={homeIcon} alt="首页" />
                <Link to="/">首页</Link>
              </li>
              <li>
                <img src={articleIcon} alt="文章" />
                <Link to="/home/article">文章</Link>
              </li>
              <li>
                <img src={aboutIcon} alt="关于我" />
                <Link to="/home/about">关于我</Link>
              </li>
              <li>
                <img src={feelIcon} alt="碎碎念" />
                <Link to="/home/feel">碎碎念</Link>
              </li>
              <li>
                <img src={messageIcon} alt="留言板" />
                <Link to="/home/message">留言板</Link>
              </li>
              <li>
                {/* 传递切换主题的函数给 ThemeToggleButton */}
                <ThemeToggleButton
                  toggleTheme={toggleTheme}
                  currentTheme={theme}
                />
              </li>
            </ul>
          </div>
        </div>
      </div>
    </NavbarWrapper>
  );
};

export default AppHeader;
