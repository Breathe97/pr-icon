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
type Names = [
  | 'layout'
  | 'camera-on'
  | 'camera-off'
  | 'playing'
  | 'speaker'
  | 'dial'
  | 'mike-off'
  | 'screen-share'
  | 'users'
  | 'user-list'
  | 'user-add'
  | 'mike-on'
  | 'connected'
  | 'duel'
  | 'cdn'
  | 'connect'
  | 'screen-full'
  | 'refresh'
  | 'chart'
  | 'workbench'
  | 'user'
  | 'list-arrow-right'
  | 'location-fill-2'
  | 'order'
  | 'more'
  | 'selected-fill'
  | 'help-fill'
  | 'selected'
  | 'arrow-top-fill'
  | 'cross'
  | 'star'
  | 'help'
  | 'store'
  | 'trash-can'
  | 'list-hook'
  | 'edit'
  | 'store-fill'
  | 'star-fill'
  | 'list-love'
  | 'order-list'
  | 'pryun'
  | 'arrow-bottom-fill'
  | 'location-fill'
  | 'phone-fill'
  | 'phone'
  | 'camera-fill'
  | 'camera'
  | 'share'
  | 'share-fill'
  | 'search'
  | '窗口'
  | 'code'
  | 'privacy'
  | 'feedback'
  | 'tabbar'
  | 'card-fill'
  | 'switch'
  | 'list'
  | 'loading'
  | 'calendar'
  | 'tag'
  | 'hook'
  | 'exterior'
  | 'shock'
  | 'relation'
  | 'set'
  | 'broom'
  | 'badge'
  | 'comment'
  | 'tool'
  | 'toggle'
  | 'logout'
  | 'qrcode'
  | 'applied-fill'
  | 'applied'
  | 'arrow-top-double'
  | 'arrow-right-double'
  | 'arrow-bottom-double'
  | 'arrow-left-double'
  | 'arrow-top'
  | 'arrow-right'
  | 'arrow-bottom'
  | 'arrow-left'
  | 'home'
]
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
