<template>
  <v-container fill-height>
    <v-row>
      <v-col
        v-for="(donation,type) in donations"
        :key="type"
        cols="12"
        xl="6"
        lg="6"
        md="6"
        sm="12"
        xs="12"
      >
        <v-banner single-line elevation="6" class="text-center">
          {{ type.charAt(0).toUpperCase() + type.slice(1) + "s" }}
        </v-banner>
        <DonationList :donations="donation" />
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import donations from '@/assets/data/donations.json'
import DonationList from '@/components/donate/DonationList.vue'

export default {
  components: {
    DonationList
  },
  data: () => ({
    donations
  }),
  head () {
    const title = 'Donate'
    const desc = 'Donate to support GeopJr'
    return {
      title,
      meta: [
        { hid: 'description', name: 'description', content: desc },
        { name: 'og:description', content: desc },
        { name: 'og:title', content: title + ' - GeopJr' }
      ]
    }
  }
}
</script>

<style lang="less" scoped>
.card-outter {
    position: relative;
    padding-bottom: 50px;
    overflow-x: auto;
    .card-actions {
        position: absolute;
        bottom: 0;
    }
}
</style>
