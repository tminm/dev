import React, { memo } from "react";
import { DynamicWrapper } from "./style";
import DynamicCard from "../../components/DynamicCard/DynamicCard";
import cdnImage from "../../assets/images/dscdn.png";
const Dynamic = memo((props) => {
  const text1 = `前几天cdn突然欠费了，三年博客第一次这样，后来发现被盗刷了。
            看了下ip是山西的，以为是故意针对我这个小博客，就不了了之了。
            结果今天看群友分享的鱼皮的视频，发现是普遍事件，而且都是山西的ip，真离谱！！！
            最近忙于学业，确实没有时间管理博客了，希望能撑到年底吧，到时候卷土重来，呜呜呜～，最后贴张图，wh太好看了，哈哈`;
  return (
    <DynamicWrapper>
      <div>
        <div className="container">
          <p className="text2">
            有时候，我们会觉得自己不够完美，进而对自己太苛刻。其实，天底下没有十全十美的人，接纳自己，是学会爱自己的第一步。
            不是每一颗星星都是最亮的，也不是每朵花都是最美的。真诚地去拥抱自己，
            既看到那些不足、挫败与不完美的部分，也要看到那些闪耀、成功、做得好的部分。
            接纳自己，没有很好也没关系。坦然面对，找到真实的自己。不求事事完美，但求超越自己，有正视不足的底气，才有一往无前的勇气。
          </p>
          <p className="eraser">
            <span className="text">
              有时候，我们会觉得自己不够完美，进而对自己太苛刻。其实，天底下没有十全十美的人，接纳自己，是学会爱自己的第一步。
              不是每一颗星星都是最亮的，也不是每朵花都是最美的。真诚地去拥抱自己，
              既看到那些不足、挫败与不完美的部分，也要看到那些闪耀、成功、做得好的部分。
              接纳自己，没有很好也没关系。坦然面对，找到真实的自己。不求事事完美，但求超越自己，有正视不足的底气，才有一往无前的勇气。
            </span>
          </p>
        </div>

        <DynamicCard
          title="盗刷CDN"
          image={cdnImage}
          text={text1}
        ></DynamicCard>

        <DynamicCard
          title="盗刷CDN"
          image={cdnImage}
          text={text1}
        ></DynamicCard>

        <DynamicCard
          title="盗刷CDN"
          image={cdnImage}
          text={text1}
        ></DynamicCard>
      </div>
    </DynamicWrapper>
  );
});

export default Dynamic;
