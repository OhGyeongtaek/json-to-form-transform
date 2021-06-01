<template>
  <v-app>
    <JsonFormItems :items="items" />
  </v-app>
</template>

<script lang="ts">
import Vue from "vue";
import { Component } from "vue-property-decorator";
import { JsonToFormProps } from "./plugins/json-to-form";
import JsonFormItems from "@/components/JsonFormItems.vue";

@Component({
  components: { JsonFormItems },
})
export default class App extends Vue {
  items: JsonToFormProps[] = [
    {
      type: "children",
      children: [
        {
          type: "v-text",
          cols: 3,
          props: {
            label: "테스트",
          }
        },
        {
          type: "v-text",
          cols: 3,
        },
        {
          type: "v-text",
          cols: 3,
        },
      ],
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
