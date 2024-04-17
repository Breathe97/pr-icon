<template>
  <svg class="pr-icon" :style="[Style]" aria-hidden="true">
    <use :xlink:href="`#pr-icon-${name}`"></use>
  </svg>
</template>

<script lang="ts" setup>
import './static/iconfont.js'
import { computed } from 'vue'

const props = defineProps({
  name: {
    type: [String],
    default: () => 'pryun'
  },
  color: {
    type: [String],
    default: () => ''
  },
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
