import React from 'react'
import SidebarOpt from './SidebarOpt'
import * as hiIcons from 'react-icons/hi'

const SidebarMain = () => {
  return (
    <>
        <aside className='sidebar'>
            <div className='sidebar_content'>
                <SidebarOpt 
                    path={'/'}
                    icon={<hiIcons.HiOutlineHome className='me-2' />}
                    title="Home"
                />
            </div>
        </aside>
    </>
  )
}

export default SidebarMain