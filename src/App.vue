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
  <router-view></router-view>
</template>

<style>
</style>
