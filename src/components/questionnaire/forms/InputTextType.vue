<template>
  <div>
    <el-input
      v-model="$parent.answer[name]"
      :placeholder="placeholder"
      :name="name"
      clearable/>
  </div>
</template>

<script>
export default {
  props: {
    name: { type: String, default: "" },
    placeholder: { type: String, default: "" }
  },
  methods: {}
};
</script>
