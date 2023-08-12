import {defineStore} from "pinia";
import { ref } from "vue";
import { supabase } from "@/lib/supabase";
import type { Inscription } from "@/types/inscriptions";
export const useUserStore=defineStore("user",()=>{
    const user =ref()
    const users = ref<Inscription[]>([]);

    async function initialise() {
        const {data,error} = await supabase.from("inscrition").select("id,firstName,lastName,email,password");
        if (data){
            users.value=data;
        }
        console.log(data);
    }
    async function addUser(user:Inscription) {
        const{data, error} = await supabase.from("inscriptions").insert(user).select("id,firstName,lastName,email,password");
        if(data){
            users.value.push(data[0]);
        }
    }

    async function initialiseUser(){
        const{data}= await supabase.auth.getSession()
        if(data){
            user.value=data.session?.user
        }
    }

    /* return{users, initialise,addUser,user}; */

})



