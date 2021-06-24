<template>
  <div class="new-book">
    <h3>Add new book</h3>

    <div class="form">
      Name: <input class="name" v-model="name"/>
      Author: <input class="author" v-model="author"/>
      Year: <input class="year" v-model="year" type="number"/>
      Category: <input class="category" v-model="category">
      Language: <input class="language" v-model="language">
    </div>

    <button class="add"
            @click="submit">Add</button>
  </div>
</template>

<script>
export default {
  name: "AddBook",
  data() {
    return {
      name: '',
      author: '',
      year: 2021,
      category: '',
      language: ''
    }
  },
  methods: {
    submit() {
      const {name, author, year, category, language} = this;

      this.$emit('add', {name, author, year, category, language});
    }
  }
}
</script>

<style>
.new-book {
  width: 50%;
  padding: 20px;
  display: flex;
  flex-direction: column;
  gap: 10px;
}

.form {
  display: flex;
  flex-direction: column;
  gap: 5px;
}

.add {
  height: 24px;
  background: darkolivegreen;
  color: whitesmoke;
  border: 1px solid darkolivegreen;
  border-radius: 10px;
}
</style>