<template>
  <v-card 
    outlined 
    class="ma-3">
    <v-card-title primary-title>
      {{ questionInfo.title }}
    </v-card-title>
    <v-list three-lines
      dense>
      <v-list-item>
        <v-list-item-content>
          <v-list-item-title><b>{{majorTags[questioner.major]}}</b> dept. student in semester {{questioner.currentSemester}} asks this</v-list-item-title>
          <v-list-item-subtitle>
            <small>I am interested in:  </small>
            <v-chip x-small label class="ma-1"
              v-for="(area, index) in questioner.interestedArea"
              :key="index">{{area}}</v-chip>
          </v-list-item-subtitle>
          <v-list-item-subtitle>
            <small> I took these classes: </small>
            <v-chip x-small color="green lighten-3" label class="ma-1"
              v-for="(course, index) in questioner.coursesTaken"
              :key="index">{{course}}</v-chip>
          </v-list-item-subtitle>
        </v-list-item-content>
      </v-list-item>
    </v-list>
    <v-card-text>
      <span class="d-inline-block text-truncate" style="max-width:300px">
        {{questionInfo.body}}
      </span>
    </v-card-text>
  </v-card>
</template>

<script>
 import {
    mapState,
    // mapGetters
  } from 'vuex'

  export default {
    name: "QuestionCard",
    data: () => ({

    }),
    props: {
      questionId: Number
    },
    computed: {
      ...mapState(['majorTags', 'users', 'questions']),
      questionInfo () {
        return this.questions[this.questionId]
      },
      questioner () {
        return this.users[this.questionInfo.userID]
      }
    }
  }
</script>