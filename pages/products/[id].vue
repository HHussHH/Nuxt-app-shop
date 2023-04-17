<template>
  <div>
    <ProductDetails :product="product" />
  </div>
</template>

<script setup>
const { id } = useRoute().params;
const { data: product } = await useFetch(
  `https://fakestoreapi.com/products/${id}`,
  { key: id }
);
definePageMeta({
  layout: "products",
});
</script>

<style scoped></style>
