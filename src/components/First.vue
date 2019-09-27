<template>
  <div>
    <h1>{{ msg }}</h1>
    <p>{{username.toUpperCase()}} {{username}}</p>
    <input type="text" v-model="username">
    <a :href="url">主页:href="url"</a><br>
    <button @click="handleClick">点我@click="handleClick"</button>
    <br/>
    姓: <input type="text" placeholder="First Name" v-model="firstName"><br>
    名: <input type="text" placeholder="Last Name" v-model="lastName"><br>
    姓名 1(单向): <input type="text" placeholder="Full Name" v-model="fullName"><br>
    姓名 2(单向): <input type="text" placeholder="Full Name" v-model="fullName2"><br>
    姓名 3(双向): <input type="text" placeholder="Full Name2" v-model="fullName3"><br>

    <h3>1. class 绑定: :class='xxx'</h3>
    <p class="classB" :class="a">表达式是字符串: 'classA'</p>
    <p :class="{classA: isA, classB: isB}">表达式是对象: {classA:isA, classB: isB}</p>
    <p :class="['classA', 'classC']"> 表达式是数组: ['classA', 'classC']</p>

    <h3>2. style 绑定</h3>
    <p :style="{color, fontSize}">
      style="{ color: activeColor, fontSize: fontSize + 'px' }"
    </p>
    <button @click="update">更新</button>
  </div>
</template>
<script>
  export default {
    name: 'First',
    data() {
      return {
        msg: 'First  vue page',
        username: 'FrankUI',
        url: '/',
        firstName: 'Kobe',
        lastName: 'bryant',
        fullName2: 'Kobe bryant',
        a: 'classA',
        isA: true,
        isB: false,
        color: 'red',
        fontSize: '20px'
      }
    },
    computed: {
      fullName: function () {
        return this.firstName + ' ' + this.lastName
      },
      fullName3: {
        get: function () {
          return this.firstName + ' ' + this.lastName
        },
        set: function (value) {
          var names = value.split(' ')
          this.firstName = names[0]
          this.lastName = names[1]
        }
      }
    },
    methods: {
      handleClick() {
        alert(' 处理点击')
      },
      update () {
        this.a = 'classC'
        this.isA = false
        this.isB = true
        this.color = 'blue'
        this.fontSize = '30px'
      }
    },
    watch: {
      // 加上这部分后才能对lastName的值进行监控并更新到fullName2上。
      lastName: function (newVal, oldVal) {
        this.fullName2 = this.firstName + ' ' + newVal
      }
    }
  }
</script>
<style scoped>
  .classA {
    color: red;
  }
  .classB {
    background: blue;
  }
  .classC {
    font-size: 20px;
  }
</style>
