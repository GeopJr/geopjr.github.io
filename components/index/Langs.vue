<template>
  <v-col cols="12" md="5" height="100%">
    <div>I mainly enjoy writing in and using the following <strong class="accent--text">languages</strong> and <strong class="accent--text">technologies:</strong></div>
    <div class="text-center mt-2">
      <v-chip
        v-for="tech in info.techs"
        :key="tech"
        class="ma-1"
        color="accent"
        outlined
        pill
      >
        {{ tech }}
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
