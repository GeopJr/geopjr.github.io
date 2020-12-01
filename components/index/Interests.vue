<template>
  <v-col cols="12" md="5" height="100%">
    <div>I'm really interested in the following <strong class="accent--text">topics</strong> and <strong class="accent--text">views</strong>:</div>
    <div class="text-center mt-2">
      <v-chip
        v-for="interest in info.interests"
        :key="interest"
        class="ma-1"
        color="accent"
        outlined
        pill
      >
        {{ interest }}
      </v-chip>
    </div>
  </v-col>
</template>

<script>
import Info from '@/assets/data/index.json'

export default {
  data: () => ({
    info: Info
  })
}
</script>
