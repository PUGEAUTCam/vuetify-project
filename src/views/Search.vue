<script setup lang="ts">
import Header from "@/components/Header.vue";
import Tabs from "@/components/Tabs.vue";
</script>

<template>
  <Header />
  <v-text-field
    clearable
    label="Rechercher un objet ou un lot"
    prepend-icon="mdi mdi-cloud-search"
    variant="underlined"
    single-line
    :style="{ width: '500px' }"
  ></v-text-field>
  <Tabs />
</template>
