<template>
  <div>
    <message title="Service de chirurgie orthopédique, traumatologique et réparatrice">
      <span id="subtitle">Professeur Hervé THOMAZEAU</span><br><br>
      Madame, Monsieur,<br>
      Les médecins vous remercient de remplir ce questionnaire avant votre consultation.<br>
      Il servira au bon déroulement de l'entretien et permettra de consacrer plus de temps pour
      répondre à vos questions.
    </message>
    <img
      src="@/assets/images/NFS.jpg"
      class="img__info">
      <!--
    <div class="doctor__bloc">
      <label class="form-check-label doctor__input">
        <input class="form-check-input" type="radio" name="doctor">Dr P. CHATELLIER
      </label>
      <label class="form-check-label doctor__input">
        <input class="form-check-input" type="radio" name="doctor">Dr D. BOUAKA
      </label>
      <label class="form-check-label doctor__input">
        <input class="form-check-input" type="radio" name="doctor">Dr J. LEBHAR
      </label>
      <label class="form-check-label doctor__input">
        <input class="form-check-input" type="radio" name="doctor">Dr P. KRIEGEL
      </label>
  </div>
  -->
  </div>
</template>

<script>
export default {
  data() {
    return {};
  }
};
</script>


<style scoped>
.img__info {
  width: 50%;
  margin-right: 25%;
  margin-left: 25%;
  margin-top: 2em;
  margin-bottom: 3em;
}

.doctor__bloc {
  width: 100%;
  text-align: center;
}

.doctor__input {
  margin-right: 2em;
}

#subtitle {
  color: grey;
  font-style: italic;
}
</style>
