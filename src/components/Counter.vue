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
    export default {
        name: 'counter',
      data() {
        return {
          count: 0
        }
      },
      computed: {
          evenOrOdd () {
            return this.count % 2 === 0 ? '偶数' : '奇数'
          }
      },
      methods: {
        increment() {
          let count = this.count
          this.count = count + 1
        },
        decrement() {
          let count = this.count
          this.count = count - 1
        },
        incrementIfOdd() {
          let count = this.count
          if (count % 2 === 1) {
            this.count = count + 1
          }
        },
        incrementAsync() {
          setTimeout(() => {
            let count = this.count
            this.count = count + 1
          }, 1000)
        }
      }
    }
</script>

<style scoped lang="stylus" rel="stylesheet/stylus" type="text/stylus">

</style>
