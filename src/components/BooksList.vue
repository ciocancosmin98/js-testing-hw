<template>
  <div class="books-list">
    <template v-for="book in books"
              :ref="book.id">
      <book :id="book.id"
            :name="book.name"
            :author="book.author"
            :year="book.year"
            :category="book.category"
            :language="book.language"
            @remove="remove"></book>
    </template>
  </div>
</template>

<script>
import Book from './Book.vue';

export default {
  name: 'list',
  components: {
    Book
  },
  props: {
    books: {
      type: Array,
      default: () => [],
      validator: (values) => values.every((value) => (value.hasOwnProperty('id') ? typeof value.id === 'string' : true)
          && (value.hasOwnProperty('name') ? typeof value.name === 'string' : true)
          && (value.hasOwnProperty('author') ? typeof value.author === 'string' : true)
          && (value.hasOwnProperty('year') ? typeof value.year === 'number' : true)
          && (value.hasOwnProperty('category') ? typeof value.category === 'string' : true)
          && (value.hasOwnProperty('language') ? typeof value.language === 'string' : true))
    }
  },
  methods: {
    remove(e) {
      this.$emit('remove', e);
    }
  }
}
</script>

<style>
.books-list {
  display: flex;
  flex-direction: column;
  gap: 10px;
}
</style>
