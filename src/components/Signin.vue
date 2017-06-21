<template>
    <div class="form-inline">
        <h3>Sign In</h3>
        <br>
        <div class="form-group">
            <input type="text" placeholder="email" class="form-control" v-model="email">
            <br>
            <input type="password" placeholder="password" class="form-control" v-model="password">
            <br>
            <button class="btn btn-primary" @click="signIn">Sign In</button>
        </div>
        <br>
        <p>{{ error.message }}</p>

    </div>
</template>
<script>
    import { firebaseApp } from '../firebaseApp'
    export default {
      data() {
        return {
          email: '',
          password: '',
          error: {
            message: ''
          }
        }
      },
      methods: {
        signIn() {
          firebaseApp.auth().signInWithEmailAndPassword(this.email, this.password)
            .catch(error => {
              this.error = error
          })
        }
      }
    }
</script>