<template>
  <div key="route:simple" style="padding: 16rem;">
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
    </div>
  </div>
</template>

<script>
import axios from '../lib/mockAxios'
export default {
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
      return axios.get()
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
