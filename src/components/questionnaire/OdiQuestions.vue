<template>
  <div>
    <message title="Oswestry disability index [ODI]">Répondez à CHAQUE question. ne cochez QUE LA
      case qui vous correspond le mieux (1seule case).
    </message>
    <h5><slot></slot></h5>
    <ul>
      <div class="form-check" v-for="(subjects, id) in subjects" :key="id">
        <label class="form-check-label">
          <input class="form-check-input" type="radio" :name="index"
          :value="id" @click="odiAnswers(index, id)">
            {{ subjects }}
        </label>
      </div>
    </ul>
  </div>
</template>

<script>

export default{
  data() {
    return {
    };
  },
};

</script>

<style scoped>

</style>
