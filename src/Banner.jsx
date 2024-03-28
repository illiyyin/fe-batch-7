import { Outlet } from 'react-router-dom'

const Banner = () => {
  return (
    <div >
      <p>Thank you for visiting our website!</p>
      <Outlet/>
    </div>
  )
}
export default Banner