import axios from 'axios';
import useSWR from 'swr';

export default function useSwr(url, refreshInterval = 5000) {
    axios.defaults.withCredentials = true;
    return useSWR(url, href => (
        axios.get(href, { 
            withCredentials: true 
        }).then(res => res.data).catch(res => res?.response?.data)
    ), { refreshInterval });
};