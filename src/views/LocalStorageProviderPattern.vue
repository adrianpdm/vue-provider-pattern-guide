<template>
  <div key="route:provider-pattern" style="padding: 16rem;">
    <LocalStorageDataProvider>
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
    </LocalStorageDataProvider>
  </div>
</template>

<script>
import LocalStorageDataProvider from '../components/LocalStorageDataProvider'
import DumbUserDataCard from '../components/DumbUserDataCard'
export default {
  components: {
    LocalStorageDataProvider,
    DumbUserDataCard,
  },
}
</script>
