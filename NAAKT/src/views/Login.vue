<template>
    <div id="login">
        <h1>Login</h1>
        <input type="password" name="password" v-model="input.key" placeholder="Password" />
        <button type="button" v-on:click="login()">Login</button>
    </div>
</template>

<script>
    export default {
        name: 'Login',
        data() {
            return {
                input: {
                    key: "password"
                }
            }
        },
        methods: {
            login() {
                if(key == "password") {
                    console.log("Login successful");
                } else {
                    console.log("A username and password must be present");
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
