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
      <template #default="{ data }">
        <DumbUserDataCard :user-data="data" />
      </template>
    </DataProvider>
  </div>
</template>

<script>
import DataProvider from '../components/DataProvider'
import DumbUserDataCard from '../components/DumbUserDataCard'
export default {
  components: {
    DataProvider,
    DumbUserDataCard,
  },
}
</script>
