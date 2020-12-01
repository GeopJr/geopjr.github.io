<template>
  <v-container fill-height>
    <v-row>
      <v-col cols="12" md="4" sm="6">
        <v-card elevation="2" shaped>
          <v-img alt="GeopJr's mascot" src="/assets/images/avi.png" max-height="500px" contain />
          <v-card-title>
            GeopJr
          </v-card-title>
          <v-card-subtitle>
            {{ info.slogan }}
          </v-card-subtitle>
          <v-card-text class="text--primary">
            <InfoBox />
          </v-card-text>
          <v-card-actions>
            <v-btn color="accent" href="/work" text>
              Work
            </v-btn>
            <v-btn color="accent" href="/contact" text>
              Contact
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-col>
      <v-col cols="12" md="8" height="100%" sm="6">
        <v-card elevation="2" shaped>
          <v-img src="/assets/images/miroslava-flowers.jpg" height="200px" />
          <v-card-subtitle>
            <span>Photo by <a href="https://unsplash.com/@miroslava?utm_source=unsplash&amp;utm_medium=referral&amp;utm_content=creditCopyText">Miroslava</a> on <a
              href="https://unsplash.com/s/photos/pink?utm_source=unsplash&amp;utm_medium=referral&amp;utm_content=creditCopyText"
            >Unsplash</a></span>
          </v-card-subtitle>
        </v-card>
        <v-card elevation="2" class="mt-6" outlined>
          <v-card-text>
            <v-card-title class="pa-0">
              Here's some quick info about me:
            </v-card-title>
            <v-card-subtitle class="pl-0 pt-4 pb-1">
              <span>I've been programming 🧑‍💻 for about <strong class="accent--text">{{ new Date().getFullYear() - 2015 }} years</strong>, mostly as a <strong class="accent--text">freelance full-stack web dev</strong>.</span>
            </v-card-subtitle>
            <v-row>
              <Langs />
              <v-col cols="2" height="100%" style="justify-content: center;" class="d-none d-md-flex">
                <v-divider vertical class="my-0" />
              </v-col>
              <Interests />
            </v-row>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import Info from '@/assets/data/index.json'
import InfoBox from '@/components/index/InfoBox.vue'
import Langs from '@/components/index/Langs.vue'
import Interests from '@/components/index/Interests.vue'

export default {
  components: {
    InfoBox,
    Langs,
    Interests
  },
  data: () => ({
    info: Info
  }),
  head () {
    return {
      title: 'Home'
    }
  }
}
</script>
