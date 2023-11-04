import { defineStore } from "pinia";
import { computed, ref } from 'vue'
import http from "@/lib/http"
import router from '@/router';
import { required, email, sameAs } from "@vuelidate/validators";
import useVuelidate from "@vuelidate/core";
import { useToast } from 'vue-toast-notification';

export const useUserStore = defineStore('users', () => {
    const $toast = useToast();

    ////////////Registration    
    const userData = ref({
        firstName: '',
        lastName: '',
        email: '',
        password: ''
    })

    const userDataRequired = computed(() => {
        return {
            firstName: {
                required
            },
            lastName: {
                required
            },
            email: {
                required,
                email
            },
            password: {
                required
            }
        }
    })

    const vueUserData = useVuelidate(userDataRequired, userData)

    const registration = async () => {

        const vueUserDataValid = await vueUserData.value.$validate()

        console.log(vueUserDataValid);

        if (vueUserDataValid) {

            http.post('/authentification/signup', userData.value)
                .then((response) => {
                    $toast.success('Inscription effectuée avec succès !',)
                    router.replace('/code/'+ userData.value.email);
                })
                .catch(error => {
                    $toast.error(error.message)
                })

        } else {

            $toast.error('Echec ! Données Indisponibles')
        }
    }

    /////////////Connection   
    const data = ref({
        email: '',
        password: '',
        code:''
    })

    const dataRequired = computed(() => {
        return {
            email: {
                required,
                email
            },
            password: {
                required
            }
        }
    })

    const vueConnectData = useVuelidate(dataRequired, data)

    const connection = async () => {
        const vueConnectValid = await vueConnectData.value.$validate()
        console.log(vueConnectValid)

        if (vueConnectValid) {

            http.post('/authentification/signin', data.value)
            .then((response) => {

                const accessToken = response.data;
                console.log('accessToken', accessToken);
                http.defaults.headers.common['Authorization'] = `Bearer ${accessToken}`;
                localStorage.setItem('tokenUser', accessToken);
                router.replace('/todo');
            })
            .catch(error => {
                // La réponse contient un code d'état HTTP 400, ce qui signifie que les données de connexion sont incorrectes.   
                if (error.response.status === 400) {
                    // Extrait le message d'erreur de la réponse.
                    const errorResponse = error.response.data
                    $toast.error(errorResponse)

                } else {
                    $toast.error(error.message)
                }
            })

        } else {
            $toast.error('Données Indisponibles');
           
        }
    }

    ///validation avec le code

    const codeOdt = ref({
        code:''
    })

    const codeRequired = computed(() => {
        return {
            code: {
                required
            }
        }
    })

    const codeData = useVuelidate(codeRequired, codeOdt)

    const validate = async () => {
        const vueCodeValid = await codeData.value.$validate()
        console.log(vueCodeValid)

        if (vueCodeValid) {

            http.post('/authentification/validate', codeOdt.value)
            .then((response) => {

                const accessToken = response.data;
                console.log('accessToken', accessToken);
                http.defaults.headers.common['Authorization'] = `Bearer ${accessToken}`;
                localStorage.setItem('tokenUser', accessToken);
                router.replace('/todo');
            })
            .catch(error => {
                // La réponse contient un code d'état HTTP 400, ce qui signifie que les données de connexion sont incorrectes.   
                if (error.response.status === 400) {
                    // Extrait le message d'erreur de la réponse.
                    const errorResponse = error.response.data
                    $toast.error(errorResponse)

                } else {
                    $toast.error(error.message)
                }
            })

            } else {
            $toast.error('code invalide');
           
        }
    }

    return { connection, data, vueConnectData, registration, userData, vueUserData, validate, codeOdt ,codeData }
})