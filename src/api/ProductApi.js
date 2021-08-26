import { axiosClient } from './axiosClient';
import { isAuthenticate } from '../components/auth';
const {user,token}=isAuthenticate()
const productsApi = {
    getAll(){
        const url = `/product`;
        return axiosClient.get(url);
    },
    get(id){
      
        const url = `/product/${id}`;
        return axiosClient.get(url);
    },
    
    getAllNews(){
        const url = `/news`;
        return axiosClient.get(url);
    },
    add(product){
        const url=`product/${user._id}/create`;
        return axiosClient.post(url,product,{
            headers:{
                Authorization: `Bearer ${token}`
            }
        });
    },
    remove(id){
      
        const url=`product/${user._id}/${id}`;
        return axiosClient.delete(url,{
            headers:{
                Authorization: `Bearer ${token}`
            }
        });
    },
    update(id,data){
        const url=`product/${user._id}/${id}`;
        return axiosClient.put(url,data,{
            headers:{
                Authorization: `Bearer ${token}`
            }
        });
    },
    search(inp) {
        const url = `/product?q=${inp}`;
        return axiosClient.get(url);
      },
    getAccount(username,password){
        const url = `/account?username=${username}&password=${password}`;
        return axiosClient.get(url);
    }
}
export default productsApi;