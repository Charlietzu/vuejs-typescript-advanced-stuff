import Vue from "vue";
import Component from "vue-class-component";

@Component
export class ButtonInfo extends Vue {
  buttonText = "";
  infoName = "";
  created(): void {
    this.buttonText = this.getInfo();
  }

  getInfo(): string {
    return `Get ${this.infoName}`;
  }
}
