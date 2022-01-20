<template>
  <v-container>
    <v-row>
      <v-col>
        <h3>
          Vue mixins implementation, both buttons are using the same Mixin, so
          they share some logic.
        </h3>
      </v-col>
    </v-row>
    <v-row>
      <v-col>
        <ButtonExample1 />
      </v-col>
    </v-row>
    <v-row>
      <v-col>
        <ButtonExample2 />
      </v-col>
    </v-row>
  </v-container>
</template>

<script lang="ts">
import { mixins } from "vue-class-component";
import { Component } from "vue-property-decorator";
import { ButtonInfo } from "./mixins";
import ButtonExample1 from "./ButtonExample1.vue";
import ButtonExample2 from "./ButtonExample2.vue";

@Component({
  components: {
    ButtonExample1,
    ButtonExample2,
  },
})
export default class Mixins extends mixins(ButtonInfo) {}
</script>
