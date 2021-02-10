<template>
<div class="form_option">
  <div class="mt-1" v-for="(option, index) in options" :key="index">
    <label class="ml-3">
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
  <div v-if="selectedOption === 'Other'" class="ml-3">
    <TextInput @handleInput="handleInput" />
  </div>
</div>
</template>

<script>
import TextInput from '../components/TextInput'
export default {
    name: 'RadioButton',
    components: {
      TextInput
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