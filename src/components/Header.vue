<script setup lang="ts"></script>

<template>
  <v-app-bar app color="primary" class="px-10" dark>
    <router-link :to="{ name: 'Home' }">
      <div class="d-flex align-center">
        <v-img :width="165" src="/public/logo_ie.svg" />
      </div>
    </router-link>

    <v-spacer></v-spacer>

    <router-link :to="{ name: 'Search' }" :style="{ color: 'white' }">
      <v-btn class="mr-2">Rechercher</v-btn>
      <v-icon class="mr-8">mdi mdi-magnify</v-icon>
    </router-link>
  </v-app-bar>
</template>
