import * as React from "react";
import Button from "@mui/material/Button";
import { AddBoxRounded } from "@mui/icons-material";
import { addDoc, collection } from "firebase/firestore";
import { db } from "../../auth/firebase";
import { getAuth } from "firebase/auth";
import {
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
} from "@mui/material";

export default function AddPost() {
  const [open, setOpen] = React.useState(false);
  const [string, setString] = React.useState("");
  // const [photo, setPhoto] = React.useState("");
  // const [user, setUser] = React.useState(null);
  // setUser(auth.currentUser);
  const auth = getAuth();
  const user = auth.currentUser;
  // setPhoto(user?.photoURL);
  // onAuthStateChanged(auth, (currentUser) => {
  //   setUser(currentUser);
  //   if (user?.photoURL == "") {
  //     setPhoto(user.photoURL);
  //   } else {
  //     setPhoto(user.displayName);
  //   }
  // });

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    handleClose();
    try {
      await addDoc(collection(db, "posts"), {
        email: user.email,
        id: user.uid,
        post: string,
        photoURL: user?.displayName.substr(0, 1).toUpperCase(),
        displayName: user.displayName,
        createdAt: new Date(),
      });
      console.log("sucess");
    } catch (error) {
      console.log(error.message);
    }
  };
  return (
    <div className="addPost">
      <AddBoxRounded onClick={handleClickOpen} style={{ cursor: "pointer" }} />
      <Dialog open={open} onClose={handleClose}>
        <DialogActions>
          <Button onClick={handleClose}>X</Button>
        </DialogActions>
        <DialogTitle>Add Your Post</DialogTitle>
        <DialogContent sx={{ width: 500 }}>
          <DialogContentText></DialogContentText>
          {/* <input type="file" onChange={(e) => setImage(e.target.files[0])} /> */}
          <textarea
            cols="45"
            rows="15"
            className="addpost_text"
            value={string}
            onChange={(e) => setString(e.target.value)}
          ></textarea>
          {/* {imageUrls.map((url) => {
            return <img src={url} />;
          })} */}
        </DialogContent>

        <DialogActions>
          {/* <Button onClick={uploadImage}>Post Image</Button> */}
          <Button onClick={handleSubmit}>Post String</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}

// import { useState } from "react";
// import PropTypes from "prop-types";
// import Button from "@mui/material/Button";
// import { styled } from "@mui/material/styles";
// import Dialog from "@mui/material/Dialog";
// import DialogTitle from "@mui/material/DialogTitle";
// import DialogContent from "@mui/material/DialogContent";
// import DialogActions from "@mui/material/DialogActions";
// import IconButton from "@mui/material/IconButton";
// import CloseIcon from "@mui/icons-material/Close";
// import Typography from "@mui/material/Typography";

// import { AddBoxRounded } from "@mui/icons-material";
// import { addDoc, collection } from "firebase/firestore";
// import { auth, db } from "../../auth/firebase";
// import { onAuthStateChanged } from "firebase/auth";

// const BootstrapDialog = styled(Dialog)(({ theme }) => ({
//   "& .MuiDialogContent-root": {
//     padding: theme.spacing(2),
//   },
//   "& .MuiDialogActions-root": {
//     padding: theme.spacing(1),
//   },
// }));

// const BootstrapDialogTitle = (props) => {
//   const { children, onClose, ...other } = props;

//   return (
//     <DialogTitle sx={{ m: 0, p: 2 }} {...other}>
//       {children}
//       {onClose ? (
//         <IconButton
//           aria-label="close"
//           onClick={onClose}
//           sx={{
//             position: "absolute",
//             right: 8,
//             top: 8,
//             color: (theme) => theme.palette.grey[500],
//           }}
//         >
//           <CloseIcon />
//         </IconButton>
//       ) : null}
//     </DialogTitle>
//   );
// };

// BootstrapDialogTitle.propTypes = {
//   children: PropTypes.node,
//   onClose: PropTypes.func.isRequired,
// };

// export default function AddPost() {
//   const [open, setOpen] = useState(false);
//   const [string, setString] = useState("");
//   const [photo, setPhoto] = useState("");
//   const [user, setUser] = useState(null);

//   setUser(auth.currentUser);

//   // onAuthStateChanged(auth, (currentUser) => {
//   //   setUser(currentUser);
//   //   if (/\.(jpg|jpeg|png|webp|avif|gif|svg)$/.test(user.photoURL)) {
//   //     setPhoto(user.photoURL);
//   //   } else {
//   //     setPhoto(user.displayName);
//   //   }
//   // });

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       await addDoc(collection(db, "posts"), {
//         email: user.email,
//         id: user.uid,
//         post: string,
//         photoURL: photo,
//         displayName: user.displayName,
//         createdAt: new Date(),
//       });
//       console.log("sucess");
//     } catch (error) {
//       console.log(error.message);
//     }
//     handleClose();
//   };

//   const handleClickOpen = () => {
//     setOpen(true);
//   };
//   const handleClose = () => {
//     setOpen(false);
//   };

//   return (
//     <div>
//       <AddBoxRounded onClick={handleClickOpen} style={{ cursor: "pointer" }} />
//       <BootstrapDialog
//         onClose={handleClose}
//         aria-labelledby="customized-dialog-title"
//         open={open}
//       >
//         <BootstrapDialogTitle
//           id="customized-dialog-title"
//           onClose={handleClose}
//         >
//           Post your post here
//         </BootstrapDialogTitle>
//         <DialogContent dividers>
//           <textarea
//             cols="45"
//             rows="15"
//             className="addpost_text"
//             value={string}
//             onChange={(e) => setString(e.target.value)}
//           ></textarea>
//         </DialogContent>
//         <DialogActions>
//           <Button autoFocus onClick={handleSubmit}>
//             Post
//           </Button>
//         </DialogActions>
//       </BootstrapDialog>
//     </div>
//   );
// }
