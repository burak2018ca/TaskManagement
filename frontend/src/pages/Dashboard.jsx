import { useEffect } from "react"
import {useNavigate} from 'react-router-dom'
import {useSelector, useDispatch} from 'react-redux'
import GoalForm from "../components/GoalForm"
import Spinner from "../components/Spinner"

const Dashboard = () => {
  const navigate = useNavigate()
  const {user} = useSelector((state) => state.auth)
  const dispatch

  useEffect(()=> {
    if(!user){
      navigate('/login')
    }
  }, [user, navigate])



  return (
    <>
      <section className="heading">
        <h1> Welcome {user && user.name}</h1>
        <p>Goals Dashboard</p>
      </section>
      <GoalForm/>
    </>
  )
}

export default Dashboard