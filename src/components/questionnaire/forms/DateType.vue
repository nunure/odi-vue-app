<template>
  <div>
    <input
      type="date"
      :name="name"
      min="1900-01-01"
      :max="getDate()"
      required>
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
