<template>
  <div>
    <el-input
      v-model="inputVal"
      :placeholder="question.placeholder"
      :name="question.name"
      clearable/>
  </div>
</template>


<script>
export default {
  props: {
    question: { type: Object, default: null },
    value: { type: String, default: null }
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
