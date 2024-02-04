import React from 'react'
import Card from '../components/card/Card'
import NabBar from '../components/navbar/NabBar'


const AdminDashboard = () => {
  return (
    <div className='flex flex-col gap-10 '>
      <NabBar />
      <Card />
    </div>
  )
}

export default AdminDashboard
