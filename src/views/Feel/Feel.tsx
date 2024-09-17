import React, { memo } from "react";
import PageCard from "../../components/PageCard/PageCard";
import DynamicCard from "../../components/DynamicCard/DynamicCard";

const Feel = memo(() => {
  const text = `左等右等，圈钱杯终于出成绩了，差一点省一，犯了个低级错误。哎，遗憾总是常态。
下面就是准备软考和考研了，继续努力`;
  return (
    <div>
      <DynamicCard title="遗憾总是常态" text={text}></DynamicCard>
    </div>
  );
});

export default Feel;
