<template>
  <v-app>
    <template v-for="(item, idx) in items">
      <component
        :is="item.type"
        :key="idx"
        v-bind="{ ...item.props }"
      ></component>
    </template>
  </v-app>
</template>

<script lang="ts">
import Vue from "vue";
import { Component } from "vue-property-decorator";
import { JsonToFormProps } from "./plugins/json-to-form";

@Component({
  components: {},
})
export default class App extends Vue {
  items: JsonToFormProps[] = [
    {
      type: "v-file",
    },
    {
      type: "v-text",
    },
    {
      type: "v-textarea",
    },
    {
      type: "v-autocomplete",
    },
  ];
}
</script>
