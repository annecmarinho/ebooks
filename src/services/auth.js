export const TOKEN_KEY ="@ebooks-Token"; 
export const USER_KEY ="@ebooks-User";
export const isAuthenticated =() => sessionStorage.getItem(TOKEN_KEY) !== null; 
export const getToken = () => sessionStorage.getItem(TOKEN_KEY); 
export const login = (token, user) => { 
    sessionStorage.setItem(TOKEN_KEY,token); 
    sessionStorage.setItem(USER_KEY,user); 
}; 
 
export const logout = () =>{ 
    sessionStorage.removeItem(TOKEN_KEY); 
    sessionStorage.removeItem(USER_KEY); 
};
export const userId = sessionStorage.getItem(USER_KEY);