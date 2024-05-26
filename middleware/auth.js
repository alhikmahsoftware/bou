
export default defineNuxtRouteMiddleware((to, from) => {
    const TokenStore = useTokenStore();
    console.log(TokenStore.getUser)
    if (!TokenStore.getStatus) {
      return navigateTo('/login')
    }
  })
  
