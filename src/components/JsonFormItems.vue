<template>
  <div>
    <template v-for="(item, idx) in items">
      <v-row :key="`row-${idx}`">
        <component :is="getComponent(item)" :item="item"></component>
      </v-row>
    </template>
  </div>
</template>

<script lang="ts">
import { Vue, Component, Prop } from "vue-property-decorator";
import { JsonToFormProps, INPUT_TYPE_CHILDREN } from "@/plugins/json-to-form";
import JsonFormItem from "./JsonFormItem.vue";
import JsonFormChildrenItem from "./JsonFormChildrenItem.vue";

type ItemTypes = "JsonFormItem" | "JsonFormChildrenItem";

@Component({
  components: { JsonFormItem, JsonFormChildrenItem },
})
export default class JsonFormItems extends Vue {
  @Prop({ default: [] })
  items!: JsonToFormProps[];

  private getComponent(item: JsonToFormProps): ItemTypes {
    switch (item.type) {
      case INPUT_TYPE_CHILDREN:
        return "JsonFormChildrenItem";

      default:
        return "JsonFormItem";
    }
  }
}
</script>
