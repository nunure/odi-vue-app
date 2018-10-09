<template>
  <div>
    <el-form-item
      v-show="visible"
      :label="question.legend"
      :prop="question.name"
      :rules="rule">
      <el-select
        v-model="inputVal"
        :name="question.name"
        clearable>
        <el-option
          v-for="input in question.values"
          :key="input.value"
          :value="input.value"
          :label="input.label" />
      </el-select>
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
