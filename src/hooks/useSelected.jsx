import { useQuery } from '@tanstack/react-query'
import { useContext } from 'react';
import { AuthContext } from '../providers/AuthProvider';
import useAxiosSecure from './useAxiosSecure';

const useSelected = () => {
    const {user} = useContext(AuthContext);
    const token = localStorage.getItem('access-token');
    const [axiosSecure] = useAxiosSecure();
    const { refetch, data: select = []} = useQuery({
        queryKey: ['classes', user?.email],
        // queryFn: async () =>{
        //     const res = await fetch(`http://localhost:5000/selected?email=${user?.email}`,{headers:{
        //         authorization: `bearer ${token}`
        //     }})
        //     return res.json();
        // },
        queryFn: async () => {
            const res = await axiosSecure(`/selected?email=${user?.email}`)
            return res.data;
        }
      })
      return [select , refetch];
};

export default useSelected;