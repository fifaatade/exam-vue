<template>
    <div class="page">
        <div class="container">
            <h1>Veuillez consulter vos mail pour récupérer le code de validation:</h1>
            <form @submit.prevent="validate">
                <div class="form-content">
                    <label for="email">Code:</label>
                    <input type="number" v-model="codeOdt.code">
                </div>
                <div class="form-content">
                    <button type="submit" >Valider l'inscription <Loader/> </button>
                </div>
                <div class="connexion-link">
                    <RouterLink to ="Connexion">I have account</RouterLink>
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
import Loader from '@/components/icons/Loader.vue';

const { validate } = useUserStore()
const { codeOdt, codeData } = storeToRefs(useUserStore())

onMounted(() => {
    validate
})

</script>

<style scoped>
.container{
    width: 80%;
    margin: 0 auto;
    padding: 5px 8px;
}
h1{
    color: white;
    text-align: center;
    margin: 30px 0;
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