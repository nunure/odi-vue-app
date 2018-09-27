<template>
  <div>
    <el-form-item
      :label="question.label"
      :prop="question.name"
      :rules="rule"
    >
      <el-input-number
        v-model="inputVal"
        :placeholder="question.placeholder"
        :name="question.name"
        clearable
      />
    </el-form-item>
  </div>
</template>


<script>
export default {
  props: {
    question: { type: Object, default: null },
    value: { type: Number, default: undefined }
  },
  data() {
    return {
      rule: [
        {
          required: true,
          message: "Veuillez renseigner ce champ",
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
