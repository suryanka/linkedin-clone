import React, { useState } from "react";
import "./MesssageSender.css";
import { Avatar } from "@material-ui/core";
import {
  Photo,
  VideoCallOutlined,
  VideoLibrarySharp,
  Event,
  ArtTrackOutlined,
} from "@material-ui/icons";
import db from "./firebase";
import firebase from "firebase/compat/app";
import { useSelector } from "react-redux";
import { selectUser } from "./features/user/userSlice";
import { getDownloadURL, getStorage , ref, uploadBytesResumable } from "firebase/storage";

function MessageSender() {
  const [input, setInput] = useState("");
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const user= useSelector(selectUser);

  const [image, setImage] = useState(null);
  const [progress, setProgress] = useState(0);
  const [urlLink, setUrlLink] = useState('');

  const handleChange = (e)=>{
    if(e?.target?.files[0]){
      setImage(e.target.files[0]);
      console.log("Image was set.");
    }
  }

  const handleUpload =()=>{

    console.log("Called handle upload");
    const storage=getStorage();
    const storageRef= ref(storage, `images/${image.name}`);
    const uploadTask= uploadBytesResumable(storageRef, image);
    
    uploadTask.on('state_changed',(snapshot)=>{
      const progress= Math.round(
        (snapshot.bytesTransferred/snapshot.totalBytes)*100
      );
      setProgress(progress);
    }, (error) =>{
      console.log(error);
      alert(error.message);
    },

    () => {
      getDownloadURL(uploadTask.snapshot.ref).then((url)=>{
          setUrlLink(url);

          setProgress(0);
          setImage(null);
      });
    }
    )

    console.log("Url is:" , urlLink);

  }

  const sendPost = (e) => {
    e.preventDefault();
    db.collection('posts').add({
        name: user.displayName,
        description: user.email,
        message: input,
        photoURL:user.photoURL,
        // ? user.photoURL : '',
        image: urlLink,
        timeStamp: firebase.firestore.FieldValue.serverTimestamp()
    })
    setInput('');
  }

  return (
    <div className="MessageSender">
      <div className="MessageSender__Top">
        <Avatar
          className="MessageSender__TopAvatar"
          src={user.photoURL}
        >
          {/* {user.email[0]} */}
          </Avatar>
        <form>
          <input
            type="text"
            value={input}
            className="MessageSender__TopInput"
            placeholder="Start a post"
            onChange={(e)=> setInput(e.target.value)}
          />
          <button onClick={sendPost} type="submit"></button>
        </form>
      </div>
      <div className="MessageSender__Bottom">
        <div className="MessageSender__option">
          <Photo style={{ color: "blue" }} onClick={handleShow} />
          <h3>Photo</h3>
        </div>

        {show && (
          <div
            className="modal"
            tabIndex="-1"
            role="dialog"
            style={{ display: "block" }}
          >
            <div className="modal-dialog" role="document">
              <div className="modal-content">
                <div className="modal-header">
                  <h5 className="modal-title">Edit your photo</h5>
                  <button
                    type="button"
                    className="close"
                    aria-label="Close"
                    onClick={handleClose}
                  >
                    <span aria-hidden="true">&times;</span>
                  </button>
                </div>
                <div className="modal-body">
                  <input type='file' onChange={handleChange}/>
                </div>
                <div className="modal-footer">
                  <button
                    type="button"
                    // className="btn btn-secondary"
                    onClick={handleClose}
                  >
                    Close
                  </button>
                  <button
                    type="button"
                    // className="btn btn-secondary"
                    onClick={()=>{handleUpload(); handleClose();}}
                  >
                    Done
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
        <div className="MessageSender__option">
          <VideoLibrarySharp style={{ color: "green" }} />
          <h3>Video</h3>
        </div>
        <div className="MessageSender__option">
          <Event style={{ color: "orange" }} />
          <h3>Event</h3>
        </div>

        <div className="MessageSender__option">
          <ArtTrackOutlined style={{ color: "red" }} />
          <h3>Write article</h3>
        </div>
      </div>
    </div>
  );
}

export default MessageSender;
