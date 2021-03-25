<template>
  <div role="data-provider">
    <slot
      v-if="isLoading"
      name="loading" >
    </slot>
    <slot
      v-else-if="error"
      name="error"
      v-bind="{ error }">
    </slot>
    <slot
      v-else-if="data"
      v-bind="{ data }" >
    </slot>
  </div>
</template>

<script>
import axios from '../lib/mockAxios'
export default {
  data: () => ({
    isLoading: false,
    error: null,
    data: null,
  }),
  mounted() {
    this.getData();
  },
  methods: {
    async getData() {
      this.isLoading = true;
      await axios.get()
        .then((res) => {
          this.data = res.data;
          this.error = null
        }).catch((e) => {
          this.error = e.message;
          this.data = null;
        }).finally(() => {
          this.isLoading = false;
        })
    }
  }
}
</script>
