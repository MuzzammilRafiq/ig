import SendRoundedIcon from "@mui/icons-material/SendRounded";
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
} from "@mui/material";
import { useState } from "react";
const Chat = () => {
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClickClose = () => {
    setOpen(false);
  };

  return (
    <div className="Chat">
      <SendRoundedIcon
        onClick={handleClickOpen}
        style={{ cursor: "pointer" }}
      />
      <Dialog open={open} onClose={handleClickClose}>
        <DialogActions onClick={handleClickClose}>
          <Button>X</Button>
        </DialogActions>
        <DialogTitle>Chat</DialogTitle>
        <DialogContent sx={{ width: 600 }}>coming...</DialogContent>
      </Dialog>
    </div>
  );
};

export default Chat;
