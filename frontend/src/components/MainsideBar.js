import React from 'react'
import Sidebar, { SidebarItem } from './Sidebar'
import { BarChart3, BookOpenIcon, HomeIcon, FormInputIcon, UserCheck2Icon, LogOut } from 'lucide-react'
import { useNavigate } from 'react-router-dom'

function MainsideBar() {
  const navigate = useNavigate()
  return (
   <>
   <Sidebar>
      <SidebarItem  icon={<HomeIcon onClick={()=>navigate('/')} size ={20}/>} text = "Home" />
      <SidebarItem icon={<BookOpenIcon onClick={()=>navigate('/input')} size={20}/>} text = "My courses" />
      
      <SidebarItem icon={<FormInputIcon  size={20}/>} text = "Form" />
      <SidebarItem icon={<UserCheck2Icon size={20}/>} text = "Profile" />
      <SidebarItem  icon={<LogOut onClick={()=>navigate('/reg')}   size ={20}/>} text= 'log out' />
  </Sidebar>
   
   



  

</>

  )
}

export default MainsideBar
