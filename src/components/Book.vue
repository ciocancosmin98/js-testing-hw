<template>
  <div class="book">
    <div>
    <div class="name">{{ name }}</div>
    <p class="author">by {{ author }}</p>

    <div> {{ information }} </div>
    </div>

    <button class="remove"
            @click="remove">
      Remove
    </button>
  </div>
</template>

<script>
import {Language} from '../util/constant.js';

export default {
  name: 'Book',
  props: {
    id : {
      type: String,
      required: true
    },
    name: {
      type: String,
      required: true
    },
    author: {
      type: String,
      required: true
    },
    year: {
      type: Number
    },
    category: {
      type: String
    },
    language: {
      type: String,
      validator: (value) => Language.includes(value)
    }
  },
  computed: {
    information() {
      return [this.year, this.category, this.language].join('*');
    }
  },
  methods: {
    remove() {
      this.$emit('remove', this.id);
    }
  }
}
</script>

<style>
.book {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  border: 1px solid gray;
  border-radius: 10px;
  background: whitesmoke;
  box-shadow: rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px;
  padding: 10px 20px;
}
.name {
  font-size: 20px;
  font-weight: 600;
}

.remove {
  height: 24px;
  background: rosybrown;
  color: whitesmoke;
  border: 1px solid rosybrown;
  border-radius: 10px;
}
</style>