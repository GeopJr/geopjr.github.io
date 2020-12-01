<template>
  <v-container fill-height>
    <v-row>
      <v-spacer />
      <v-col
        cols="12"
        xl="6"
        lg="6"
        md="6"
        sm="12"
        xs="12"
      >
        <Contacts :contacts="contacts" />
      </v-col>
      <v-spacer />
    </v-row>
  </v-container>
</template>

<script>
import contacts from '@/assets/data/contact.json'
import Contacts from '@/components/contact/ContactList.vue'

export default {
  components: {
    Contacts
  },
  data: () => ({
    contacts
  }),
  head () {
    const title = 'Contact'
    const desc = 'Get in touch with GeopJr'
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
