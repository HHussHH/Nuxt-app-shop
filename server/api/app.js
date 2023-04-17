export default defineEventHandler(async (event) => {
  //   const { name } = getQuery(event);
  //   const { age } = await readBody(event);

  const { data } = await $fetch(
    "https://api.currencyapi.com/v3/latest?apikey=gPqm0l771OA1P82u5L2YR67KruINRNQIlMxh6HnL"
  );
  return data;
});
