import axios from 'axios';

const API_URL = '/api/Uw5CrX';

export const fetchQuizData = async () => {
    try{
        const response = await axios.get(API_URL);
        return response.data;
    } catch (err){
        console.error('Error fetching quiz data: ', err);
        throw err;
    }
}