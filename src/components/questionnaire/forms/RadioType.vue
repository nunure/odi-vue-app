<template>
  <div>
    <el-radio-group
      v-model="$parent.answer[name]"
      v-for="input in values"
      :key="input.value">
      <el-radio
      :label="input.value">
      {{ input.name }}</el-radio>
    </el-radio-group>
  </div>
</template>

<script>
export default {
  props: {
    values: { type: Array, default: null },
    name: { type: String, default: "" }
  },
  methods: {}
};
</script>
