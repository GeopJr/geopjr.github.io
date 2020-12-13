<template>
  <v-expansion-panels>
    <v-expansion-panel v-for="contact in contacts" :key="contact.name">
      <v-expansion-panel-header :expand-icon="contact.emoji">
        {{ contact.name }}
      </v-expansion-panel-header>
      <v-expansion-panel-content eager>
        <div v-if="contact.url && (contact.url.startsWith('http') || contact.url.startsWith('mailto'))" style="overflow-x:auto">
          <a :href="contact.url" class="accent--text">{{ contact.address }}</a>
        </div>
        <div v-else style="overflow-x:auto">
          {{ contact.address }}
        </div>
      </v-expansion-panel-content>
    </v-expansion-panel>
  </v-expansion-panels>
</template>

<script>
export default {
  name: 'Contacts',
  props: {
    contacts: {
      type: Array,
      default: null
    }
  }
}
</script>
