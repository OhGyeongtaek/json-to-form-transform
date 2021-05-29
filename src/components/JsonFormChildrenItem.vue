<template>
  <v-row>
    <template v-for="(child, idx) in item.children">
      <JsonFormItem :item="child" :key="`child-item-${idx}`" />
    </template>
  </v-row>
</template>

<script lang="ts">
import { Vue, Component, Prop } from "vue-property-decorator";
import { JsonToFormChildrenProps } from "@/plugins/json-to-form";
import JsonFormItem from "./JsonFormItem.vue";

@Component({
  components: { JsonFormItem },
})
export default class JsonFormChildrenItem extends Vue {
  @Prop()
  item!: JsonToFormChildrenProps;
}
</script>
