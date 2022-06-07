<template>
  <v-app id="inspire">
    <v-navigation-drawer v-model="drawer" app>
      <v-list-item>
        <v-list-item-content>
          <v-list-item-title class="text-h6"> Band PI </v-list-item-title>
          <v-list-item-subtitle> Song List </v-list-item-subtitle>
        </v-list-item-content>
      </v-list-item>

      <v-divider></v-divider>

      <v-list dense nav>
        <v-list-item v-for="item in items" :key="item.title" :to="item.to" link>
          <v-list-item-icon>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-icon>

          <v-list-item-content>
            <v-list-item-title>{{ item.title }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>

    <v-app-bar app>
      <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>
      <v-toolbar-title>Band PI</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-checkbox
        v-model="ex4"
        label="Show Chords"
        color="primary"
        value="Chords"
        hide-details
      ></v-checkbox>
    </v-app-bar>

    <v-main>
      <router-view></router-view>
    </v-main>
  </v-app>
</template>

<script>
export default {
  data: () => ({
    drawer: null,
    items: [
      { title: "BandPi", icon: "mdi-view-dashboard", to: "/" },
      { title: "SongView", icon: "mdi-account-music", to: "/SongView" },
      {
        title: "AdminView",
        icon: "mdi-playlist-music-outline",
        to: "/AdminView",
      },
    ],
    ex4: ["red"],
  }),
};
</script>
