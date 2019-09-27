<template>
  <div id="demo">
    {{ name }}
    <h2 v-if="ok">表白成功</h2>
    <h2 v-else>表白失败</h2>
    <h2 v-show="ok">求婚成功</h2>
    <h2 v-show="!ok">求婚失败</h2>
    <br>
    <button @click="ok=!ok">切换</button>
    <h2>测试: v-for 遍历数组</h2>
    <ul>
      <li v-for="(p, index) in persons" :key="index">
        {{index}}--{{p.name}}--{{p.age}}
        --
        <button @click="deleteItem(index)">删除</button>
        --
        <button @click="updateItem(index, {name:'Frank',age:15})">更新</button>
      </li>
    </ul>
    <h2>测试: v-for 遍历对象</h2>
    <ul>
      <li v-for="(value, key)  in persons[0]" :key="key">
        {{ key }} : {{ value }}
      </li>
    </ul>

  </div>
</template>

<script>
  export default {
    name: 'second',
    data() {
      return {
        name: 'this is second',
        ok: false,
        persons: [
          { id: 1, name: 'Tom', age: 13 },
          { id: 2, name: 'Jack', age: 12 },
          { id: 3, name: 'Bob', age: 14 }
        ]
      }
    },
    methods: {
      deleteItem: function(index) {
        this.persons.splice(index, 1)
      },
      updateItem(index, p) {
        this.persons.splice(index, 1, p)
      }
    }
  }
</script>

<style scoped>

</style>
