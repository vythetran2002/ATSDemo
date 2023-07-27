import React, { useState } from "react";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
} from "@mui/material";

import Avatar from "react-avatar-edit";

function DialogCustom(props) {
  const { onClose, open, onSaveAvatar } = props;
  const [preview, setPreview, avatar] = useState();
  const [src, setSrc] = useState(null);
  const sxStyle = {
    "& .MuiPaper-root": {
      width: "700px",
    },
  };
  const handlingCrop = (view) => {
    setPreview(view);
  };

  const handlingClose = () => {
    setPreview(null);
  };

  const handlingCloseDialog = () => {
    setPreview(null);
    onSaveAvatar(preview);
    onClose();
  };

  return (
    <>
      <Dialog open={open} onClose={onClose} sx={sxStyle}>
        <DialogTitle>Editing Image</DialogTitle>
        <DialogContent dividers={true}>
          <div style={{ display: "flex" }}>
            <div style={{ width: "100%", flex: "3", padding: "50px" }}>
              <Avatar
                width={"506"}
                height={"302"}
                onClose={handlingClose}
                onCrop={handlingCrop}
                src={src}
              />
            </div>
            <div style={{ width: "100%", flex: "1", padding: "10px" }}>
              {preview ? (
                <img src={preview}></img>
              ) : (
                <p>Preview will be display here</p>
              )}
            </div>
          </div>
        </DialogContent>
        <DialogActions>
          <Button onClick={handlingCloseDialog}>X</Button>
        </DialogActions>
      </Dialog>
    </>
  );
}

export default DialogCustom;
