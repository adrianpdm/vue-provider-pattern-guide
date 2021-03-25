<template>
  <div key="route:simple" style="padding: 16rem;">
    <UserDataCard />
    <UserDataCard route="yuseph" />
    <UserDataCard route="adzhar" />
  </div>
</template>

<script>
import UserDataCard from '../components/UserDataCard'
export default {
  components: {
    UserDataCard,
  }
}
</script>
