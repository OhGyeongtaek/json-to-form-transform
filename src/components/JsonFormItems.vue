<template>
  <div>
    <template v-for="(item, idx) in items">
      <v-row :key="`row-${idx}`">
        <template v-if="item.type === 'children'">
          <template v-for="(child, childIdx) in item.children">
            <JsonFormItem :item="child" :key="`child-item-${childIdx}`"/>
          </template>
        </template>

        <template v-else>
          <JsonFormItem :item="item" :key="`item-${idx}`"/>
        </template>
      </v-row>
    </template>
  </div>
</template>

<script lang="ts">
import { Vue, Component, Prop } from "vue-property-decorator";
import { JsonToFormProps } from "@/plugins/json-to-form";
import JsonFormItem from "./JsonFormItem.vue";

@Component({
  components: { JsonFormItem },
})
export default class JsonFormItems extends Vue {
  @Prop({ default: [] })
  items!: JsonToFormProps[];
}
</script>
