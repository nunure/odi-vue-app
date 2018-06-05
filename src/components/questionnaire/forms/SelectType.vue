<template>
  <div>
    <el-select
      v-model="$parent.answer[name]"
      :name="name"
      clearable>
      <el-option
        v-for="input in values"
        :key="input.value"
        :value="input.value"
        :label="input.name"/>
    </el-select><br>
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
