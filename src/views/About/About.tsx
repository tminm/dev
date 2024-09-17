import React, { memo } from "react";
import AboutWrapper from "./style";
import Content from "./component/Content";

const About = memo(() => {
  const content1 = `关于这个页面，我一直都在构思怎么写，却不知如何下手，只能草草了事
        如果想要和我交流，可以在评论区留言，亦可私信邮箱
        想要交个朋友的话，可以查看底部相关联系方式 ~
        另外，这个博客算是我在互联网中的一个小窝，用来存放一些没有营养的文章
        如果你能够从中得到一些帮助，那么我也会很开心
        本人是一位普通本科的大四学生，热爱前端，可以看到自己实现的效果，感觉很有成就感。这是本人的第一个个人博客希望大家多多支持`;

  const content2 = `联系方式: 123456789   个人微博：久光Echo      邮箱： 123456789@qq.com`;
  const content3 = `Echo，即回响的意思，同时是一个计算机命令相信绝大多数程序员人生中的第一个程序都是输出 “Hello World”
而在 Linux Shell 中，这个程序是由 echo 命令来完成的之所以起这个名字，寓意着一分耕耘，一分收获，即你付出什么，就会得到什么`;

  const contentarr = [content1];
  const contentarr2 = [
    "联系方式: 123456789",
    "个人微博：久光Echo",
    "邮箱： 123456789@qq.com",
  ];

  const contentarr3 = [content3];
  return (
    <AboutWrapper>
      <div className="about">
        <Content title="关于" content={contentarr}></Content>
        <Content title="联系方式" content={contentarr2}></Content>
        <Content title="Echo" content={contentarr3}></Content>
      </div>
    </AboutWrapper>
  );
});

export default About;
