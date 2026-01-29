<template>
  <component v-if="visible" :is="tag" class="showup-animation" v-bind="$attrs">
    <slot />
  </component>
  <div v-else ref="sentinel" class="lazy-sentinel"></div>
</template>

<script setup>
import { onMounted, onUnmounted, ref } from "vue";

const props = defineProps({
  tag: {
    type: String,
    default: "div",
  },
});

const visible = ref(false);
const sentinel = ref(null);
let observer;

onMounted(() => {
  if (!("IntersectionObserver" in window)) {
    visible.value = true;
    return;
  }
  observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          visible.value = true;
          if (observer) observer.disconnect();
        }
      });
    },
    { threshold: 0.2, rootMargin: "0px 0px -10% 0px" }
  );
  if (sentinel.value) {
    observer.observe(sentinel.value);
  }
});

onUnmounted(() => {
  if (observer) observer.disconnect();
});
</script>

<style scoped>
.lazy-sentinel {
  min-height: 1px;
}
</style>
