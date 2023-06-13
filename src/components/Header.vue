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
      <v-icon class="mr-8" size="small">mdi mdi-magnify</v-icon>
    </router-link>

    <router-link :to="{ name: 'Profil' }" :style="{ color: 'white' }">
      <v-btn class="mr-2">Mon profil</v-btn>
      <v-icon class="mr-8">mdi mdi-account-outline</v-icon>
    </router-link>
  </v-app-bar>

  <v-card>
    <v-navigation-drawer expand-on-hover rail>
      <v-list>
        <v-list-item
          prepend-avatar="https://randomuser.me/api/portraits/women/75.jpg"
          title="Milie Pugeaut"
          subtitle="milie_a88@gmailcom"
        ></v-list-item>
      </v-list>

      <v-divider></v-divider>

      <v-list density="compact" nav>
        <v-list-item
          prepend-icon="mdi mdi-account-circle"
          title="Mon profil"
          value="profil"
        >
        </v-list-item>
        <v-list-item
          prepend-icon="mdi mdi-heart-multiple"
          title="Mes favoris"
          value="favs"
        ></v-list-item>
        <v-list-item
          prepend-icon="mdi mdi-cog-outline"
          title="Parameters"
          value="parameters"
        ></v-list-item>
      </v-list>
    </v-navigation-drawer>
  </v-card>
</template>
