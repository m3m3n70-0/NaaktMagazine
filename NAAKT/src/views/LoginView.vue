<template>
    <div class="loginContainer">
        <div id="login">
            <h1>Login</h1>
            <input class="password" type="password" name="password" v-model="input.password" placeholder="Wachtwoord" />
            <button class="login-btn" type="button" v-on:click="fetchData">Login</button>
        </div>
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
.loginContainer{
    width: 100%;
    height: 100vh;
    background: url(../assets/img/login/login-bg.jpg);
    background-size: cover;
    background-position: center;
    display: flex;
    justify-content: center;
    align-items: center;
}

#login{
    display: flex;
    flex-direction: column;
}

#login h1{
    font-family: 'elza' , sans-serif;
    text-align: center;
    color: #fff;
    font-size: 50px;
    margin-bottom: 20px;
}

#login .password{
    width: 300px;
    height: 40px;
    border: none;
    border-radius: 5px;
    padding: 0 10px;
    margin-bottom: 20px;
}

#login .login-btn{
    width: 300px;
    height: 40px;
    border: none;
    border-radius: 5px;
    background-color: #EC7710;
    color: #fff;
    font-family: 'elza' , sans-serif;
    font-size: 20px;
    cursor: pointer;
}
</style>