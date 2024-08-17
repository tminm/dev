import React, { memo, useEffect, useState } from "react";
import Navbar from "../../components/Navbar/Navbar";
import NavbarStick from "../../components/NavbarStick/NavbarStick";
import Aside from "../../components/Aside/Aside";
import { Outlet } from "react-router-dom";
import { Homewrapper } from "./style";

const Home = memo(() => {
  const [isStick, setIsStick] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 200) {
        // 设置滚动距离阈值为200像素
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

  return (
    <Homewrapper>
      <div className="home">
        {isStick && <NavbarStick></NavbarStick>}
        <Navbar></Navbar>
        <div className="mytitle">
          <h1>果粒陈的个人博客</h1>
          <h3>莫听穿林打叶声，何妨吟啸且徐行</h3>
        </div>
        <div className="main">
          <Aside></Aside>
          <div className="container">
            <Outlet></Outlet>
          </div>
        </div>
      </div>
    </Homewrapper>
  );
});

export default Home;
