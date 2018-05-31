<template>
  <div>
    <input
      type="range"
      :name="name"
      min="0"
      max="100"
      required>
  </div>
</template>

<script>
export default {
  props: {
    name: { type: String, default: "" }
  },
  methods: {}
};
</script>
