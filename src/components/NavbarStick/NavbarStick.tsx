import React from "react";
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

interface NavbarProps {
  theme: "light" | "dark";
  toggleTheme: () => void;
}
const NavbarStick: React.FC<NavbarProps> = ({ theme, toggleTheme }) => {
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
                <img src={homeIcon} alt="" />
                <Link to="/">首页</Link>
              </li>
              <li>
                <img src={articleIcon} alt="" />

                <Link to="/home/article">文章</Link>
              </li>
              <li>
                <img src={aboutIcon} alt="" />

                <Link to="/home/about">关于我</Link>
              </li>
              <li>
                <img src={feelIcon} alt="" />

                <Link to="/home/feel">碎碎念</Link>
              </li>
              <li>
                <img src={messageIcon} alt="" />
                <Link to="/home/message">留言板</Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </NavbarWrapper>
  );
};

export default NavbarStick;
