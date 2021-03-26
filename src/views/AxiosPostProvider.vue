<template>
  <div key="route:axios-post-provider-pattern" style="padding: 16rem;">
    <AxiosPostProvider ref="axiosPost">
      <template #loading>
        <img src="/spinner.gif">
      </template>
      <template #success="response">
        <div class="modal">
          <pre>
            {{ response }}
          </pre>
        </div>
      </template>
      <template #error="{ error }">
        <pre>
          {{ error }}
        </pre>
      </template>
    </AxiosPostProvider>
    <form name="axiosPostForm" @submit.prevent="onSubmit">
      <label>
        Name
        <input type="text" name="name">
      </label>
      <br>
      <label>
        Job
        <input type="text" name="job">
      </label>
      <br>
      <label>
        Age
        <input type="number" name="age">
      </label>
      <br>
      <button type="submit">Submit Data</button>
    </form>
  </div>
</template>

<script>
import AxiosPostProvider from '../components/AxiosPostProvider'
export default {
  components: {
    AxiosPostProvider,
  },
  methods: {
    onSubmit() {
      const form = document.getElementsByName('axiosPostForm')[0];
      const formData = new FormData(form);

      const json = {};
      formData.forEach((value, key) => {
        json[key] = value;
      });
      this.$refs.axiosPost.execute(json);
    }
  }
}
</script>

<style lang="scss" scoped>
.modal {
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0,0,0,0.5);

  > * {
    display: block;
    width: 300px;
    padding: 2rem;
    margin: 0 auto;
    
    background-color: white;

    box-shadow: 0 4px 16px 0 rgba(0,0,0,0.15);
    border-radius: 8px;
  }
}
</style>
