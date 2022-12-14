# Author-Kay.
# BasicForm 基于Element UI 二次封装的表单配置组件

## 基本使用方法
```js
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
```

# Props BasicForm

|  属性  |   类型  | 默认值 |  字段说明 |
| :----: | :----: | :----: |  :----:  |
| rules | Object  |    -   | 表单验证规则 |
| queryParams | Object | {} | 表单数据对象 |
| formSchemas | Array | [] | 	表单配置数组 |
| labelWidth | String | - | 表单域标签的宽度 |
| basicFormHeight | Number | 65 | 表单默认高度 |
| labelPosition | String | right | 表单域标签的位置 |
| size | String | medium | 用于控制该表单内组件的尺寸 |

# 表单配置项 formSchemas

|  属性  |   类型  |   默认值   |  字段说明 |
| :----: | :----: | :------: |  :----:  |
| field | String  |    -   | 与表单数据对象属性保持一致，必填项 |
| label | String  |    -   | 表单域名称，必填项 |
| component | String |    -   | 组件类型['Input', 'Select', 'DatePicker', 'Cascader']，必填项 |
| componentProps | Object |   {}   | 组件的自定义属性值，可参考Element UI文档表单控件的Attributes，组件的事件绑定未封装处理，用于简单的表单搜索，非必填项 |