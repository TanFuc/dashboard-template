import React from 'react'
import ProfileHeader from './ProlifeHeader';
import '../styles/profile.css';
import userImage from '../assets/cho.jpg';
import { BiBook } from 'react-icons/bi';

const courses = [
    {
        title: 'HTML CSS',
        duration: '2 Houres',
        icon: <BiBook/>,
    },
    {
        title: 'JavaScript',
        duration: '2 Houres',
        icon: <BiBook/>,
    },
    {
        title: 'React.js',
        duration: '2 Houres',
        icon: <BiBook/>,
    },
]


const Profile = () => {
  return (
    <div className='profile'>
      <ProfileHeader/>

      <div className="user--profile">
        <div className="user--detail">
            <img src={userImage} alt="" />
            <h3>Tan Phuc</h3>
            <span className='professtion'>Student</span>
        </div>
        <div className="user-courses">
        {courses.map((courses, index) => (
          <div key={index} className="course">
            <div className="coures-detail">
             <div className="course-cover">{courses.icon}</div>
             <div className="course-name">
                <h5 className='title'>{courses.title}</h5>
                <span className='duration'>{courses.duration}</span>
             </div>
            </div>
            <div className="action">:</div>
          </div>
        ))}
        </div>
      </div>
    </div>
  )
}

export default Profile
