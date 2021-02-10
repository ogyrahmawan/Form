<template>
  <div id="app">
      <div class="container-home d-flex justify-content-center align-items-center h-100">
    <div class="form_card">
      <div class="d-flex justify-content-center">
        <div class="brand_logo_container">
          <img src="./assets/logo.png" class="brand_logo" alt="Logo">
        </div>
      </div>
      <div class="form_container text-white">
        <form>
          <div class="d-flex justify-content-center">
            <div class="form_question w-50">
              <label>Last Education</label>
            </div>
            <div class="w-50">
              <RadioButton :options="educations" />
            </div>
          </div>
          <button type="submit" class="btn btn-primary mt-5">Submit</button>
        </form>
      </div>
    </div>
  </div>
  </div>
</template>

<script>
import RadioButton from './components/RadioButton'

export default {
  name: 'App',
  components: {
    RadioButton
  },
  data () {
    return {
      educations: [
        'Undergraduate',
        'Bachelor',
        'Master',
        'Doctoral',
        'Other'

      ]
    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
.container-home {
	min-height: 100vh;
}
.form_card {
  min-height: 400px;
  min-width: 60%;
  max-width: 100%;
  margin-top: 100px;
  margin-bottom: auto;
  background:   #292b2c;  
  position: relative;
  display: flex;
  justify-content: center;
  flex-direction: column;
  padding: 10px;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  border-radius: 5px;

}
.brand_logo_container {
  position: absolute;
  height: 170px;
  width: 170px;
  top: -75px;
  border-radius: 50%;
  background: white;
  padding: 10px;
  text-align: center;
}
.brand_logo {
  height: 130px;
  width: 130px;
  object-fit: scale-down;
}
.form_container {
  margin-top: 100px;
}
.form_question {
  font-size: 1.4rem;
  font-weight: bolder;
  display: flex;
  justify-content: center;
  align-items: center;
}

</style>
