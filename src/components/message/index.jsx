import React from "react";
import Taro from "@tarojs/taro";

const duration = 3000;

const successMessage = (title) => {
  Taro.showToast({
    title: title,
    icon: "success",
    duration: duration,
  });
};

const noneMessage = (title) => {
  Taro.showToast({
    title: title,
    icon: "none",
    duration: duration,
  });
};

const errorMessage = (title) => {
  Taro.showToast({
    title: title,
    icon: "error",
    duration: duration,
  });
};

const loadingMessage = (title) => {
  Taro.showToast({
    title: title,
    icon: "loading",
    duration: duration,
  });
};

export default { successMessage, noneMessage, errorMessage, loadingMessage };
