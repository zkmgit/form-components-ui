<template>
  <el-cascader v-bind="$attrs" v-model="modelValue" style="width: 100%" :options="options" clearable filterable />
</template>
<script>
export default {
  name: 'BasicCascader',
  props: {
    value: {
      type: Array,
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
  }
}
</script>
