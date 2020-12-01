<template>
  <v-container fill-height>
    <v-banner single-line elevation="2" width="100%" class="text-center">
      You can find more on my <a href="https://github.com/GeopJr" class="accent--text">GitHub profile</a>.
    </v-banner>
    <v-row>
      <v-col
        v-for="project in projects"
        :key="project.name"
        cols="12"
        xl="3"
        lg="4"
        md="4"
        sm="6"
      >
        <v-card elevation="2" outlined class="card-outter" height="100%">
          <v-card-title>
            <a :href="project.url ? project.url : project.extra[0].url" class="accent--text">{{ project.name }}</a>
          </v-card-title>
          <v-card-subtitle>
            {{ project.url ? "FOSS" : "CLOSED SOURCE" }}
          </v-card-subtitle>
          <v-card-text class="text--primary">
            <div>{{ project.desc }}</div>
          </v-card-text>
          <v-spacer />
          <v-card-actions v-if="project.extra.length > 0" class="card-actions">
            <v-btn v-for="action in project.extra" :key="action.name" color="accent" :href="action.url" text>
              {{ action.name }}
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import Projects from '@/assets/data/work.json'

export default {
  data: () => ({
    projects: Projects
  }),
  head () {
    const title = 'Work'
    const desc = 'Some projects made by GeopJr'
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
