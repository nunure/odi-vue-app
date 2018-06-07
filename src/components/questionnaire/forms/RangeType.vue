<template>
  <div>
    <el-slider
      v-model="inputVal"
      :min="0"
      :max="100"/>
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
