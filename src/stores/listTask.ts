import {defineStore} from "pinia";
import { ref } from "vue";
import { supabase } from "@/lib/supabase";
import type { ListTask } from "@/types/listTask";
export const useListTaskStore = defineStore("listTask",()=>{
    const listTasks = ref<ListTask[]>([]);

    async function initialiseListTask() {
        const {data,error} = await supabase.from("TaskList").select("*");
        if (data){
            listTasks.value = data;
        }
    }
    async function filterTask() {
        const {data,error} = await supabase.from("TaskList").select("*").eq("status",true);
        if (data){
            listTasks.value = data;
        }
    }

    async function addListTask(listTask:ListTask) {
        const{data, error} = await supabase.from("TaskList").insert(listTask).select("*");
        if(data){
            listTasks.value.push(data[0]);
        }
    }

    return{listTasks, initialiseListTask,filterTask,addListTask};
    
})

