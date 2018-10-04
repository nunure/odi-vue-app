<template>
  <div>
    <el-form-item
      v-show="visible"
      :label="question.label"
      :prop="question.name"
      :rules="rule">
      <el-date-picker
        v-model="inputVal"
        type="date"
        default-value="2000-01-01" />
    </el-form-item>
  </div>
</template>

<script>
export default {
  props: {
    question: { type: Object, default: null },
    value: { type: Date, default: undefined },
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
  },
  methods: {
    getDate: function() {
      function pad(number) {
        if (number < 10) {
          return "0" + number;
        }
        return number;
      }
      var date_tmp = new Date();

      return (
        pad(date_tmp.getFullYear()) +
        "-" +
        pad(date_tmp.getMonth() + 1) +
        "-" +
        pad(date_tmp.getDate())
      );
    }
  }
};
</script>
