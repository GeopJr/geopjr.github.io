<template>
  <v-expansion-panels>
    <v-expansion-panel v-for="donation in donations" :key="donation.name">
      <v-expansion-panel-header :expand-icon="donation.emoji">
        {{ donation.name }}
        <template v-if="!donation.address.startsWith('http')" v-slot:actions>
          <cryptoicon :symbol="['ALGO', 'COMP'].includes(donation.name) ? 'generic' : donation.name" />
        </template>
      </v-expansion-panel-header>
      <v-expansion-panel-content>
        <div v-if="donation.address.startsWith('http')" style="overflow-x:auto">
          <a :href="donation.address" class="accent--text">{{ donation.address }}</a>
        </div>
        <div v-else style="overflow-x:auto">
          {{ donation.address }}
        </div>
      </v-expansion-panel-content>
    </v-expansion-panel>
  </v-expansion-panels>
</template>

<script>
export default {
  name: 'Donations',
  props: {
    donations: {
      type: Array,
      default: null
    }
  }
}
</script>
