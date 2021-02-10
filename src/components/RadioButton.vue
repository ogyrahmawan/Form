<template>
<div class="form_option">
  <div class="mt-1 row w-100" v-for="(option, index) in options" :key="index">
    <div class="col-md-6 col-sm-12 text-left">
      <label class="ml-2">
        <input 
        type="radio" 
        :name="option" 
        :id="option" 
        :value="option"
        v-model="selectedOption"
        >
        {{option}}
      </label>
    </div>
    <div class="col-md-6 col-sm-12">
    <DatePicker v-if="option === selectedOption" :isDisabled="false" />
    <DatePicker v-else :isDisabled="true" />
    </div>
  </div>
  <div v-if="selectedOption === 'Other'" class="ml-3">
    <TextInput @handleInput="handleInput" />
  </div>
</div>
</template>

<script>
import TextInput from '../components/TextInput'
import DatePicker from '../components/DatePicker'
export default {
    name: 'RadioButton',
    components: {
      TextInput,
      DatePicker
    },
    props: ['options'],
    data () {
      return {
        selectedOption: '',
        otherOption: ''
      }
    },
    methods: {
      handleInput (value) {
        this.otherOption = value
      }
    }
}
</script>

<style>
.form_option {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
}
</style>