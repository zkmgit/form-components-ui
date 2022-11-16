<template>
  <div>
    <BasicForm :queryParams="queryParams" :formSchemas="formSchemas" />
  </div>
</template>

<script>
import { BasicForm } from './components/BasicForm'

export default {
  name: 'App',
  components: {
    BasicForm
  },
  data() {
    return {
      queryParams: {
        username: '',
        status: '',
        time: [],
        value: []
      },
      formSchemas: [
        {
          field: 'username',
          label: '用户名',
          component: 'Input',
          componentProps: { placeholder: '请输入' }
        },
        {
          field: 'status',
          label: '状态',
          component: 'Select',
          componentProps: { placeholder: '请选择状态.', options: [
            { label: 'aa', value: 'aa'},
            { label: 'bb', value: 'bb'},
          ] }
        },
        {
          field: 'time',
          label: '开始时间',
          component: 'DatePicker',
          componentProps: { type: 'daterange', valueFormat: 'yyyy-MM-dd' }
        },
        {
          field: 'value',
          label: '级联',
          component: 'Cascader',
          componentProps: { collapseTags: true, props: { multiple: true, emitPath: false }, options: [
            { label: 'aa', value: 'aa', children: [{ label: 'aaa', value: 'aaa' }, { label: 'ccc', value: 'ccc' }] },
            { label: 'bb', value: 'bb', children: [{ label: 'bbb', value: 'bbb' }] },
          ] }
        }
      ],
    }
  }
}
</script>
