<template>
  <div>
    <el-form-item
      :label="question.label"
      :prop="question.name"
      :rules="rule">
      <el-radio-group
        v-model="inputVal"
        v-for="input in question.values"
        :key="input.value">
        <el-radio
        :label="input.name">{{ input.name }}</el-radio>
      </el-radio-group>
    </el-form-item>
  </div>
</template>

<script>
export default {
  props: {
    question: { type: Object, default: null },
    value: { type: String, default: undefined }
  },
  data() {
    return {
      rule: [
        {
          required: true,
          message: "Veuillez sélectionner l'une de ces options",
          trigger: "change"
        }
      ],
      inputVal: this.value
    };
  },
  watch: {
    inputVal(val) {
      this.$emit("input", val);
    }
  }
};
</script>
