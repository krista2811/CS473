<template>
    <v-col>
            <v-row noGutters alignXl>
                <semester-board 
                    v-for="(semester, index) in semesters"
                    v-bind:key="index"
                    :semester="semester.semester"
                    :semesterId="index"
                    :items="semester.courses"
                    v-on:drag-over-semester="getSemesterDrag"
                    v-on:drag-leave-semester="leaveSemesterDrag"
                    v-on:drag-dropped-semester="addSemesterChip"
                    v-on:deselect-course="deselectChip"
                    v-on:vote="vote"/>
            </v-row>
            <v-row justify="center">
                <unselected-chip 
                    v-for="(course, index) in courses"
                    v-bind:key="index" class="text-center"
                    :index="course"
                    :courseId="index"
                    v-on:drag-on="getDrag"
                    v-on:drag-end="leaveSemesterDrag"/>
            </v-row>

    </v-col>
</template>
<script>
    import {
        mapState
    } from 'vuex'
    import { db } from "../main"
    import store from '../store'

    export default {
        name: "DragBoard",
        components: {
            UnselectedChip: () => import('@/components/chips/DragChip'),
            SemesterBoard: () => import('@/components/SemesterBoard')
        },
        props: {
            questionId: String
            // semesters: Array
        },
        computed: {
            ...mapState({user: 'user', courseInfos: 'courses'}),
            semesters () {
                return this.$store.state.questions[this.questionId].semesters
            },
            courses () {
                return this.$store.state.questions[this.questionId].courses
            } ,
            questions() {
              return this.$store.state.questions;
            }
        },
        data: () => ({
            nullInfo: {
                code: "Temp",
                enName: "Temp",
                koName: "Temp"
            },
            currentId: -1,
            currentSemesterId: -1,
            onDrag: false,
        }),
        methods: {
            getDrag: function (courseId) {
                this.currentId = courseId
                this.onDrag = true
            },
            getSemesterDrag: function(semesterId) {
                this.currentSemesterId = semesterId
            },
            leaveSemesterDrag: function() {
                this.currentSemesterId = -1
            },
            addSemesterChip: function(semesterId) {
                if (this.currentId >= 0) {
                    const itemId = this.courses[this.currentId];
                    console.log(this.semesters[semesterId].courses);
                    var index = this.semesters[semesterId].courses.findIndex(x => x.index === itemId);
                    if (index >= 0) {
                        this.semesters[semesterId].courses[index].votes.up += 1
                        this.semesters[semesterId].courses[index].myChip = true
                    } else {
                        var item = {
                            index: itemId,
                            selected: false,
                            myChip: true,
                            votes: {
                                up: 1,
                                down: 0,
                                hmm: 0
                            }
                        }
                        this.semesters[semesterId].courses.push(item);
                        store.commit('increaseReputationPts', 1)
                    }
                    this.courses.splice(this.currentId, 1);
                    this.currentId = -1
                    this.currentSemesterId = -1
                }
                db.collection('questions').doc(this.questionId).update(this.$store.state.questions[this.questionId]);
                this.onDrag = false
            },
            deselectChip: function(semesterId, courseId) {
                this.semesters[semesterId].courses[courseId].votes.up -= 1
                const targetCourse = this.semesters[semesterId].courses[courseId]
                if (targetCourse.votes.up > 0 || targetCourse.votes.down > 0 || targetCourse.votes.hmm > 0 ) {
                    this.semesters[semesterId].courses[courseId].myChip = false
                } else {
                    this.semesters[semesterId].courses.splice(courseId, 1)
                }
                this.courses.push(targetCourse.index);
                db.collection('questions').doc(this.questionId).update(this.$store.state.questions[this.questionId]);
            },
            vote: function(semesterId, courseId, voteState, prevVote) {
              if (voteState === 'down') {
                this.semesters[semesterId].courses[courseId].votes.down += 1
              } else if (voteState === 'up') {
                this.semesters[semesterId].courses[courseId].votes.up += 1
              } else if (voteState === 'hmm') {
                this.semesters[semesterId].courses[courseId].votes.hmm += 1
              }

              if (prevVote === 'down') {
                this.semesters[semesterId].courses[courseId].votes.down -= 1
              } else if (prevVote === 'up') {
                this.semesters[semesterId].courses[courseId].votes.up -= 1
              } else if (prevVote === 'hmm') {
                this.semesters[semesterId].courses[courseId].votes.hmm -= 1
              }
              db.collection('questions').doc(this.questionId).update(this.$store.state.questions[this.questionId]);
            },
    reputationUpdate: function(questionID, code, year, isSpring) {
      db.collection("votes")
        .orderBy("questionID", "asc")
        .get()
        .then(snapshot => {
          snapshot.forEach(doc => {
            if (doc.data().questionID == questionID) {
              let voteHistory = doc.data().upvoteHistory;
              for (var i = 0; i < voteHistory.length; i++) {
                let upvoteList = voteHistory[i].split(",");
                if (upvoteList.length >= 3) {
                  for (var j = 3; j < upvoteList.length; j++) {
                    if (
                      code == upvoteList[0] &&
                      year == upvoteList[1] &&
                      (isSpring ? "S" : "F") == upvoteList[2]
                    ) {
                      let userID = parseInt(upvoteList[j]);
                      db.collection("users")
                        .where("userID", "==", userID)
                        .get()
                        .then(snapshot => {
                          snapshot.forEach(doc => {
                            let newReputationPts = doc.data().reputationPts + 4;
                            doc.ref.update({ reputationPts: newReputationPts });
                          });
                        });
                    }
                  }
                }
              }
            }
          });
        });
    }
  }
};
</script>