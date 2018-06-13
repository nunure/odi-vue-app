<template>
  <div>
    <el-form-item
      :label="question.label"
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
          :label="input.name"/>
      </el-select>
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
