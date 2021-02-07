import React, { useEffect } from "react";

import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { db, storage } from "../../firebase";
import firebase from "firebase";
import {
  resetCameraImage,
  selectCameraImage,
} from "../../features/cameraSlice";

import "./Preview.css";

import CloseIcon from "@material-ui/icons/Close";
import CreateIcon from "@material-ui/icons/Create";
import TextFieldsIcon from "@material-ui/icons/TextFields";
import NoteIcon from "@material-ui/icons/Note";
import MusicNoteIcon from "@material-ui/icons/MusicNote";
import AttachFileIcon from "@material-ui/icons/AttachFile";
import CropIcon from "@material-ui/icons/Crop";
import TimerIcon from "@material-ui/icons/Timer";
import SendIcon from "@material-ui/icons/Send";

import { v4 as uuid } from "uuid";
import { selectUser } from "../../features/appSlice";

const Preview = () => {
  //  get the payload(img captured) from the store using the action dispatched with useSelector
  const cameraImg = useSelector(selectCameraImage);
  const history = useHistory();
  const dispatch = useDispatch();
  const user = useSelector(selectUser);

  const closePreview = () => {
    dispatch(resetCameraImage());
  };

  const sendPost = () => {
    const id = uuid();
    const uploadTask = storage
      .ref(`/posts/${id}`)
      .putString(cameraImg, "data_url");

    uploadTask.on(
      "state_changed",
      null,
      (error) => {
        // error function
        console.log(error);
      },
      () => {
        // complete function
        storage
          .ref("posts")
          .child(id)
          .getDownloadURL()
          .then((url) => {
            db.collection("posts").add({
              imageUrl: url,
              username: user.username,
              read: false,
              // profile picture
              profilePic: user.profilePic,
              timestamp: firebase.firestore.FieldValue.serverTimestamp(),
              // gets a consistent timestamp from the server.
            });
            history.replace("/chats");
          });
      }
    );
  };

  // use a clause to throw back at 'home if a preview is absent, using useeffect hook,
  useEffect(() => {
    if (!cameraImg) {
      history.replace("/");
    }
  }, [cameraImg, history]);

  return (
    <div className="preview">
      <CloseIcon onClick={closePreview} className="preview__close" />

      <div className="preview__toolbarRight">
        <TextFieldsIcon />
        <CreateIcon />
        <NoteIcon />
        <MusicNoteIcon />
        <AttachFileIcon />
        <CropIcon />
        <TimerIcon />
      </div>

      <img src={cameraImg} alt="preview" />

      <div onClick={sendPost} className="preview__footer">
        <h2>Send now</h2>
        <SendIcon className="preview__sendIcon" />
      </div>
    </div>
  );
};

export default Preview;
