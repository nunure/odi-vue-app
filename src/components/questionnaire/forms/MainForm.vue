<template>
  <el-form
    :model="model"
    ref="model"
    label-position="Top">
    <div
      v-for="question in questions.fields"
      :key="question.name">
      {{ modelCreation(question.name) }}
      <!-- radio button -->
      <div v-if="question.type === 'radio'">
        <RadioType
          :question="question"
          v-model="model[question.name]" />
      </div>
      <!-- Input text type -->
      <div v-else-if="question.type === 'input_string'">
        <InputTextType
          :question="question"
          v-model="model[question.name]"/>
      </div>
      <!-- Input number type -->
      <div v-else-if="question.type === 'input_number'">
        <InputNumberType
          :question="question"
          v-model="model[question.name]"/>
      </div>
      <!-- Date type , max is date of the day for birth day -->
      <div v-else-if="question.type === 'date'">
        <DateType
          :question="question"
          v-model="model[question.name]"/>
      </div>
      <!-- select type -->
      <div v-else-if="question.type === 'select'">
        <SelectType
          :question="question"
          v-model="model[question.name]"/>
      </div>
      <!-- Range type min 0 and max 100 -->
      <div v-else-if="question.type === 'range'">
        <RangeType
          :question="question"
          v-model="model[question.name]"/>
      </div>
      <div v-else>
        <p>v else: {{ question.type }}</p>
      </div>
    </div>
    <el-form-item class="buttons">
      <el-button
        type="button"
        class="btn-back"
        @click="onPrevious()">Retour</el-button>
      <el-button
        type="primary"
        class="btn-submit"
        @click="submitForm('model')">Valider</el-button>
    </el-form-item>
  </el-form>
</template>

<script>
import InputTextType from "@/components/questionnaire/forms/InputTextType";
import InputNumberType from "@/components/questionnaire/forms/InputNumberType";
import DateType from "@/components/questionnaire/forms/DateType";
import RadioType from "@/components/questionnaire/forms/RadioType";
import SelectType from "@/components/questionnaire/forms/SelectType";
import RangeType from "@/components/questionnaire/forms/RangeType";

export default {
  components: {
    InputTextType,
    InputNumberType,
    DateType,
    RadioType,
    SelectType,
    RangeType
  },
  props: {
    questions: { type: Object, default: null }
  },
  data() {
    return {
      rule: [
        {
          required: true,
          message: "Please input Activity name",
          trigger: "blur"
        }
      ],
      model: {}
    };
  },
  methods: {
    submitForm(formName) {
      this.$refs[formName].validate(valid => {
        if (valid) {
          this.populateAnswer();
          this.onSubmit();
        } else {
          console.log("error submit!!");
          return false;
        }
      });
    },
    onSubmit() {
      if (
        this.$parent.$parent.activeStep++ >=
        this.$parent.$parent.nbPage - 1
      ) {
        // This is the end of the questionnaire
        // PUT result to the back
        this.$http.put("http://localhost:3000/answers", this.answer).then(
          response => {
            this.$router.push("send_question");
            console.log(response);
          },
          response => {
            // @TODO: handle http error
            console.error(response);
          }
        );
      }
    },
    onPrevious() {
      if (this.$parent.$parent.activeStep-- <= 0)
        this.$parent.$parent.activeStep = 0;
    },
    modelCreation(name) {
      this.model[name] = undefined;
    },
    populateAnswer() {
      Object.assign(this.$parent.$parent.answer, this.model);
    }
  }
};
</script>
