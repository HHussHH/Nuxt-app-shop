<template>
  <div>
    <h2>About</h2>
    <p>
      On this page u can see how i work with server api and get data into
      currencyapi.
    </p>

    <div>{{ data }}</div>
  </div>
</template>

<script setup>
const { data } = await useFetch("/api/currency/GBP");
</script>

<style scoped>
h2 {
  margin-bottom: 20px;
  font-size: 36px;
}
p {
  margin: 20px 0;
}
</style>
