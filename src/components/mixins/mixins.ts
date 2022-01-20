import Vue from "vue";
import Component from "vue-class-component";

@Component
export class ButtonInfo extends Vue {
  getInfo(informationName: string): string {
    return `Get ${informationName}`;
  }
}
