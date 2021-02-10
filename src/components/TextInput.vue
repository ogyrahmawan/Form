<template>
<input required @change="handleChange" class="col-md-12 col-sm-12 ml-0" type="text" placeholder="education background">
</template>

<script>
export default {
  name:'TextInput',
  methods: {
    handleChange (e) {
      let value = e.target.value
      this.$store.dispatch('handleOtherOption', value)
    }
  }
}
</script>

<style> 

</style>