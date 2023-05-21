import { PropType, ExtractPropTypes } from 'vue'

export type IButtonType = 'primary' | 'secondary' | 'text'

export const buttonProps = {
  type: {
    type: String as PropType<IButtonType>,
    default: 'secondary'
  }
} as const

export type ButtonType = ExtractPropTypes<typeof buttonProps>
