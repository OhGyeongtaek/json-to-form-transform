<template>
  <v-app>
    <v-main>
      <template v-for="(item, idx) in items">
        <v-row :key="`row-${idx}`">
          <template v-if="item.children">
            <template v-for="(child, childIdx) in item.children">
              <v-col :cols="child.cols" :key="`child-${childIdx}`">
                <component
                  :is="child.type"
                  :key="`child-item-${childIdx}`"
                  v-bind="{ ...child.props }"
                ></component>
              </v-col>
            </template>
          </template>
          <template v-else>
            <v-col>
              <component
                :is="item.type"
                :key="`item-${idx}`"
                v-bind="{ ...item.props }"
              ></component>
            </v-col>
          </template>
        </v-row>
      </template>
    </v-main>
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
      children: [
        {
          type: "v-text",
          cols: 3,
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
