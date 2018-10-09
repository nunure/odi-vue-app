<template>
  <div>
    <el-form-item
      v-show="visible"
      :label="question.legend"
      :prop="question.name"
      :rules="rule">
      <el-input
        v-model="inputVal"
        :placeholder="question.placeholder"
        :name="question.name"
        clearable />
    </el-form-item>
  </div>
</template>


<script>
export default {
  props: {
    question: { type: Object, default: null },
    value: { type: String, default: undefined },
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
