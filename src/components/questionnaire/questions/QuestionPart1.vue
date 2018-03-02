<template>
  <div>
    <message title="Service de chirurgie orthopédique, traumatologique et réparatrice">
      <span id="subtitle">Professeur Hervé THOMAZEAU</span><br/><br/>
      Veuillez remplir ses informations de base:<br/>
    </message>

    <form method="POST" action="/projects" @submit.prevent="onSubmit">
      <div class="control">
        <label for="name" class="label">Name:</label>
        <input type="text" id="name" name="name" class="input" v-model="name">
      </div>
      <div class="control">
        <label for="description" class="label">Project Description:</label>
        <input type="text" id="description" name="description" class="input" v-model="description">
      </div>
      <div class="control">
        <button class="button is-primary">Create</button>
      </div>
    </form>

  </div>
</template>

<script>
export default{
  data() {
    return {
      name: '',
      description: '',
    };
  },

  methods: {

  },
};

</script>


<style scoped>

</style>
