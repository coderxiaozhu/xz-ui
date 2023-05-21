import { defineComponent, toRefs } from 'vue'
import { buttonProps, ButtonType } from './button-types'

export default defineComponent({
  name: 'ZButton',
  props: buttonProps,
  setup(props: ButtonType, { slots }) {
    const { type, size } = toRefs(props)
    return () => {
      const defaultSlot = slots.default ? slots.default() : '按钮'
      return (
        <button class={`z-btn z-btn--${type.value} z-btn--${size.value}`}>
          {defaultSlot}
        </button>
      )
    }
  }
})
