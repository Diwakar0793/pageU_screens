import { useState } from "react";
import { useNavigate } from "react-router-dom";

export const useNavigation = (initialState = "") => {
  const [navigationPath, setNavigationPath] = useState(initialState);
  let navigate = useNavigate();

  const navigateToPath = (path) => {
    setNavigationPath(path);
    navigate(path);
  };
  return [navigationPath, navigateToPath];
};
