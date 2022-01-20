<template>
  <v-btn>{{ buttonText }} </v-btn>
</template>

<script lang="ts">
import { mixins } from "vue-class-component";
import { Component } from "vue-property-decorator";
import { ButtonInfo } from "./mixins";

@Component
export default class ButtonExample1 extends mixins(ButtonInfo) {
  infoName = "Orders";
}
</script>
