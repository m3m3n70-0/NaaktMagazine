<template>
  <div>
    <h1>Data Component</h1>
    <ul>
      <li v-for="item in data" :key="item.id">{{ item.name }}</li>
    </ul>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  data() {
    return {
      data: []
    };
  },
  mounted() {
    // Fetch data from the server
    axios.get('http://127.0.0.1:5173/api/data')
  .then(response => {
    // Handle the response
  })
  .catch(error => {
    // Handle the error
    console.error('Error fetching data:', error);
  });

  }
};
</script>
