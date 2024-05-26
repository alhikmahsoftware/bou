import * as constants from '@/utils/configs/constants';
export const useAuthStore = defineStore('auth', {
    state: () => ({ 
      token: null,
      user_name: null,
      email: null,
    }),
    getters: {
      getToken: (state) => state.token,
      getUserName: (state) => state.user_name,
      getUserEmail: (state) => state.email,
    },
    actions: {
          async login (formData) {
            const apiUrl = constants.apiUrl; 
            const token = useTokenStore();
            try{
        
              const data = await $fetch(apiUrl+"/login/v1/",{
                method:'POST',
                headers: {
                  'Content-Type': 'application/json',
                },
                body:{ ...formData},
              });

              console.log(data)
              
              token.setToken(data.token,data.user_name,data.email)
              this.token =  data.token;
              this.user_name =  data.user_name;
              this.email =  data.email;
              return data;
            }catch(error){
              console.warn('error',error)
              throw error;
            }
            
          },

          async logout () {
            try{
              const TokenStore = useTokenStore();
              TokenStore.removeToken();
              return true;
            }catch(error){
              return error.data;
            }
          }
    },
  })