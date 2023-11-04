<template>
    <div class="page">
        <div class="container">
            <form @submit.prevent="connection">
                <div class="form-content">
                    <label for="email">Email:</label>
                    <input type="email" v-model="data.email"  placeholder="fifa@gmail.com">
                </div>
                <div class="form-content">            
                    <label for="password">password:</label>
                    <input type="password" v-model="data.password" >
                </div>
                <div class="form-content">
                    <button type="submit" >Se connecter <Loader/> </button>
                </div>
                <div class="connexion-link">
                    <RouterLink to ="Inscription">I don't have account</RouterLink>
                </div>
            </form>
        </div>
    </div>
</template>

<script lang="ts" setup>
import { onMounted } from 'vue';
import { useUserStore } from '@/stores/users';
import { storeToRefs } from 'pinia';
import router from '@/router';
import Loader from './Loader.vue';

const { connection } = useUserStore()
const { data, vueConnectData } = storeToRefs(useUserStore())

onMounted(() => {
    connection
})

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
    display: flex;
    justify-content: space-evenly;
    align-items: center;
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