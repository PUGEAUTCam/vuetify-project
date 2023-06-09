<script lang="ts">
export default {
  data: () => ({
    items: [
      {
        title: "Vins",
        img: "@/../public/bourgognes.jpg",
      },
      {
        title: "Parfum",
        img: "@/../public/o.aZiw0vtAlkz.jpg",
      },
      {
        title: "Design",
        img: "@/../public/buffet-design-4-portes-facade-sculptee-piran.jpg",
      },
      {
        title: "Mode",
        img: "@/../public/360_Hermes_Birkin_Vert_Emeraud_F1-1.jpg",
      },
      {
        title: "Bijoux",
        img: "@/../public/iconeek-sales-cover_crop_w1396_h781_1396x781.jpg",
      },

      {
        title: "Tableaux",
        img: "@/../public/Judith-et-Holopherne-vers-1598-1599-Galerie-nationale-dart-ancien-Rome-1.jpg",
      },
    ],
    transparent: "rgba(255, 255, 255, 0)",
  }),
};
</script>

<template>
  <h2>Les catégories</h2>
  <v-container class="pa-4 text-center">
    <v-row class="fill-height" align="center" justify="center">
      <template v-for="(item, i) in items" :key="i">
        <v-col cols="12" md="4">
          <v-hover v-slot="{ isHovering, props }">
            <v-card
              :elevation="isHovering ? 12 : 2"
              :class="{ 'on-hover': isHovering }"
              v-bind="props"
            >
              <v-img :src="item.img" height="225px" cover>
                <v-card-title
                  class="text-h6 text-white d-flex justify-center align-center"
                >
                  <p class="mt-4">
                    {{ item.title }}
                  </p>
                </v-card-title>
              </v-img>
            </v-card>
          </v-hover>
        </v-col>
      </template>
    </v-row>
  </v-container>
</template>

<style scoped>
.v-card {
  transition: opacity 0.4s ease-in-out;
}

.v-card:not(.on-hover) {
  opacity: 0.6;
}

.show-btns {
  color: rgba(255, 255, 255, 1) !important;
}

h2 {
  margin-top: 51px;
  text-align: center;
  margin-bottom: 27px;
}

p {
  font-size: 25px;
}
</style>
