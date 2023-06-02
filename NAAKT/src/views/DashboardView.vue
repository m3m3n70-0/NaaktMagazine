<template>
    <div>
      <button @click="fetchData">Fetch Data</button>
      <div v-for="item in data"></div>
      <ul>
        <li v-for="item in data">{{ item.id }}</li>
      </ul>
    </div>
  </template>

  <script>
  import axios from 'axios';

  export default {
    data() {
      return {
        data: [],
      };
    },
    methods: {
      fetchData() {
        axios.get('src/database/db.php')
          .then(response => {
            this.data = response.data;
          })
          .catch(error => {
            console.error('Error fetching data:', error);
          });
      },
    },
  };
  </script>
