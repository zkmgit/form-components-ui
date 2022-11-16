<template>
  <el-select v-bind="$attrs" v-model="modelValue" clearable filterable>
    <el-option v-for="(item, index) in options" :key="item.value + '/' + item.label + '/' + index" :label="item.label" :value="item.value" :disabled="item.disabled" />
  </el-select>
</template>
<script>

export default {
  name: 'BasicSelect',
  props: {
    value: {
      type: [String, Number, Array, Boolean],
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
  },
  data() {
    return {
      options: []
    }
  },
  async mounted() {
    if (Reflect.has(this.$attrs, 'options')) this.options = this.$attrs.options

    if (Reflect.has(this.$attrs, 'apiFn')) {
      const res = await this.$attrs.apiFn()

      if (res.code === '1') {
        this.options = res.result
      } else {
        this.options = []
      }
    }
  },
}
</script>
<style lang="scss">
.el-scrollbar .el-select-dropdown__wrap .el-select-dropdown__list {
  max-width: 400px;
}
</style>
