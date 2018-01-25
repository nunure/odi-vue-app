<template>
<div class="qcm">
  <h1> Oswestry disability index [ODI]</h1>
  <div v-for="(subjects, title, index) in questions" :key="index">
    <h5>{{ title }} </h5>
      <ul>
        <div class="form-check" v-for="(subjects, id) in subjects" :key="id">
          <label class="form-check-label">
            <input class="form-check-input" type="radio" :name="index" :id="'option'+index+'-'+id">
              {{ subjects }}
          </label>
        </div>
      </ul>
    </div>
  </div>

</template>

<script>
import questions from '@/assets/data/odi.json';

export default{
  name: 'qcm',
  data() {
    return {
      questions,
      checked: '',
    };
  },
};
</script>
