<template>
  <div>
    <div
      v-for="input in values"
      :key="input.value">
      <label>
        <input
          type="radio"
          :name="name"
          :value="input.value">
        {{ input.name }}
      </label><br>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    values: { type: Array, default: null },
    name: { type: String, default: "" }
  },
  methods: {}
};
</script>
