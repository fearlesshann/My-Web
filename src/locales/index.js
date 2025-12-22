import { createI18n } from "vue-i18n";
import zhCN from "./lang/zh-CN.json";
import enUS from "./lang/en-US.json";

// 定义支持的语言
const messages = {
  "zh-CN": zhCN,
  "en-US": enUS,
};

// 1. 从本地存储读取用户之前的语言选择
const savedLocale = localStorage.getItem("user-locale");

// 2. 或检测浏览器语言
const browserLocale = navigator.language || "zh-CN";
// 简单处理：如果浏览器语言是中文，就用 zh-CN，否则用 en-US
const detectedLocale = browserLocale.startsWith("zh") ? "zh-CN" : "en-US";

// 创建 i18n 实例
const i18n = createI18n({
  legacy: false, // 必须设置为 false，才能使用 Composition API
  locale: savedLocale || detectedLocale || "en-US", // 当前语言
  fallbackLocale: "en-US", // 回退语言
  messages, // 语言包
  datetimeFormats: {
    // （可选）日期时间本地化
    "zh-CN": {
      short: {
        year: "numeric",
        month: "short",
        day: "numeric",
      },
    },
    "en-US": {
      short: {
        year: "numeric",
        month: "short",
        day: "numeric",
      },
    },
  },
});

export default i18n;
