<template>
  <v-app-bar app flat>
    <v-toolbar flat>
      <v-toolbar-title @click="goToHome">Home</v-toolbar-title>

      <v-spacer></v-spacer>

      <v-toolbar-items>
        <v-btn
          text
        >({{this.isLoggedIn ? ("You have " + this.myReputationPts + " Rep points") : "Log in to get Rep points"}})</v-btn>
      </v-toolbar-items>
    </v-toolbar>

    <button @click="logInAndOut">{{this.isLoggedIn ? "Log Out" : "Log In"}}</button>

    <v-toolbar-side-icon class="hidden-md-and-up" />

    <v-container mx-auto py-0>
      <v-layout></v-layout>
    </v-container>
  </v-app-bar>
</template>

<script>
  import { mapActions } from 'vuex'
  import { mapState } from "vuex";
  import firebase from "firebase";
  import { db } from "../../main";
  import store from "../../store";

  setTimeout(() => {
    if (firebase.auth().currentUser == null) {
      store.commit("changeLoginState", false);
    } else {
      store.commit("changeLoginState", true);
      db.collection("users")
        .where("userID", "==", firebase.auth().currentUser.uid)
        .get()
        .then(snapshot => {
          snapshot.forEach(doc => {
            store.commit("updateReputationPts", doc.data().reputationPts);
          });
        });
    }
  }, 1000);

  export default {
    data() {
      return {};
    },
    computed: {
      ...mapState(["myReputationPts", "isLoggedIn"])
    },
    watch: {},
    methods: {
      ...mapActions(['goToHome']),
      logInAndOut: function () {
        if (firebase.auth().currentUser == null) {
          // move to login page
          this.$router.replace("login");
        } else {
          // log out
          firebase
            .auth()
            .signOut()
            .then(() => {
              store.commit("changeLoginState", false);
              store.commit("updateReputationPts", 0)
            });
        }
      }
    },
  };


</script>
