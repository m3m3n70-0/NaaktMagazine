<template>
    <div id="login">
        <h1>Login</h1>
        <input type="password" name="password" v-model="input.password" placeholder="Password" />
        <button type="button" v-on:click="login">Login</button>
    </div>
</template>

<script>
export default {
    data() {
        return {
            input: {
                password: ''
            }
        };
    },
    methods: {
        login() {
            // const getPassword = JSON.parse(localStorage.getItem('password'));
            const getPassword = "huts";
            if (this.input.password === getPassword) {
                this.$router.push('/dashboard');
                console.log('Login successful');
            } else {
                console.log('A password must be provided');
            }
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
