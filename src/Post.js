import React from 'react'
import './Post.css'
import { Avatar, Button } from '@material-ui/core'
import { Comment, Favorite, Message, RepeatRounded, Send } from '@material-ui/icons'


function Post({name, description, message, photoURL, image}) {
  console.log(photoURL);
  return (
    <div className='post'>
        <div className="post__header">
            <div className="post__headerLeft">
                <Avatar className='post__headerAvatar' src={photoURL}>
                    {/* {name[0]} */}
                </Avatar>

                <div className='post__headerInfo'>
                    <div className='post__headerInfoFirst'>
                        <h3><strong>{name}</strong></h3>
                        <h4>2nd</h4>
                    </div>
                    <h3>{description}</h3>
                    <h4>1d</h4>
                </div>

            </div>
            <Button>+ Follow</Button>
        </div>
        <div className="post__body">
            <p>{message}</p>
            {/* {image && <img src=/>} */}
            <img src={image}/>
            {/* //'https://media.licdn.com/dms/image/sync/D5610AQH2k2PiD1vZWQ/image-shrink_800/0/1688091206609/CE2-Square21jpg?e=1689908400&v=beta&t=6Dz0UL9P3Bm0oY4FLOpxYcK-yqi7THbejnCpi5A0DEM' */}
            
        </div>
        <hr></hr>
        <div className="post__footer">
            <div className="post__option">
                <Favorite/>
                <h3>Like</h3>
            </div>
            <div className="post__option">
                <Comment/>
                <h3>Comment</h3>
            </div>
            <div className="post__option">
                <RepeatRounded/>
                <h3>Repost</h3>
            </div>
            <div className="post__option post__send">
                <Send/>
                <h3>Send</h3>
            </div>
        </div>

    </div>
  )
}

export default Post