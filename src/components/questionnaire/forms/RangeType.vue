<template>
  <div>
    <el-form-item
      v-show="visible"
      :label="question.legend"
      :prop="question.name"
      :rules="rule">
      <el-slider
        v-model="inputVal"
        :min="0"
        :max="100" />
    </el-form-item>
  </div>
</template>


<script>
export default {
  props: {
    question: { type: Object, default: null },
    value: { type: Number, default: null },
    visible: { type: Boolean, default: true }
  },
  data() {
    return {
      inputVal: this.value
    };
  },
  computed: {
    rule() {
      return [
        {
          required: this.visible && this.question.required,
          message: "Veuillez renseigner ce champ",
          trigger: "change"
        }
      ];
    }
  },
  watch: {
    inputVal(val) {
      this.$emit("input", val);
    }
  }
};
</script>
