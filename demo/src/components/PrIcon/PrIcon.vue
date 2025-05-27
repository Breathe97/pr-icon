<template>
  <svg class="pr-icon" :style="[Style]" aria-hidden="true">
    <use :xlink:href="`#pr-icon-${name}`"></use>
  </svg>
</template>

<script lang="ts" setup>
import { computed, PropType } from 'vue'
import './static/iconfont.js'

// import json from './static/iconfont.json'
// const names = Array.from(json.glyphs, (item) => item.name)
// console.log('\x1b[38;2;0;151;255m%c%s\x1b[0m', 'color:#0097ff;', `------->Breathe: names`, names)

const props = defineProps({
  // 图标名称
  name: {
    type: String as PropType<Names[0]>,
    default: () => 'pryun'
  },
  // 图标颜色
  color: {
    type: [String],
    default: () => ''
  },
  // 图标大小
  size: {
    type: [String, Number],
    default: () => 28
  }
})

const Style = computed(() => {
  let style: any = {}
  const { size, color } = props
  style['width'] = `${size}px`
  style['height'] = `${size}px`
  style['color'] = color
  return style
})
</script>

<style scoped>
.pr-icon {
  width: 1em;
  height: 1em;
  fill: currentColor;
  overflow: hidden;
  transition: all 500ms ease-out;
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>
