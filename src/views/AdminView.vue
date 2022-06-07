<template>
  <v-container class="grey lighten-5">
    <v-row>
      <v-layout justify-center>
        <v-flex xs12 sm8 md4>
          <!-- login view -->
          <v-card>
            <v-toolbar dark flat>
              <v-toolbar-title>Login Form</v-toolbar-title>
            </v-toolbar>
            <v-card-text>
              <!-- login form -->
              <v-form v-model="isFormValid">
                <v-text-field
                  v-model="username"
                  id="username"
                  name="username"
                  label="Usename"
                  type="text"
                  required
                >
                </v-text-field>
                <v-text-field
                  v-model="password"
                  id="password"
                  label="Password"
                  type="password"
                  required
                >
                </v-text-field>
                <v-spacer></v-spacer>
                <v-card-actions>
                  <v-btn color="primary" @click="loginClicked">Login</v-btn>
                </v-card-actions>
              </v-form>
              <!-- login form -->
            </v-card-text>
          </v-card>
          <!-- end login view -->
        </v-flex>
      </v-layout>
    </v-row>

    <div class="about pa-6">
      <h1>This is the Admin View</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ut magni in
        facilis optio ducimus impedit obcaecati repellendus odit ullam! Ipsa
        cupiditate aliquid aliquam quis excepturi! Aspernatur iure non quibusdam
        provident!
      </p>
      <p>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ut magni in
        facilis optio ducimus impedit obcaecati repellendus odit ullam! Ipsa
        cupiditate aliquid aliquam quis excepturi! Aspernatur iure non quibusdam
        provident!
      </p>
      <p>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ut magni in
        facilis optio ducimus impedit obcaecati repellendus odit ullam! Ipsa
        cupiditate aliquid aliquam quis excepturi! Aspernatur iure non quibusdam
        provident!
      </p>
      <p>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ut magni in
        facilis optio ducimus impedit obcaecati repellendus odit ullam! Ipsa
        cupiditate aliquid aliquam quis excepturi! Aspernatur iure non quibusdam
        provident!
      </p>
    </div>
  </v-container>
</template>
<style>
.v-input {
  height: 50px;
}
</style>