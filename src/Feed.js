import React, {useEffect, useState} from 'react'
import './Feed.css'
import MessageSender from './MessageSender'
import Post from './Post'
import db from './firebase'
import { useSelector } from 'react-redux'
import { selectUser } from './features/user/userSlice'

function Feed() {
  const [posts, setPosts]= useState([]);
  const user= useSelector(selectUser);

  useEffect(()=>{
    db.collection('posts').orderBy('timeStamp','desc').onSnapshot((snapshot) => setPosts(snapshot.docs.map((doc)=>({
      id: doc.id,
      data: doc.data()
    }))))
  },[])

  return (
    <div className='feed'>
        <MessageSender/>
        <hr></hr>
        {/* <Post name='Suryanka Hero' description='Don' message='He is a hero' phototurl='https://media.licdn.com/dms/image/C4D03AQGGB6CT6NqFzQ/profile-displayphoto-shrink_100_100/0/1618725077016?e=1694649600&v=beta&t=VJcH_8FkKPKmupCI-iG1ei9v6acN-y-VBuWpXuCcA6E'/> */}

        {posts.map((post) => (
          <Post 
          key={post.id}
          name={post.data.name}
          description={post.data.description} 
          message={post.data.message}
          photoURL={post.data.photoURL}
          image={post.data.image}
          />
        ))}
        
        <hr></hr>
    </div>
  )
}

export default Feed