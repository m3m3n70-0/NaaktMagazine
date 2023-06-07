<template>
    <div id="login">
        <h1>Login</h1>
        <input type="password" name="password" v-model="input.password" placeholder="Password" />
        <button type="button" v-on:click="fetchData">Login</button>
    </div>
</template>

<script>
import axios from 'axios';

export default {
    data() {
        return {
            input: {
                password: ''
            }
        };
    },
    methods: {
  fetchData() {
    axios
        .get('https://i507258.hera.fhict.nl/src/database/db.php')
        .then(response => {
            this.data = response.data;
            this.data.forEach(element => {
            this.login(element.password); // Update method call to use 'this.login'
            });
        })
        .catch(error => {
            console.error('Error fetching data:', error);
        });
    },
    login(password) { // Pass password as a parameter
        const getPassword = password;
        if (password === getPassword) { // Update to use the 'password' parameter
        this.$router.push('/dashboard');
        this.changeLoginStatus(true); // Update method call to use 'this.changeLoginStatus'
        } else {
        console.log('A password must be provided');
        }
    },
  changeLoginStatus(login) { // Correct the method name to use lowercase
    this.$store.commit('changeLoginStatus', login);
    console.log('Login status changed');
  }
}

}
</script>

<style scoped>
#login {
    width: 500px;
    border: 1px solid #CCCCCC;
    background-color: #FFFFFF;
    margin: auto;
    margin-top: 200px;
    padding: 20px;
}
</style>
