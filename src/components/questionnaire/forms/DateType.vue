<template>
  <div>
    <el-date-picker
      v-model="$parent.answer[name]"
      type="date"
      default-value="2000-01-01"/>
  </div>
</template>

<script>
export default {
  props: {
    name: { type: String, default: "" }
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
