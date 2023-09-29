import React, { useState } from "react";
import logo from "../../assets/logo.png";
import { IoReorderThreeOutline } from "react-icons/io5";
import { menuIcons } from "./SidebarConfig";
import { useNavigate } from "react-router-dom";

const Sidebar = () => {
  const [activeTab, setActiveTab] = useState('')
  const navigate = useNavigate()

  const handleTabClick = (title) => {
    setActiveTab(title)
    if(title === 'Profile')
      navigate('/profile')
    else if(title === 'Home')
      navigate('/')
  }

  return (
    <div className="sticky top-0 h-[100vh] px-4">
      <div className="flex flex-col justify-between h-full">
        <div>
          <div className="pt-8">
            <img src={logo} alt="logo" className="w-40" />
          </div>
          <div className="mt-10">
            {menuIcons.map((item) => (
              <div
                key={item.title}
                onClick={() => handleTabClick(item.title)}
                className="flex items-center mb-2 cursor-pointer text-lg
                  hover:bg-slate-200 px-3 py-2 rounded-lg"
              >
                {activeTab === item.title ? item.activeIcon : item.icon}
                <p className={`${activeTab === item.title ? 'font-bold' : 'font-normal'}`}>
                  {item.title}
                </p>
              </div>
            ))}
          </div>
        </div>
        <div className="flex items-center cursor-pointer mb-8 hover:bg-slate-200 px-3 py-2 rounded-lg">
          <IoReorderThreeOutline className="text-2xl"/>
          <p className="ml-5 text-lg">More</p>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
