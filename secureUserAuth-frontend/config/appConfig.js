export const appConfig = {
    refreshTokenEP: String(import.meta.env.VITE_REFRESH_TOKEN_ENDPOINT),
    getUserEP: String(import.meta.env.VITE_GET_USER_ENDPOINT),
    loginEP: String(import.meta.env.VITE_LOGIN_ENDPOINT),
    logOutEP: String(import.meta.env.VITE_LOGOUT_ENDPOINT),
    registerEP: String(import.meta.env.VITE_REGISTER_ENDPOINT),
}