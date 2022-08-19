<svelte:head>
  <title>Login</title>
</svelte:head>

<h1>Login</h1>

<form on:submit|preventDefault={login}>
  <label for="email">Email</label>
  <input type="email" name="email" id="email" bind:value={email}>

  <label for="password">Password</label>
  <input type="password" name="password" id="password" bind:value={password}>

  <button type="submit">Login</button>
</form>

<a href="/auth/register">Register</a>


<script lang="ts">
  import { goto } from '$app/navigation';
  import axios from 'axios';
  const apiUrl = import.meta.env.VITE_API_URL;

  let email = ""
  let password = ""

  const login = async (e) => {
    console.log('login');

    const data = {
      email,
      password
    };


    const loginResponse = await axios.post(`${apiUrl}/auth/login`, data)

    const token = loginResponse.data.access_token;

    localStorage.setItem('token', token)

    goto( '/app');
  }
</script>
