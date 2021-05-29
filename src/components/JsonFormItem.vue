<template>
  <v-col :cols="item.cols">
    <component :is="item.type" v-bind="{ ...item.props }"></component>
  </v-col>
</template>

<script lang="ts">
import {
  JsonToFormChildrenProps,
  JsonToFormProps,
} from "@/plugins/json-to-form";
import { Vue, Component, Prop } from "vue-property-decorator";

@Component
export default class JsonFormItem extends Vue {
  @Prop()
  item!: JsonToFormProps | JsonToFormChildrenProps;
}
</script>
