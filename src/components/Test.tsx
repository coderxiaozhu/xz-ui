import { defineComponent, ref, withModifiers } from 'vue'

export default defineComponent({
  setup(props, ctx) {
    const count = ref<number>(0)
    const add = () => {
      count.value++
    }
    return () => {
      return <div onClick={withModifiers(add, ['self'])}>{count.value}</div>
    }
  }
})
