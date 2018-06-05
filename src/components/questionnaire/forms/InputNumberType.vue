<template>
  <div>
    <el-input-number
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
    placeholder: { type: String, default: "" },
    type: { type: String, default: "text" }
  },
  methods: {}
};
</script>
