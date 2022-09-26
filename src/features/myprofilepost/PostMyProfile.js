import { useSelector } from "react-redux";
import { select } from "./postMySlice";
import './PostMyProfile.css';
import image from './myprofile.png' ;
import { AiFillSetting } from "@react-icons/all-files/ai/AiFillSetting";
import { IoIosArrowDown } from "@react-icons/all-files/io/IoIosArrowDown";
import { GrStatusGoodSmall } from "@react-icons/all-files/gr/GrStatusGoodSmall";

import React from 'react'

const PostMyProfile = () => {
    const post = useSelector(select)

    const btnSetting = () => {
        window.alert('settings')
      }
  

    const renderedMy = post.map(p => (
        <div key={p.id} className='profile-card'>
          <div className="card-img">
            <img src={image} alt={"profile"} />
            <GrStatusGoodSmall className='statusp-icon' />
          </div>
          <div className="card-data">
            <p className="name">{p.name}</p>
            <p className="profession">{p.profession}</p>
            <div className="status-box">
              <p className="status">{p.status}</p>
              <IoIosArrowDown className="arrow-icon" />
            </div>
          </div>
          <div className="card-button">
            <button className="btnsetting" onClick={btnSetting}><AiFillSetting className="setticon"/></button>
          </div>
            
        </div>
    ))

  return (
    <section>
        {renderedMy}
    </section>
  )
}

export default PostMyProfile