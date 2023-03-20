export default defineNuxtRouteMiddleware((to, from) => {
  const isUserLoggedIn = false
  if (!isUserLoggedIn)
    // abord navigation and display erro page with message
    // return abortNavigation('Error, you\'re not...')
    return navigateTo({ path: 'login' })

})
