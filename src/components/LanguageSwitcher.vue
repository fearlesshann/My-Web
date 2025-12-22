<template>
  <div class="language-switcher">
    <button @click="changeLanguage()">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        fill="rgb(228, 228, 228)"
        viewBox="0 0 256 256"
      >
        <path
          d="M247.15,212.42l-56-112a8,8,0,0,0-14.31,0l-21.71,43.43A88,88,0,0,1,108,126.93,103.65,103.65,0,0,0,135.69,64H160a8,8,0,0,0,0-16H104V32a8,8,0,0,0-16,0V48H32a8,8,0,0,0,0,16h87.63A87.76,87.76,0,0,1,96,116.35a87.74,87.74,0,0,1-19-31,8,8,0,1,0-15.08,5.34A103.63,103.63,0,0,0,84,127a87.55,87.55,0,0,1-52,17,8,8,0,0,0,0,16,103.46,103.46,0,0,0,64-22.08,104.18,104.18,0,0,0,51.44,21.31l-26.6,53.19a8,8,0,0,0,14.31,7.16L148.94,192h70.11l13.79,27.58A8,8,0,0,0,240,224a8,8,0,0,0,7.15-11.58ZM156.94,176,184,121.89,211.05,176Z"
        ></path>
      </svg>
    </button>
  </div>
</template>

<script setup>
import { useI18n } from "vue-i18n";
import { ref } from "vue";

const { locale } = useI18n();

// 支持的语言列表
const supportedLanguages = ref([
  { code: "zh-CN", name: "中文", flag: "🇨🇳" },
  { code: "en-US", name: "English", flag: "🇺🇸" },
]);

const changeLanguage = () => {
  const langCode = locale.value === "en-US" ? "zh-CN" : "en-US";
  locale.value = langCode;
  localStorage.setItem("user-locale", langCode);

  // 可选：触发自定义事件，让其他组件知道语言已变化
  window.dispatchEvent(
    new CustomEvent("language-changed", {
      detail: { locale: langCode },
    })
  );
};
</script>

<style scoped>
/* 关键：使组件容器能完美嵌入导航栏的 li 中 */
.language-switcher {
  display: flex;
  align-items: center; /* 垂直居中 */
  justify-content: center; /* 水平居中 */
  height: 100%; /* 继承父 li 的高度 */
}

.language-switcher button {
  cursor: pointer;
  border: none;
  /* 关键：内边距与 .nav-menu li a 保持一致 */
  padding: 0.5rem 1rem;
  background: transparent;
  display: flex; /* 将按钮也设为flex，便于图标居中 */
  align-items: center;
  justify-content: center;
  height: 100%; /* 按钮高度也撑满 */
  color: rgb(228, 228, 228); /* 显式定义颜色，确保继承 */
}

/* 如果你想保留下划线效果，可以为 .language-switcher 添加伪元素 */
.language-switcher {
  position: relative;
}

.language-switcher::after {
  content: "";
  position: absolute;
  left: 50%;
  bottom: 3px;
  transform: translateX(-50%);
  height: 2px;
  width: 0px;
  background: rgb(178, 13, 49);
  transition: width 0.3s;
}
.language-switcher:hover::after {
  width: 50%;
}
</style>
