<template>
  <section class="dashboardSec">
    <!-- Left side of the dashboard -->
    <div class="dashboardLeft">
      <div class="logoArea">
        <img src="../assets/img/dashboard/logo_wit.png" alt="logo" />
      </div>
      <div class="dashboardLeftBottom">
        <div class="settingArea">
          <img src="../assets/img/dashboard/settings.png" />
          <p>Instellingen</p>
        </div>
        <div class="profileArea">
          <img src="../assets/img/dashboard/profile.jpg" />
          <p>Profiel</p>
        </div>
      </div>
    </div>

    <!-- Right side of the dashboard -->
    <div class="dashboardRight">
      <div class="dashboardRightMain">
        <div class="dashboardRightMainTop">
          <h1>Overzicht</h1>
          <a href="https://google.com" target="_blank">Nieuwe Content</a>
        </div>

        <div class="dashboardRightContent">
          <template v-if="loading">
            <p>Loading...</p>
          </template>
          <template v-else>
            <table class="table">
            <thead>
              <tr>
                <th class="column column-name">Name</th>
                <th class="column column-date">Date</th>
                <th class="column column-actions">Actions</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="item in data">
                <td class="column column-name">{{ item.name }}</td>
                <td class="column column-date">{{ item.date }}</td>
                <td class="column column-actions">
                  <a><img src="../assets/img/dashboard/delete.svg"></a>
                  <a><img src="../assets/img/dashboard/edit.svg"></a>
                </td>
              </tr>
            </tbody>
          </table>
            <template v-if="error">
              <p>Error fetching data: {{ error }}</p>
            </template>
          </template>
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
      loading: true,
      error: null,
    };
  },
  methods: {
    logUit() {
      this.$router.push('/');
      this.changeLoginStatus(false);
    },
    fetchData() {
      axios
        .get('https://vaporwave-it.nl/naakt/db.php') // Update the URL to your PHP file
        .then(response => {
          this.data = response.data;
          this.loading = false;
        })
        .catch(error => {
          console.error('Error fetching data:', error);
          this.error = error.message;
          this.loading = false;
        });
    },
    changeLoginStatus(login) {
      this.$store.commit('changeLoginStatus', login);
      console.log('Login status changed');
    },
  },
  created() {
    this.fetchData();
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
  
  .dashboardRightContent .table {
  width: 100%;
  border-collapse: collapse;
  margin-top: 30px;
}

.dashboardRightContent .table th,
.dashboardRightContent .table td {
  padding: 10px 0;
  text-align: left;
  vertical-align: middle;
}

.dashboardRightContent .table th {
  font-weight: bold;
  border-bottom: 1px solid #ccc;
}

.dashboardRightContent .table td.column-actions a {
  margin-right: 5px;
}

.dashboardRightContent .table td.column-actions a img {
  width: 20px;
  height: 20px;
  margin-right: 5px;
}

  
.containerDashboard {
    position: absolute;
    margin-top: 20px;
}
</style>
