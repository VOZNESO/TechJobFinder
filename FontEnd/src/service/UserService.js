import axios from 'axios';

class UserService {
    static BaseURL = "http://localhost:8080"

    static async login(email, password){
        try{
            const response = await axios.post(`${UserService.BaseURL}/auth/login`, {email, password})
            return response.data;
        }catch(err){
            throw err;
        }
    }

    static async register(userData, token){
        try{
            const response = await axios.post(`${UserService.BaseURL}/auth/register`, userData,{
                headers: {Authorization: `Bearer ${token}`}
            })
            return response.data;
        }catch(err){
            throw err;
        }
    }

    static async getAllUser( token){
        try{
            const response = await axios.get(`${UserService.BaseURL}/admin/get-all-users`,{
                headers: {Authorization: `Bearer ${token}`}
            })
            return response.data;
        }catch(err){
            throw err;
        }
    }
    static async getYourProfile( token){
        try{
            const response = await axios.get(`${UserService.BaseURL}/adminuser/get-profile`,{
                headers: {Authorization: `Bearer ${token}`}
            })
            return response.data;
        }catch(err){
            throw err;
        }
    }

    static async getUserById(userId, token){
        try{
            const response = await axios.get(`${UserService.BaseURL}/admin/get-user/${userId}`,{
                headers: {Authorization: `Bearer ${token}`}
            })
            return response.data;
        }catch(err){
            throw err;
        }
    }

    static async updateUser(userId, userData, token){
        try{
            const response = await axios.put(`${UserService.BaseURL}/admin/update/${userId}`, userData,{
                headers: {Authorization: `Bearer ${token}`}
            })
            return response.data;
        }catch(err){
            throw err;
        }
    } 

    static async deleteUser(userId, token){
        try{
            const response = await axios.delete(`${UserService.BaseURL}/admin/delete/${userId}`,{
                headers: {Authorization: `Bearer ${token}`}
            })
            return response.data;
        }catch(err){
            throw err;
        }
    }

    /**AUTHENTICATION CHECKER */
    static logout(){
        localStorage.removeItem('token')
        localStorage.removeItem('role')
    }

    static isAuthenticated(){
        const token = localStorage.getItem('token')
        return !!token
    }

    static isAdmin(){
        const role = localStorage.getItem('role')
        return role === 'ADMIN'
    }

    static isUser(){
        const role = localStorage.getItem('role')
        return role === 'USER'
    }

    static adminOnly(){
        return this.isAuthenticated() && this.isAdmin();
    }

}

export default UserService;