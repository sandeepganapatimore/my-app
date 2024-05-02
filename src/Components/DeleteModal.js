import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

export default function DeleteModal({
  open,
  setOpen,
  id,
  success,
  setSuccess,
}) {
  //   const [open, setOpen] = React.useState(false);
  //   const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const SuccessData = (id) => {
    // console.log("pricing", price);
    fetch(`http://127.0.0.1:8000/pricing/${id}`, {
      method: "DELETE",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    }).then((res) => {
      console.log("Response value", res);
      //   return res.json();
    });
    setSuccess(!success);
    setOpen(false);
  };
  return (
    <div>
      {/* <Button onClick={handleOpen}>Open modal</Button> */}
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Sure Want to delete Record
          </Typography>
          <div style={{ display: "flex", justifyContent: "center" }}>
            <Button onClick={() => SuccessData(id)} variant="primary">
              Yes
            </Button>
            <Button onClick={handleClose} variant="secondary">
              No
            </Button>
          </div>
        </Box>
      </Modal>
    </div>
  );
}
