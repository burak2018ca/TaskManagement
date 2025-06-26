import axios from "axios";
import { data } from "react-router-dom";

const API_URL = '/api/goals/'


// Create New Goal
const createGoal = async(goalData, token) =>{
    const config = {
        headers: {
            Authorization: `Bearer ${token}`
        }
    }
    const response = await axios.post(API_URL, goalData, config)
    return response.data
}


// Get Goals
const getGoals = async(token) =>{
    const config = {
        headers: {
            Authorization: `Bearer ${token}`
        }
    }
    const response = await axios.post(API_URL, config)
    return response.data
}

const goalService = {
    createGoal,
    getGoals
}

export default goalService