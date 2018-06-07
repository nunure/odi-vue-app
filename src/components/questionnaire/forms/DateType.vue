<template>
  <div>
    <el-date-picker
      v-model="inputVal"
      type="date"
      default-value="2000-01-01"/>
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
