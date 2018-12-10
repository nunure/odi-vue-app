<template>
  <div>
    <el-form-item
      v-show="visible"
      :label="question.legend"
      :prop="question.name"
      :rules="rule"
    >
      <el-radio-group
        v-for="input in question.values"
        :key="input.value"
        v-model="inputVal"
      >
        <el-radio :label="input.value">{{ input.label }}</el-radio>
      </el-radio-group>
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
          message: "Veuillez sélectionner l'une de ces options",
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
