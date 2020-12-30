<template>
  <v-container fill-height>
    <v-row>
      <v-col
        v-for="post in blog"
        :key="post.title"
        cols="12"
        xl="3"
        lg="4"
        md="4"
        sm="6"
      >
        <v-card elevation="2" outlined class="card-outter" height="100%">
          <v-card-title>
            <span class="accent--text">{{ post.title }}</span>
          </v-card-title>
          <div class="ml-3">
            <v-chip
              v-for="tag in post.tags"
              :key="tag"
              color="accent"
              class="mx-1 pa-2"
              outlined
              pill
            >
              {{ tag.toLowerCase() }}
            </v-chip>
          </div>
          <v-card-subtitle>
            {{ post.date }}
          </v-card-subtitle>
          <v-card-text class="text--primary">
            <div>{{ post.desc }}</div>
          </v-card-text>
          <v-spacer />
          <v-card-actions class="card-actions">
            <v-btn color="accent" :href="post.url" text>
              DEV.TO
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import Blog from '@/assets/data/blog.json'

export default {
  data: () => ({
    blog: Blog
  }),
  head () {
    const title = 'Blog'
    const desc = 'Some blog posts written by GeopJr'
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
        right: 0;
    }
}
</style>
