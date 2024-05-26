
export default defineNuxtRouteMiddleware((to, from) => {
    const TokenStore = useTokenStore();
    console.log(TokenStore.getUser)
    if (to.path.startsWith('/dashboard')) {
      console.log(to.path.startsWith('/dashboard'));
      if (!TokenStore.getStatus) {
        return navigateTo('/login')
      }
    }
  })