<template>
  <div key="route:provider-pattern" style="padding: 16rem;">
    <RenderlessDataProvider>
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
    </RenderlessDataProvider>
  </div>
</template>

<script>
import RenderlessDataProvider from '../components/RenderlessDataProvider'
export default {
  components: {
    RenderlessDataProvider,
  },
}
</script>
