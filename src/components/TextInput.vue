<template>
<input @change="handleChange" class="w-100" type="text">
</template>

<script>
export default {
  name:'TextInput',
  methods: {
    handleChange (e) {
      let value = e.target.value
      this.$emit('handleInput', value)
    }
  }
}
</script>

<style> 

</style>