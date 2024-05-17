export const useTokenStore = defineStore('token', {
    state: () => ({ 
      token: null,
      loggedIn:false,
      user_name: null,
      email:null 
    }),
    persist: true,
    getters: {
      getToken:(state)=>state.token,
      getStatus:(state)=>state.loggedIn,
      getUserName:(state)=>state.user_name,
      getUserEmail:(state)=>state.email
    },
    actions: {
      setToken(token, user_name,email) {
        this.$state.token = token; // Use this.$state to update state properties
        this.$state.loggedIn = true;
        this.$state.user_name = user_name;
        this.$state.email = email;
      },
      removeToken() {       
        
        const auth = useAuthStore();
        auth.$reset();
        this.$reset();

        // Clear local storage
        localStorage.clear();
        
        // Iterate through the cookies and remove each one
        const cookies = document.cookie.split(';');
        cookies.forEach(cookieItem => {
          const cookieName = cookieItem.split('=')[0].trim();
          document.cookie = `${cookieName}=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;`;
        });

        return navigateTo('/');
      }
    }
  })