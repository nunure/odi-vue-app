<template>
  <div>
    <div
      class="carousel"
      v-for="questions in datas"
      :key="questions.page">
      <form>
        <div
          v-for="question in questions.fields"
          :key="question.name">
          <label>{{ question.label }} :</label>
          <!-- radio button -->
          <div v-if="question.type === 'radio'">
            <RadioType
              :name="question.name"
              :values="question.values"/>
          </div>
          <!-- Input type -->
          <div v-else-if="question.type === 'input_number' || question.type === 'input_string'">
            <InputType
              :type="question.type"
              :name="question.name"
              :placeholder="question.placeholder"/>
          </div>
          <!-- Date type , max is date of the day for birth day -->
          <div v-else-if="question.type === 'date'">
            <DateType :name="question.name"/>
          </div>
          <!-- select type -->
          <div v-else-if="question.type === 'select'">
            <SelectType
              :name="question.name"
              :values="question.values"/>
          </div>
          <!-- Range type min 0 and max 100 -->
          <div v-else-if="question.type === 'range'">
            <RangeType :name="question.name"/>
          </div>
          <div v-else>
            <p>v else: {{ question.type }}</p>
          </div>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
import InputType from "@/components/questionnaire/forms/InputType";
import DateType from "@/components/questionnaire/forms/DateType";
import RadioType from "@/components/questionnaire/forms/RadioType";
import SelectType from "@/components/questionnaire/forms/SelectType";
import RangeType from "@/components/questionnaire/forms/RangeType";

export default {
  components: {
    InputType,
    DateType,
    RadioType,
    SelectType,
    RangeType
  },
  data() {
    return {
      datas: [],
      slides: {},
      date: ""
    };
  },
  created() {
    // get all questionnaire
    this.$http.get("http://localhost:3000/questions").then(
      response => {
        this.datas = response.data;
        this.slides = Object.keys(this.datas).length;
      },
      response => {
        // @TODO: handle http error
        console.error(response);
      }
    );
    // get a new empty model for responses
    this.$http.get("http://localhost:3000/answers/createEmpty").then(
      response => {
        this.answer = response.data;
      },
      response => {
        // @TODO: handle http error
        console.error(response);
      }
    );
  },
  methods: {}
};
</script>
