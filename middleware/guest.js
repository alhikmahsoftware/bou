
export default defineNuxtRouteMiddleware((to, from) => {
    const TokenStore = useTokenStore();
    if (TokenStore.getStatus) {
      return navigateTo('/dashboard')
    }
  })
  
