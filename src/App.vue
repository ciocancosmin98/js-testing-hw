<template>
  <div>
    <books-list :books="books" @remove="removeBook"></books-list>
    <add-book @add="addBook"></add-book>
  </div>
</template>

<script>
import BooksList from './components/BooksList.vue';
import AddBook from './components/AddBook.vue';
import {Books} from './util/constant.js';

export default {
  name: 'App',
  components: {
    BooksList,
    AddBook
  },
  data() {
    return {
      books: Books
    };
  },
  created() {
    this.books.forEach((book) => {
      book.id = this.generateRandomId();
    });
  },
  watch: {
    books(value) {
      value.forEach((book) => {
        if (!book.hasOwnProperty('id')) {
          book.id = this.generateRandomId();
        }
      });
    }
  },
  methods: {
    addBook(book) {
      this.books.push(book);
    },
    removeBook(id) {
      const index = this.books.findIndex((book) => book.id === id);
      if (index >= 0) {
        this.books.splice(index, 1);
      }
    },
    generateRandomId() {
      return Math.floor((1 + Math.random()) * 0x10000).toString(16).substring(1);
    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>