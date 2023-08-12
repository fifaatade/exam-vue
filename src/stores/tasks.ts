import {defineStore} from "pinia";
import { ref } from "vue";
import { supabase } from "@/lib/supabase";
import type { Task } from "@/types/tasks";
export const useTaskStore=defineStore("task",()=>{
    const tasks = ref<Task[]>([]);

    async function initialise() {
        const {data,error} = await supabase.from("task").select("id,description,created_at,end_at,status,id_listTask");
        if (data){
            tasks.value=data;
        }
        console.log(data);
    }
    async function addTask(task:Task) {
        const{data, error} = await supabase.from("tasks").insert(task).select("id,description,created_at,end_at,status,id_listTask");
        if(data){
            tasks.value.push(data[0]);
        }
    }
    return{tasks, initialise,addTask};
    
})