import React, { memo, useEffect, useState } from "react";
import { AsideWrapper } from "./style";
import HomeIconLight from "../../assets/icon/home_light.png";
import HomeIconDark from "../../assets/icon/home_dark.png";
import ArticleIcon from "../../assets/icon/16.png";
import ArticleIcomDark from "../../assets/icon/wenzhang_dark.png";
import FeelIcon from "../../assets/icon/liaotian_1.png";
import FeelIconDark from "../../assets/icon/chat_dark.png";
import ClockIconLight from "../../assets/icon/lock_light.png";
import ClockIconDark from "../../assets/icon/lock_dark.png";
interface AsideProps {
  theme: "light" | "dark";
  toggleTheme: () => void;
}
const Aside = memo((props: AsideProps) => {
  const { theme, toggleTheme } = props;
  const date = new Date();
  const year = date.getFullYear();
  const month = date.getMonth() + 1;
  const day = date.getDate();
  const nowday = `${year}.${month}.${day}`;

  const [nowTime, setNowTime] = useState(date.toLocaleTimeString());

  // 根据主题选择不同的图标
  const homeIcon = theme === "light" ? HomeIconLight : HomeIconDark;
  const articleIcon = theme === "light" ? ArticleIcon : ArticleIcomDark;
  const feelIcon = theme === "light" ? FeelIcon : FeelIconDark;
  const clockIcon = theme === "light" ? ClockIconLight : ClockIconDark;

  useEffect(() => {
    const timer = setInterval(() => {
      setNowTime(new Date().toLocaleTimeString());
    }, 1000);

    // 清除定时器
    return () => clearInterval(timer);
  }, []);

  return (
    <AsideWrapper>
      <div className="title">
        <div className="top">
          <h3 className="h3">小窝公告栏</h3>
          <h3>学业繁忙，随缘更新</h3>
        </div>
        <div className="center">
          <div className="date">
            <h3>日期：{nowday}</h3>
            <h3>时间:{nowTime}</h3>
            <h3>每日一句：所有热爱的事情都要不遗余力</h3>
          </div>
          <div className="list">
            <ul>
              <li>
                <img src={homeIcon} alt="" />
                <a href="/home">首页</a>
              </li>
              <li>
                <img src={articleIcon} alt="" />
                <a href="">文章</a>
              </li>
              <li>
                <img src={feelIcon} alt="" />
                <a href="">说说</a>
              </li>
              <li>
                <img src={clockIcon} alt="" />
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
