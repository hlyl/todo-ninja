<template>
  <v-app>
    <v-app-bar flat app class="grey lighten-3">
      <NavBar />
    </v-app-bar>
    /** More Code**/
  </v-app>
</template>

<script>
import NavBar from "@/components/NavBar";

export default {
  name: "App",
  components: { NavBar },
  data: () => ({
    //
  }),
};
</script>
