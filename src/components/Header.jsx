import HomeRoundedIcon from "@mui/icons-material/HomeRounded";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import { Avatar } from "@mui/material";
import AddPost from "./post/AddPost";
import Chat from "./chat/Chat";
import { useState } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../auth/firebase";

const Header = () => {
  const [user, setUser] = useState(null);
  const [photo, setPhoto] = useState(null);

  onAuthStateChanged(auth, (currentUser) => {
    setUser(currentUser);
    if (/\.(jpg|jpeg|png|webp|avif|gif|svg)$/.test(currentUser.photoURL)) {
      setPhoto(currentUser.photoURL);
    } else {
      setPhoto(currentUser.displayName);
    }
  });

  return (
    <div className="header">
      <div className="header_left">
        <div style={{ alignItems: "center" }}>
          {user?.displayName}
          <ArrowDropDownIcon />
        </div>
      </div>
      <div className="header_middle">
        <form>
          <input type="text" />
          <input type="submit" style={{ display: "none" }} />
        </form>
      </div>
      <div className="header_right">
        <HomeRoundedIcon />
        <Chat />
        <AddPost />
        <FavoriteBorderOutlinedIcon />
        <Avatar
          src={photo}
          alt={user?.displayName.substr(0, 1).toUpperCase()}
        />
      </div>
    </div>
  );
};

export default Header;
