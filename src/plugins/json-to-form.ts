import Vue from "vue";
import { VAutocomplete, VFileInput, VTextarea, VTextField } from "vuetify/lib";

export const V_FILE = "v-file";
export const V_TEXT = "v-text";
export const V_AUTOCOMPLETE = "v-autocomplete";
export const V_TEXTAREA = "v-textarea";

export type JsonToInputTypes =
  | typeof V_FILE
  | typeof V_TEXT
  | typeof V_AUTOCOMPLETE
  | typeof V_TEXTAREA;

export type JsonToFormProps = {
  type?: JsonToInputTypes;
  props?: unknown;
  children?: JsonToFormChildrenProps[];
};

export type JsonToFormChildrenProps = JsonToFormProps & {
  cols: number;
};

Vue.component(V_FILE, VFileInput);
Vue.component(V_TEXT, VTextField);
Vue.component(V_AUTOCOMPLETE, VAutocomplete);
Vue.component(V_TEXTAREA, VTextarea);

// const prototype = Vue.prototype;

// const test = (): string => {
//   alert("1234");
//   return "test";
// };

// if (!Object.prototype.hasOwnProperty.call(prototype, "$showSnack")) {
//   prototype.test = test;
// }

// declare module "vue/types/vue" {
//   interface Vue {
//     test: () => string;
//   }
// }
