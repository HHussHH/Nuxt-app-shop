<template>
  <div>
    <p>Products details for {{ id }}</p>
    <p>
      Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore,
      accusantium sapiente. Qui animi nam ut consequuntur quasi praesentium
      nobis iusto!
    </p>
  </div>
</template>

<script setup>
const { id } = useRoute().params;
</script>

<style scoped></style>
