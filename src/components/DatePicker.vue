<template>
  <input v-if="isDisabled" disabled type="date">
  <input required @change="handleDatePicker" v-else type="date">
</template>

<script>
export default {
  name: 'DatePicker',
  props: ['isDisabled'],
  methods: {
    handleDatePicker (e) {
      const value = e.target.value
      this.$store.dispatch('handleGraduationDate', value)
    }
  }
}
</script>

<style>

</style>