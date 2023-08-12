<template>
    <div class="page">
        <div class="container">
            <form  @submit.prevent="createUser">
                <div class="form-content">
                    <label for="firstName">firstName:</label>
                    <input type="text" v-model="userData.firstName" placeholder="firstname">
                </div>
                <div class="form-content">
                    <label for="lastName">lastName:</label>
                    <input type="text" v-model="userData.lastName" placeholder="lastname">
                </div>
                <div class="form-content">
                    <label for="email">Email:</label>
                    <input type="email" v-model="userData.email" placeholder="fifa@gmail.com">
                </div>
                <div class="form-content">            
                    <label for="password">password:</label>
                    <input type="password" v-model="userData.password">
                </div>
                <div class="form-content">
                    <button type="submit">S'inscrire</button>
                </div>
                <div class="connexion-link">
                    <RouterLink to ="/connexion">I have account</RouterLink>
                </div>
                <RouterView/>
            </form>
        </div>
    </div>
</template>
<script lang="ts" setup>
import { ref } from 'vue';
import { useUserStore } from '@/stores/users';
import { supabase } from '@/lib/supabase';
import router from '@/router';
/* const {addUser} = useUserStore() */
const userData=ref({
    firstName:"",
    lastName:"",
    email:"",
    password:"",
})

const createUser = async()=>{
    const {data, error} = await supabase.auth.signUp({
        email: userData.value.email,
        password: userData.value.password,
})
if(data){
    router.replace('/connexion')
}

}
</script>
<style scoped>
.container{
    width: 80%;
    margin: 0 auto;
    padding: 5px 8px;
}
form{
    box-shadow: 7px 7px 7px 7px  white;
    width: 35%;
    margin: 20px auto;
    background-color: white;
}
.form-content{
    display: flex;
    flex-direction: column;
    padding: 25px 0;
    width: 60%;
    margin: 0 auto;
}
input{
    height: 35px;
    width: 100%;
    border-top: none;
    border-right: none;
    border-left: none;
    padding-left: 15px;
}
button{
    height: 35px;
    border: none;
    width: 150px;
    border-radius: 3px;
    color: white;
    background-color: rgb(56, 54, 54) ;
    cursor: pointer;
}
button:hover{
    color: white;
    background-color:  rgb(13, 24, 2);
}
input:focus,button:focus{
    outline: none;
}
.connexion-link{
    display: flex;
    justify-content: flex-end;
}
a{
    padding: 10px 0 ;
    text-decoration: none;
    color: rgb(54, 53, 53);
    cursor: pointer;
}
a:hover{
    text-decoration: underline;
    color: rgb(13, 24, 2);
}


</style>