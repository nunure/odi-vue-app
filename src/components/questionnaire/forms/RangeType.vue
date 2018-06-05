<template>
  <div>
    <el-slider
      v-model="$parent.answer[name]"
      :min="0"
      :max="100"/>
  </div>
</template>

<script>
export default {
  props: {
    name: { type: String, default: "" }
  },
  methods: {}
};
</script>
