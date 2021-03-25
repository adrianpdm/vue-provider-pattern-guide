<template>
  <div key="route:provider-pattern" style="padding: 16rem;">
    <DataProvider>
      <template #loading>
        <img src="/spinner.gif">
      </template>
      <template #error="{ error }">
        <pre>
          {{ error }}
        </pre>
      </template>
      <template #default="{ data: userData }">
        <div>
          <label>
            [Vuex] Name:
            <output>{{ userData.name }}</output>
          </label>
          <br>
          <label>
            [Vuex] Job:
            <output>{{ userData.job }}</output>
          </label>
          <br>
          <label>
            [Vuex] Umur:
            <output>{{ userData.age }}</output>
          </label>
        </div>
      </template>
    </DataProvider>
  </div>
</template>

<script>
import DataProvider from '../components/DataProvider'
export default {
  components: {
    DataProvider,
  },
}
</script>
