<template>
    <div class="containerDashboard">
      <button @click="logUit">Uitloggen</button>
      <button @click="fetchData">Fetch Data</button>
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
      logUit() {
        this.$router.push('/');
        this.ChangeLoginStatus(false);
      },
      fetchData() {
        axios.get('https://i507258.hera.fhict.nl/src/database/db.php') // Update the URL path to db.php
          .then(response => {
          this.data = response.data;
          this.data.forEach(element => {
            console.log(element);
            console.log(element.ID);
            console.log(element.password);
          });
        })
          .catch(error => {
          console.error('Error fetching data:', error);
          });
        },
        ChangeLoginStatus(login) {
            this.$store.commit('changeLoginStatus', login);
            console.log('Login status changed');
        }
    },
  };
  </script>

<style scoped>
.containerDashboard {
    position: absolute;
    margin-top: 20px;
}
</style>
