<template>
  <v-app>
    <div>
      <v-app-bar flat>
        <v-btn class="ml-0" icon :to="'/'" title="Home">
          <v-avatar>
            <v-img src="/assets/images/avi.png" quality="50" alt="Avatar" />
          </v-avatar>
        </v-btn>
        <v-toolbar-title class="d-none d-sm-flex ml-3">
          GeopJr
        </v-toolbar-title>
        <v-spacer />
        <v-btn-toggle rounded router>
          <v-tooltip v-for="page in pages" :key="page.endpoint" bottom>
            <template v-slot:activator="{ on, attrs }">
              <v-btn :aria-label="page.aria" v-bind="attrs" :to="'/' + page.endpoint" v-on="on">
                <v-icon medium>
                  fa-{{ page.icon }}
                </v-icon>
              </v-btn>
            </template>
            <span>{{ page.endpoint === "" ? "Home" : page.endpoint.charAt(0).toUpperCase() + page.endpoint.slice(1) }}</span>
          </v-tooltip>
        </v-btn-toggle>
      </v-app-bar>
    </div>
    <transition name="fade" appear>
      <v-main>
        <nuxt />
      </v-main>
    </transition>
    <v-footer app absolute rounded padless>
      <v-card flat tile class="text-center c-footer">
        <v-card-text class="pt-0">
          Made with
          <svg-icon width="24px" height="24px" name="vue" class="c-icon" />,
          <svg-icon width="24px" height="24px" name="less" class="c-icon" />, <v-icon medium>
            fa fa-linux
          </v-icon>, <v-icon medium>
            fa-mars-double
          </v-icon> and <v-icon medium>
            fa-heart
          </v-icon>.
        </v-card-text>
        <v-divider />
        <v-card-text class="pa-3">
          <strong class="accent--text">©</strong> {{ new Date().getFullYear() }} — <strong class="accent--text">GeopJr</strong> <svg-icon width="34px" height="34px" name="branding-colored" class="c-icon" />
        </v-card-text>
      </v-card>
    </v-footer>
  </v-app>
</template>

<script>
export default {
  data: () => ({
    pages: [{
      endpoint: '',
      icon: 'home',
      brand: false,
      aria: 'Home'
    }, {
      endpoint: 'work',
      icon: 'briefcase',
      brand: false,
      aria: 'Work'
    }, {
      endpoint: 'blog',
      icon: 'dev-to',
      brand: true,
      aria: 'Blog'
    }, {
      endpoint: 'donate',
      icon: 'money',
      brand: false,
      aria: 'Donate'
    }, {
      endpoint: 'contact',
      icon: 'id-card',
      brand: false,
      aria: 'Contact'
    }]
  })
}
</script>

<style lang="less">
.c-icon {
  vertical-align: middle;
}

.v-toolbar__title {
    text-overflow: "J" !important;
}

.c-footer {
    width: 100%;
    padding-top: 16px !important;
}

.fade-enter-active {
  transition: opacity 1s;
}

.fade-enter {
  opacity: 0;
}

.v-card__title {
  word-break: break-word !important;
}

html {
  overflow: auto !important;
}
</style>
