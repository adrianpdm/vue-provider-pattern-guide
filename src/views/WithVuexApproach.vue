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
import { mapState, mapActions, } from 'vuex'

export default {
  computed: {
    ...mapState('user', [
      'isLoading',
      'error',
      'userData'
    ])
  },
  mounted() {
    this.getUserData();
  },
  methods: {
    ...mapActions('user', [
      'getUserData'
    ]),
  },
  // beforeRouteLeave(to, from, next) {
  //   this.$store.commit('user/setUserData', {});
  //   next();
  // }
}
</script>
