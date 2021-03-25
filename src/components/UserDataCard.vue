<template>
  <div v-if="isLoading">
    <img src="/spinner.gif">  
  </div>
  <div v-else-if="error">
    {{ error }}
  </div>
  <div v-else-if="userData">
    <label>
      Name:
      <output>{{ userData.name }}</output>
    </label>
    <br>
    <label>
      Job:
      <output>{{ userData.job }}</output>
    </label>
    <br>
    <label>
      Umur:
      <output>{{ userData.age }}</output>
    </label>
    <br>
    <br>
  </div>
</template>

<script>
import axios from '../lib/mockAxios'
export default {
  props: {
    route: {
      type: String,
    },
  },
  data() {
    return {
      isLoading: false,
      error: null,
      userData: null
    }
  },
  mounted() {
    this.getUserData();
  },
  methods: {
    getUserData() {
      this.isLoading = true;
      return axios.get(this.route)
        .then((res) => {
          this.userData = res.data;
          this.error = null;
        })
        .catch((err) => {
          if (err instanceof Error) {
            this.userData = null;
            this.error = err.message;
          }
        }).finally(() => {
          this.isLoading = false;
        })
    }
  }
}
</script>
