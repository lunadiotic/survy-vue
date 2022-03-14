<script setup>
import { useAuth } from './store/auth';

const store = useAuth();

const handleSubmit = () => {
  // store.register({
  //   name: 'Akito',
  //   email: 'akito@mail.com',
  //   password: 'password',
  //   password_confirmation: 'password',
  // });
  // store.login({
  //   email: 'akito@mail.com',
  //   password: 'password'
  // });
  // store.getUser()
  // store.logout()
}
</script>

<template>
	<img alt="Vue logo" src="./assets/logo.png" />
  <button @click="handleSubmit">Authentication</button>
  {{ store.user }}
</template>

<style>
#app {
	font-family: Avenir, Helvetica, Arial, sans-serif;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
	text-align: center;
	color: #2c3e50;
	margin-top: 60px;
}
</style>
