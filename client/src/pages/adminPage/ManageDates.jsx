import React from 'react'
import '../../styles/manageDatesContainer.scss'
import { Link } from 'react-router-dom'

const ManageDates = () => {
  return (
    <section className='manageDates'>
      <h1>Manages Dates</h1>
      <div className="btnContainer">
        <Link to="/admin/manage-dates/booktype-one">Full Day Admission</Link>
        <Link to="/admin/manage-dates/booktype-two">Quack Express Only</Link>
        <Link to="/admin/manage-dates/booktype-three">Night Park Admission</Link>
        <Link to="/admin/manage-dates/booktype-four">Combo : Admission + Quack Exppress</Link>
      </div>
    </section>
  )
}

export default ManageDates