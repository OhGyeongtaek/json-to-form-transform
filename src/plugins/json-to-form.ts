import Vue from "vue";
import {
  VAutocomplete,
  VCol,
  VFileInput,
  VRow,
  VTextarea,
  VTextField,
} from "vuetify/lib";

export const V_FILE = "v-file";
export const V_TEXT = "v-text";
export const V_AUTOCOMPLETE = "v-autocomplete";
export const V_TEXTAREA = "v-textarea";
export const V_ROW = "v-row";
export const V_COL = "v-col";

export type JsonToInputTypes =
  | typeof V_FILE
  | typeof V_TEXT
  | typeof V_AUTOCOMPLETE
  | typeof V_TEXTAREA
  | typeof V_ROW
  | typeof V_COL;

export type JsonToFormProps = {
  type: JsonToInputTypes;
  props?: unknown;
  children?: JsonToFormProps[];
};

Vue.component(V_FILE, VFileInput);
Vue.component(V_TEXT, VTextField);
Vue.component(V_AUTOCOMPLETE, VAutocomplete);
Vue.component(V_TEXTAREA, VTextarea);
Vue.component(V_ROW, VRow);
Vue.component(V_COL, VCol);

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
