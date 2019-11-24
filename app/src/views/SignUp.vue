<template>
  <div class="signup">
    <p>Welcome to DragCS!</p>E-mail
    <input type="text" v-model="email" placeholder="E-mail" />
    <br />Password
    <input type="password" v-model="password" placeholder="Password" />
    <br />How many semesters did you take, including this semester?
    <select
      v-model="currentSemester"
      style="color:#000000; background-color:#FFFFFF; -webkit-appearance: menulist;"
    >
      <option disabled>Please choose from below.</option>
      <option>1</option>
      <option>2</option>
      <option>3</option>
      <option>4</option>
      <option>5</option>
      <option>6</option>
      <option>7</option>
      <option>8</option>
      <option>9+</option>
    </select>
    <br />What is your major?
    <select
      v-model="major"
      style="color:#000000; background-color:#FFFFFF; -webkit-appearance: menulist;"
    >
      <option disabled>Please choose from below.</option>
      <option>Undecided</option>
      <option>CS</option>
      <option>EE</option>
      <option>MAS</option>
      <option>Others</option>
    </select>
    <br />What is your dobule major, if any?
    <select
      v-model="doubleMajor"
      style="color:#000000; background-color:#FFFFFF; -webkit-appearance: menulist;"
    >
      <option disabled>Please choose from below.</option>
      <option>None</option>
      <option>CS</option>
      <option>EE</option>
      <option>MAS</option>
      <option>Others</option>
    </select>
    <br />What is your minor, if any?
    <select
      v-model="minor"
      style="color:#000000; background-color:#FFFFFF; -webkit-appearance: menulist;"
    >
      <option disabled>Please choose from below.</option>
      <option>None</option>
      <option>CS</option>
      <option>EE</option>
      <option>MAS</option>
      <option>Others</option>
    </select>
    <br />What is your interested area in CS, if any?
    <select
      v-model="interestedArea"
      style="color:#000000; background-color:#FFFFFF; -webkit-appearance: menulist;"
    >
      <option disabled>Please choose from below.</option>
      <option>None</option>
      <option>CS Theory</option>
      <option>System Network</option>
      <option>Software Engineering</option>
      <option>Social Computing</option>
      <option>Visual Comptuing</option>
      <option>HCI</option>
      <option>AI</option>
    </select>
    <br />
    <v-btn @click="processSignUp">Sign Up!</v-btn>
  </div>
</template>

<script>
import firebase from "firebase";
import { db } from "../main";
import store from '../store'

export default {
  name: "signUp",
  data() {
    return {
      email: "",
      password: "",
      currentSemester: "",
      major: "",
      minor: "",
      doubleMajor: "",
      interestedArea: ""
    };
  },
  methods: {
    processSignUp: function() {
      // first, check the value
      if (
        this.email == "" ||
        this.password == "" ||
        this.currentSemester == "" ||
        this.major == "" ||
        this.minor == "" ||
        this.doubleMajor == "" ||
        this.interestedArea == ""
      ) {
        alert("Please fill in all the informations!");
        return;
      }

      // post processing
      if (this.currentSemester == "9+") {
        this.currentSemester = "9";
      }
      this.currentSemester = parseInt(this.currentSemester);

      switch (this.major) {
        case "Undecided":
          this.major = -1;
          break;
        case "CS":
          this.major = 0;
          break;
        case "EE":
          this.major = 1;
          break;
        case "MAS":
          this.major = 2;
          break;
        case "Others":
          this.major = 3;
      }

      switch (this.doubleMajor) {
        case "None":
          this.doubleMajor = -1;
          break;
        case "CS":
          this.doubleMajor = 0;
          break;
        case "EE":
          this.doubleMajor = 1;
          break;
        case "MAS":
          this.doubleMajor = 2;
          break;
        case "Others":
          this.doubleMajor = 3;
      }

      switch (this.minor) {
        case "None":
          this.minor = -1;
          break;
        case "CS":
          this.minor = 0;
          break;
        case "EE":
          this.minor = 1;
          break;
        case "MAS":
          this.minor = 2;
          break;
        case "Others":
          this.minor = 3;
      }

      if (this.interestedArea == "None") {
        this.interestedArea = [];
      }

      firebase
        .auth()
        .createUserWithEmailAndPassword(this.email, this.password)
        .then(
          user => {
            let data = {
              currentSemester: this.currentSemester,
              major: this.major,
              minor: this.minor,
              doubleMajor: this.doubleMajor,
              interestedArea: [this.interestedArea],
              reputationPts: 0,
              userID: firebase.auth().currentUser.uid
            };
            (user)
            db.collection("users").doc().set(data);
            store.commit('changeLoginState', true)
            this.$router.replace("/");
          },
          error => {
            alert(error);
          }
        );
    }
  }
};
</script>