import React from "react";
import { Alert } from "@mui/material";
import { useSelector, useDispatch } from "react-redux";
import { showNotification } from "../redux/muiSlice";

const Notification = ({ type, message }) => {
  const { notification } = useSelector((state) => state.mui);
  const dispatch = useDispatch();
  
  const handleClose = () => {
    dispatch(showNotification({
        open: false,
      })
    );
  };

  return (
    <div>
      {notification.open && (
        <Alert onClose={handleClose} severity={type}>
          {message}
        </Alert>
      )}
    </div>
  );
};

export default Notification;
