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
        <form @submit.prevent="handleSubmit">
          <div class="row">
            <div class="col-md-3 sm-12 form_question text-center">
              <h5>Last Education</h5>
            </div>
            <div class="col-md-9 sm-12">
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
import Swal from 'sweetalert2'
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
  },
  methods: {
    handleSubmit () {
      if(!this.lastEducation) {
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: 'You Need to Answer The Question'
        })
      } else {
        if(this.lastEducation === 'Other') {
          Swal.fire(`Your degree is ${this.otherOption} and graduate at ${this.graduationDate}`)
        } else {
          Swal.fire(`Your degree is ${this.lastEducation} and graduate at ${this.graduationDate}`)
        }
      }
    }
  },
  computed: {
    lastEducation () {
      return this.$store.state.lastEducation
    },
    graduationDate () {
      return this.$store.state.graduationDate
    },
    otherOption () {
      return this.$store.state.otherOption
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
  min-width: 30%;
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
  font-size: 1.3rem;
  font-weight: bolder;
  display: flex;
  justify-content: center;
  align-items: center;
}


</style>
