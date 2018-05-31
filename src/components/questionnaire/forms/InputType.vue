<template>
  <div>
    <input
      :type="getType(type)"
      :name="name"
      :placeholder="placeholder"
      required>
  </div>
</template>

<script>
export default {
  props: {
    name: { type: String, default: "" },
    placeholder: { type: String, default: "" },
    type: { type: String, default: "text" }
  },
  methods: {
    getType: function(form_type) {
      // Default value text, add new type below
      var ret = "text";
      if (form_type === "input_number") {
        ret = "number";
      }
      return ret;
    }
  }
};
</script>
