<template>
  <el-input v-bind="$attrs" v-model="modelValue" clearable></el-input>
</template>
<script>

export default {
name: 'BasicInput',
props: {
  value: {
    type: [String, Number],
    default: ''
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
