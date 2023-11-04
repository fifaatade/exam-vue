<template>
    <div class="page">
        <div class="connexion-link">
            <RouterLink replace to="/connexion" title="connect you">signIn</RouterLink>
            <RouterLink replace to="/inscription" title="create account">singnUp</RouterLink>
        </div>
    </div>
</template>

<script lang="ts" setup>
import { useRouter } from 'vue-router';

</script>

<style scoped>
.page{
    background-color: rgb(1, 18, 22);
    height: 100vh;
    overflow-y: hidden;
}
h1{
    color: rgb(116, 75, 75);
    text-align: center;
    letter-spacing: 5px;
    padding-top: 4%;
}
.connexion-link{
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 20px;
    height: 100%;
}
a{
    padding: 10px 0 ;
    text-decoration: none;
    color: white;
    font-size: 18px;
    font-weight: bold;
    border: 1px solid white;
    padding: 5px;
    width: 100px;
    text-align: center;
}
a:hover{
    text-decoration: underline;
    color: grey;
}
button{
    cursor: pointer;
}
</style>