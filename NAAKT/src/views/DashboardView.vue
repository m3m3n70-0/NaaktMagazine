<template>
    <!-- <div class="containerDashboard">
      <button @click="logUit">Uitloggen</button>
      <button @click="fetchData">Fetch Data</button>
      <ul>
        <li v-for="item in data">{{ item.id }}</li>
      </ul>
    </div> -->
    <section class="dashboardSec">
      <div class="dashboardLeft">
          <div class="logoArea">
            <img src="../assets/img/dashboard/logo_wit.png" alt="logo" />
          </div>
          <div class="dashboardLeftBottom">
            <div class="settingArea">
            <img src="../assets/img/dashboard/settings.png">
            <p>Instellingen</p>
          </div>
          <div class="profileArea">
            <img src="../assets/img/dashboard/profile.jpg">
            <p>Profiel</p>
          </div>
          </div>
          
      </div>

      <div class="dashboardRight">
        <div class="dashboardRightMain">
          <div class="dashboardRightMainTop">
            <h1>Overzicht</h1>
            <a href="https://google.com" target="_blank">Nieuwe Content</a>
          </div>

          <div class="dashboardRightContent">
            <div class="row row-top">
          <div class="column column-name">Name</div>
          <div class="column column-date">Date</div>
          <div class="column column-actions">Actions</div>
        </div>
        <div class="row">
          <div class="column column-name">test</div>
          <div class="column column-date">03-11-2022</div>
          <div class="column column-actions">
            <a><img src="../assets/img/dashboard/delete.svg"></a>
            <a><img src="../assets/img/dashboard/edit.svg"></a>
          </div>
        </div>

          </div>
        </div>
      </div>
      
    </section>
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
.dashboardSec {
    width: 100%;
    height: 100vh;
    font-family: elza , sans-serif; 
}

/* Left side of the dashboard */
.dashboardLeft {
    width: 20%;
    height: 100%;
    float: left;
    position: relative;
    background-color: #EC7710;
}

.dashboardLeftBottom {
    position: absolute;
    bottom: 0;
    width: 100%;
}

.logoArea img{
    width: 100%;
    padding:30px;
}

.settingArea, .profileArea {
    display: flex;
    align-items: center;
    color: #fff;
    margin-bottom: 5%;
    /* justify-content: center; */
}

.settingArea img{
    width: 15%;
    filter: invert(1);
    margin: 0 10px;
}

.profileArea img{
    width: 15%;
    border-radius: 50%;
    margin: 0 10px;

}

/* Right side of the dashboard */
.dashboardRight {
    width: 80%;
    height: 100%;
    background-color: #fff;
    float: left;
    position: relative;
}

.dashboardRightMain {
    width: 100%;
    height: 100%;
    padding: 5%;
}

.dashboardRightMainTop {
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.dashboardRightMainTop h1 {
    font-size: 2.5rem;
    font-weight: 700;
    color: #EC7710;
}

.dashboardRightMainTop a {
    font-size: 1.5rem;
    font-weight: 700;
    color: #EC7710;
    text-decoration: none;
    display: flex;
    align-items: center;
}
.dashboardRightMainTop a::before{
    background: url("../assets/img/dashboard/plus-orange.svg") no-repeat;
    content: "";
    display: block;
    width: 20px;
    height: 20px;
    margin-right: 5px;
  }

  .dashboardRightContent{
    margin-top: 30px;
  }
  .dashboardRightContent .row {
    display: flex;
    align-items: center;
    padding: 10px 0;
}

.dashboardRightContent .row-top{
  border-bottom: 1px solid #ccc;
}

.dashboardRightContent .column {
  flex: 1;
  padding: 0 10px;
}

.dashboardRightContent .column-name {
  font-weight: bold;
}

.dashboardRightContent .column-actions a {
  margin-right: 5px;
}

.dashboardRightContent .column-actions a img {
  width: 20px;
  height: 20px;
  margin-right: 5px;
}

  
.containerDashboard {
    position: absolute;
    margin-top: 20px;
}
</style>
