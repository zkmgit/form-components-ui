export const basicProps = {
  rules: { type: Object, default: () => { return {} } },
  queryParams: { type: Object, default: () => { return {} } },
  formSchemas: { type: Array, default: () => [] },
  labelWidth: { type: String, default: '130px' },
  basicFormHeight: { type: Number, default: 65 },
  labelPosition: { type: String, default: 'right' },
  size: { type: String, default: 'medium' }
}
