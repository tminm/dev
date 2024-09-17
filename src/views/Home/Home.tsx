import React, { memo, useEffect, useState } from "react";
import Navbar from "../../components/Navbar/Navbar";
import NavbarStick from "../../components/NavbarStick/NavbarStick";
import Aside from "../../components/Aside/Aside";
import { Outlet } from "react-router-dom";
import { Homewrapper } from "./style";

const Home: React.FC = memo(() => {
  const [isStick, setIsStick] = useState(false);
  const [theme, setTheme] = useState<"light" | "dark">("light");

  // 监听滚动事件
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 200) {
        setIsStick(true);
      } else {
        setIsStick(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // 切换主题的函数
  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
    document.documentElement.setAttribute("data-theme", newTheme); // 修改 HTML 的 data-theme 属性
  };

  return (
    <Homewrapper>
      <div className="home">
        {isStick && <NavbarStick theme={theme} toggleTheme={toggleTheme} />}
        <Navbar theme={theme} toggleTheme={toggleTheme} />
        <div className="mytitle">
          <h1>果粒陈的个人博客</h1>
          <h3>莫听穿林打叶声，何妨吟啸且徐行</h3>
        </div>
        <div className="main">
          {/* 传递 theme 和 toggleTheme 给 Aside 组件 */}
          <Aside theme={theme} toggleTheme={toggleTheme} />
          <div className="container">
            <Outlet />
          </div>
        </div>
      </div>
    </Homewrapper>
  );
});

export default Home;
