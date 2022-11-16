<template>
  <el-date-picker v-bind="$attrs" v-model="modelValue" style="width: 100%" clearable />
</template>
<script>
export default {
  name: 'BasicDatePicker',
  props: {
    value: {
      type: [Date, Array],
      default: () => []
    }
  },
  inheritAttrs: false,
  computed: {
    modelValue: {
      get() {
        return this.value
      },
      set(val) {
        this.$emit('input', val)
      }
    }
  }
}
</script>
