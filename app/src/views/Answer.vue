<template>
    <div id="Answer"> 
      <answer-card
        :questionId="questionId" />
      <answer-board 
        :questionId="questionId"/>
    </div>
</template>

<script>
// this is page for answer.
// import banner, answer-card, answer-board component. Fill in banner plz.
    export default {
        name: 'Answer',
        props: {
          questionId: Number
        },
        components: {
            AnswerBoard: () => import('@/components/DragBoard'),
            AnswerCard: () => import('@/components/AnswerCard')
        },
    }
</script>