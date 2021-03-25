<template>
  <div>
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
export default {
  props: {
    userData: {
      type: Object,
    },
  },
}
</script>
