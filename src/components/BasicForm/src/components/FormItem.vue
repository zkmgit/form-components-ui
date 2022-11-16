<template>
  <el-col :span="6">
    <el-form-item :label="schema.label" :prop="schema.field">
      <div style="display: flex">
        <div style="flex: 1">

          <!-- BasicInput输入框 -->
          <BasicInput
            v-if="schema.component === 'Input'"
            v-bind="schema.componentProps"
            v-model="formModel[schema.field]"
          />

          <!-- BasicSelect选项 -->
          <BasicSelect
            v-else-if="schema.component === 'Select'"
            v-bind="schema.componentProps"
            style="width: 100%"
            v-model="formModel[schema.field]"
          />
              
          <!-- BasicDatePicker日期选择 -->
          <BasicDatePicker 
            v-else-if="schema.component === 'DatePicker'"
            v-model="formModel[schema.field]"
            v-bind="schema.componentProps"
          />
  
          <!-- BasicCascader级联选择器 -->
          <BasicCascader 
            v-else-if="schema.component === 'Cascader'"
            v-model="formModel[schema.field]"
            v-bind="schema.componentProps"
          />
        </div>
      </div>
    </el-form-item>
  </el-col>
</template>
<script>
import BasicInput from '@/components/BasicForm/src/components/BasicInput.vue'
import BasicSelect from '@/components/BasicForm/src/components/BasicSelect.vue'
import BasicDatePicker from '@/components/BasicForm/src/components/BasicDatePicker.vue'
import BasicCascader from '@/components/BasicForm/src/components/BasicCascader.vue'

export default {
  name: 'FormItem',
  components: {
    BasicInput,
    BasicSelect,
    BasicDatePicker,
    BasicCascader
  },
  props: {
    schema: {
      type: Object,
      default: () => {
        return {}
      }
    },
    formModel: {
      type: Object,
      default: () => {
        return {}
      }
    }
  }
}
</script>
