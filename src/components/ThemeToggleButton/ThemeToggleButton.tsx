import React from "react";
import { Switch } from "antd";

// 定义 ThemeToggleButton 的 props 类型
interface ThemeToggleButtonProps {
  toggleTheme: () => void;
  currentTheme: "light" | "dark";
}

const ThemeToggleButton: React.FC<ThemeToggleButtonProps> = ({
  toggleTheme,
  currentTheme,
}) => {
  return (
    <Switch
      checked={currentTheme === "dark"}
      onChange={toggleTheme}
      checkedChildren="暗黑"
      unCheckedChildren="亮色"
      size="default"
    />
  );
};

export default ThemeToggleButton;
