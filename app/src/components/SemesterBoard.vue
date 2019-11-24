<template>
    <v-card
        max-width="33%"
        class="auto"
        width="70%"
        height="500"
    >
        <v-card-title>{{semester}}</v-card-title>
        <v-divider></v-divider>
        <v-card 
            outlined
            class="ma-3"
            height="30%">
            <v-card-text>
                <small>Selected by User</small>
                <div v-for="(course, index) in items" v-bind:key="index">
                    <select-chip 
                        v-on:deselect="deselect"
                        v-on:vote="vote"
                        v-if="course.selected"
                        :index="course.index"
                        :my-chip="course.myChip"
                        :selectChip="true"
                        :votes="course.votes"
                        :courseId="index" />
                </div>
            </v-card-text>

        </v-card>
        <v-spacer></v-spacer>
        <v-card 
            class="ma-3"
            outlined
            height="40%"
            v-bind:color="cardColor"
            v-on:dragover="allowDrop"
            v-on:dragleave.prevent="leaveDrag"
            v-on:drop="drop">
            <v-card-text><span>On Vote</span></v-card-text>
            <v-container>
                <div v-for="(course, index) in items" v-bind:key="index">
                    <select-chip 
                        v-on:deselect="deselect"
                        v-on:vote="vote"
                        v-if="!course.selected"
                        :index="course.index"
                        :my-chip="course.myChip"
                        :selectChip="false"
                        :votes="course.votes"
                        :courseId="index" />
                </div>
            </v-container>
            <v-container>
            </v-container>
        </v-card>
    </v-card>
</template>
<script>
    export default {
        name: "SemesterBoard",
        props: {
            semester: String,
            items: Array,
            semesterId: Number,
        },
        components: {
            SelectChip: () => import('@/components/chips/SelectChip')
        },
        data: () => ({
            text: "temp",
            cardColor: "undefined"
        }),
        methods: {
            leaveDrag: function() {
                this.$emit('drag-leave-semester')
                this.cardColor = "undefined"
            },
            allowDrop: function(event) {
                event.preventDefault();
                this.$emit('drag-allow-semester', this.semesterId)
                this.cardColor = "grey lighten-3"
            },
            drop: function() {
                event.preventDefault();
                this.$emit('drag-dropped-semester', this.semesterId)
                this.cardColor = "undefined"
            },
            deselect: function(courseId) {
                this.$emit('deselect-course', this.semesterId, courseId)
            },
            vote: function(courseId, voteState, prevVote) {
                this.$emit('vote', this.semesterId, courseId, voteState, prevVote)
            }
        }
    }
</script>