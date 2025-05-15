import { useState } from "react";

export const usePasswordToggle = () => {
  const [visible, setVisible] = useState(false);
  const inputType = visible ? "text" : "password";
  const toggleVisibility = () => setVisible(prev => !prev);

  return [inputType, visible, toggleVisibility];
};
