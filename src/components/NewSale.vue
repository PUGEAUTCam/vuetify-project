<script lang="ts">
export default {
  data() {
    return {
      dialog: false,
      favorites: [],
      category: [
        "Argenterie",
        "Animalier",
        "Tableaux",
        "Lithographies",
        "Bijoux",
        "Numismatique",
        "Philatelie",
        "Antique",
        "Voiture",
        "Electronique",
      ],
    };
  },
};
</script>

<template>
  <div class="text-center my-16">
    <v-btn rounded="0" class="pa-6" block variant="tonal">
      <span class="mr-2"> Créer une nouvelle vente</span>
      <v-icon color="secondary" class="mr-8">mdi mdi-gavel</v-icon>
    </v-btn>

    <v-dialog
      transition="dialog-bottom-transition"
      v-model="dialog"
      activator="parent"
    >
      <v-card>
        <v-form ref="form" class="pa-8">
          <h3>Votre vente</h3>
          <v-spacer></v-spacer>
          <v-text-field
            :counter="30"
            label="Nom de la vente"
            required
          ></v-text-field>
          <v-select
            label="Type de vente"
            :items="['Live', 'Online', 'Exposition']"
            required
          ></v-select>
          <v-textarea
            label="Description de la vente"
            :counter="600"
            clearable
            clear-icon="mdi-close-circle"
            rows="2"
          ></v-textarea>
          <v-checkbox label="Avec caution"></v-checkbox>
          <v-switch label="Vente visible des maintenant"></v-switch>

          <v-divider class="border-opacity-50" inset></v-divider>
          <h3>Les frais</h3>
          <v-radio-group inline>
            <v-radio label="Judiciaire: 14% HT" value="radio-1"></v-radio>
            <v-radio label="Volontaire: 25% HT" value="radio-2"></v-radio>
            <v-radio label="Mixte: 18% HT" value="radio-3"></v-radio>
            <v-radio label="Sans TVA: 10%" value="radio-4"></v-radio>
          </v-radio-group>

          <v-divider class="border-opacity-50" inset></v-divider>
          <h3>Vos lots</h3>

          <v-select
            v-model="favorites"
            :items="category"
            label="Categories"
            multiple
            persistent-hint
          ></v-select>
          <v-textarea
            label="Description du lot"
            :counter="2000"
            clearable
            clear-icon="mdi-close-circle"
            rows="3"
          ></v-textarea>

          <v-file-input multiple label="Photos du lot"></v-file-input>

          <div class="d-flex flex-column">
            <v-btn color="success" class="mt-4"> Valider </v-btn>
            <v-btn color="error" class="mt-4" @click="dialog = false">
              Annuler
            </v-btn>
          </div>
        </v-form>
      </v-card>
    </v-dialog>
  </div>
</template>

<style scoped>
h3 {
  padding: 6px;
}
</style>
