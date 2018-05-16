<template>
  <div>
    <select :name="name">
      <option
        value=""
        selected
        disabled
        hidden>
        -
      </option>
      <option
        v-for="input in values"
        :key="input.value"
        :value="input.value">
        {{ input.name }}
      </option>
    </select><br>
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
