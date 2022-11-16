<template>
  <div class="basic-form" :style="{ height: `${basicFormHeight * row}px` }">
    <el-form
      ref="formRef"
      :label-width="labelWidth"
      :label-position="labelPosition"
      :size="size"
      :model="queryParams"
      :rules="rules"
    >
      <el-row>
        <div
          v-for="(schema, index) in formSchemas"
          :key="`${schema.field}${index}`"
        >
          <form-item :form-model="queryParams" :schema="schema" />
        </div>
      </el-row>
    </el-form>
  </div>
</template>
<script>
import { basicProps } from './props'
import FormItem from './components/FormItem.vue'
import { cloneDeep } from 'lodash'

export default {
  name: 'BasicForm',
  components: { FormItem },
  props: basicProps,
  data() {
    return {
      getSchema: [],
      row: 1
    }
  },
  mounted() {
    this.getSchema = this.formSchemas
    // 计算显示多少行
    const length = this.getSchema.length
    this.row = length > 4 ? Math.ceil(length/4) : 1
  },
  computed: {
    formSchemasCom() {
      const cloneFormSchemas = cloneDeep(this.formSchemas)

      cloneFormSchemas.forEach(schemaItem => {
        if (!Reflect.has(schemaItem, 'componentProps')) {
          schemaItem.componentProps = {}
        } else {
          // 默认字段
          if (['DatePicker'].includes(schemaItem.component)) {
            const componentProps = { type: 'daterange', valueFormat: 'yyyy-MM-dd' }

            schemaItem.componentProps = Object.assign(componentProps, schemaItem.componentProps)
          } else if (['Cascader'].includes(schemaItem.component)) {
            const componentProps = {  collapseTags: true, props: { multiple: true, emitPath: false } }

            schemaItem.componentProps = Object.assign(componentProps, schemaItem.componentProps)
          }
        }
      })
      return cloneFormSchemas
    }
  }
}
</script>
<style lang="scss" scoped>
.basic-form {
  margin: 10px;
  border-radius: 4px;
  border: 1px solid #e6ebf5;
  background-color: #ffffff;
  overflow: hidden;
  color: #303133;
  transition: 0.3s;

  .el-form {
    margin: 10px;
  }
}
</style>
