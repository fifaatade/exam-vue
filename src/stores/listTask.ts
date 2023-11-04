import type { ListTask } from "@/types/listTask";
import { defineStore } from "pinia";
import { computed, ref } from 'vue'
import http from "@/lib/http"
import {useAxios} from "@/composable/useAxios"
import { clientHttp } from "@/composable/useAxios";
import router from '@/router';
import { required, email, sameAs } from "@vuelidate/validators";
import useVuelidate from "@vuelidate/core";
import axios from 'axios'
import { useToast } from 'vue-toast-notification';

export const useListTaskStore = defineStore("listTask",()=>{

/*     const listTasksRequired = computed(() => {
        return {
            task: {
                required
            }
        }
    })
    const vueTaskData = useVuelidate(listTasksRequired, tasklist)

    const token = localStorage.getItem('token');
 */
    /* async function initialiseListTask() {
        const response = await http.get('/todo/tasklist', {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        
        listTasks.value = response.data;
      }
       */
      const tasklist = ref(
          {        
            task:'',
            status:'',
            date:''
          }      
      ); 
      async function initialiseListTask(){
          const response = await useAxios().get('/todo/tasklist');
          tasklist.value = response.data; 
      }
      initialiseListTask();
      
      const task = ref('')
      async function addListTask() {
        try {
            const data = {
                task: task.value
            };
            await useAxios().post('/todo/sendtask', data);
            console.log(data);
          }
          catch (error) {
              console.log("Erreur d'envoi : " + error);
          }
      };
/*       async function addListTask(listTask: ListTask) {
        const response = await http.post('/todo/sendtask', listTask, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        listTasks.value.push(response.data);
      } */


      async function filterTask() {
        const response = await http.get('/todo/completed', {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        listTasks.value = response.data;
      }
      


      function updateDate(element: ListTask) {
        http.put(`/todo/${element.id}`, {
          date: element.date,
        });
      }

      function updateStatus(element: ListTask) {
        http.put(`/todo/${element.id}`, {
          status: element.status,
        });
      }
      
      

    return{tasklist,task, initialiseListTask,filterTask,addListTask,updateDate,updateStatus};
    
})





