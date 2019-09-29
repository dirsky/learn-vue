<template>
    <div class="counter">
      this is my counter
      <p>
        click {{$store.state.count}}, count is {{evenOrOdd}}
      </p>
      <button @click="increment">+</button>
      <button @click="decrement">-</button>
      <button @click="incrementIfOdd">increment if odd</button>
      <button @click="incrementAsync">increment async</button>
    </div>
</template>

<script type="text/ecmascript-6">
    export default {
      name: 'counter',
      computed: {
          evenOrOdd () {
            return this.$store.getters.evenOrOdd
          }
      },
      methods: {
        increment() {
          // 通知vuex去增加，触发store中对应的action去调用
          this.$store.dispatch('increment')
        },
        decrement() {
          this.$store.dispatch('decrement')
        },
        incrementIfOdd() {
          this.$store.dispatch('incrementIfOdd')
        },
        incrementAsync() {
          this.$store.dispatch('incrementAsync')
        }
      }
    }
</script>

<style scoped lang="stylus" rel="stylesheet/stylus" type="text/stylus">

</style>
