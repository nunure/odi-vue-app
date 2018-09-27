<template>
  <div>
    <el-form-item
      :label="question.label"
      :prop="question.name"
      :rules="rule"
    >
      <el-slider
        v-model="inputVal"
        :min="0"
        :max="100"
      />
    </el-form-item>
  </div>
</template>


<script>
export default {
  props: {
    question: { type: Object, default: null },
    value: { type: Number, default: null }
  },
  data() {
    return {
      rule: [
        {
          required: true,
          message: "Veuillez renseigner ce champ",
          trigger: "blur"
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
