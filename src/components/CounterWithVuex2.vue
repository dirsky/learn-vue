<template>
  <div class="counter">
    this is my counter
    <p>
      click {{count}}, count is {{evenOrOdd}}
    </p>
    <button @click="increment">+</button>
    <button @click="decrement">-</button>
    <button @click="incrementIfOdd">increment if odd</button>
    <button @click="incrementAsync">increment async</button>
  </div>
</template>

<script type="text/ecmascript-6">
  import { mapState, mapGetters, mapActions } from 'vuex'

  export default {
    name: 'counter',
    computed: {
      ...mapState(['count']),
      ...mapGetters(['evenOrOdd'])
    },
    methods: {
      ...mapActions(['increment', 'decrement',
        'incrementIfOdd', 'incrementAsync'])
    }
  }
</script>

<style scoped lang="stylus" rel="stylesheet/stylus" type="text/stylus">

</style>
