import { defineComponent, toRefs } from 'vue'
import { buttonProps, ButtonType } from './button-types'

export default defineComponent({
  name: 'ZButton',
  props: buttonProps,
  setup(props: ButtonType, { slots }) {
    const { type, size, disabled, block } = toRefs(props)
    return () => {
      const defaultSlot = slots.default ? slots.default() : '按钮'
      const blockCls = block.value ? 's-btn--block' : ''
      return (
        <button
          disabled={disabled.value}
          class={`z-btn z-btn--${type.value} z-btn--${size.value} ${blockCls}`}
        >
          {defaultSlot}
        </button>
      )
    }
  }
})
