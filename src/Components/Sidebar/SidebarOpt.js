import React from 'react'
import { Link } from 'react-router-dom'

const SidebarOpt = ({path, icon, title}) => {
  return (
    <>
        <div className='sidebar_opt_link'>
            <Link to={path}>
                { icon } { title }
            </Link>
        </div>
    </>
  )
}

export default SidebarOpt