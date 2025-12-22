<!-- components/VditorEditor.vue -->
<template>
  <div ref="editorRef" class="vditor-container"></div>
</template>

<script setup>
import {
  ref,
  onMounted,
  onBeforeUnmount,
  watch,
  defineProps,
  defineEmits,
  defineExpose,
} from "vue";
import Vditor from "vditor";
import "vditor/dist/index.css";

// 定义 Props，支持外部传入初始内容和配置
const props = defineProps({
  modelValue: {
    type: String,
    default: "",
  },
  // 可以传递其他 Vditor 配置项
  config: {
    type: Object,
    default: () => ({}),
  },
});

// 定义 Emits，用于内容更新事件
const emit = defineEmits(["update:modelValue", "change"]);

const editorRef = ref(null); // 用于挂载编辑器的 DOM 元素
const vditorInstance = ref(null); // 保存 Vditor 实例

// 核心配置
const baseConfig = {
  height: 500,
  placeholder: "开始使用 Markdown 创作...",
  mode: "ir", // 模式：'sv' (分屏预览)，'ir' (即时渲染)，'wysiwyg' (所见即所得)
  cache: {
    enable: true, // 开启本地缓存，防丢失
    id: "your-unique-id", // 设置一个唯一的缓存ID
  },
  preview: {
    hljs: { style: "github" }, // 代码高亮主题
  },
  toolbar: [
    // 自定义工具栏，这里是一个常用配置
    "emoji",
    "headings",
    "bold",
    "italic",
    "strike",
    "|",
    "link",
    "table",
    "|",
    "list",
    "ordered-list",
    "check",
    "|",
    "quote",
    "line",
    "code",
    "inline-code",
    "|",
    "upload",
    "record",
    "|",
    "fullscreen",
    "edit-mode",
    {
      name: "more",
      toolbar: ["code-theme", "content-theme", "export", "outline", "help"],
    },
  ],
  input: (value) => {
    // 每当编辑器内容变化时触发
    emit("update:modelValue", value); // 支持 v-model
    emit("change", value);
  },
};

onMounted(() => {
  // 合并基础配置和传入的配置
  const finalConfig = {
    ...baseConfig,
    ...props.config,
    value: props.modelValue,
  };

  // 初始化 Vditor 实例
  vditorInstance.value = new Vditor(editorRef.value, finalConfig);
});

// 监听外部传入的 modelValue 变化，并同步到编辑器（例如表单重置）
watch(
  () => props.modelValue,
  (newValue) => {
    if (vditorInstance.value && newValue !== vditorInstance.value.getValue()) {
      vditorInstance.value.setValue(newValue);
    }
  }
);

// 组件销毁前，如果需要可以销毁 Vditor 实例
onBeforeUnmount(() => {
  if (vditorInstance.value) {
    // vditorInstance.value.destroy(); // 如果频繁创建销毁，建议调用
  }
});

// 通过 defineExpose 暴露实例方法，方便父组件调用
defineExpose({
  getVditor: () => vditorInstance.value,
  getContent: () => vditorInstance.value?.getValue(),
  insertContent: (content) => vditorInstance.value?.insertValue(content),
});
</script>

<style scoped>
.vditor-container {
  width: 100%;
  border-radius: 6px;
  overflow: hidden;
}
</style>
