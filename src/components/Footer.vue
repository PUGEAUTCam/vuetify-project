<script lang="ts">
export default {
  data: () => ({
    icons: ["mdi-facebook", "mdi-twitter", "mdi-linkedin", "mdi-instagram"],
  }),
};
</script>

<template>
  <v-footer class="d-flex flex-column py-15">
    <div class="d-flex w-100 align-center">
      <strong>Suivez Interencheres sur les réseaux sociaux !</strong>
      <v-spacer></v-spacer>
      <v-btn
        v-for="icon in icons"
        :key="icon"
        class="mx-4"
        :icon="icon"
        variant="plain"
        size="small"
      ></v-btn>
    </div>
    <p>
      Avec Interencheres, achetez aux enchères, en salle ou sur Internet. Plus
      de 330 commissaires-priseurs garantissent les objets. Ces derniers
      publient quotidiennement en ligne les informations relatives à leurs
      prochaines ventes aux enchères sur le site. Ils permettent ainsi aux
      acheteurs du monde entier de consulter gratuitement la quasi-totalité des
      annonces de ventes aux enchères en France.
    </p>
  </v-footer>
</template>
