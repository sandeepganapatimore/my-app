import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { Save } from '@mui/icons-material';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

export default function EditModal({data, open, setOpen, fname, number,address, password,setFName,setPnumber, setAddress,setPassword,Success}) {
  // const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
console.log("password",password)
  return (
    <div>
      <Button onClick={handleOpen}>Open modal</Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          
          <Typography id="modal-modal-title" variant="h6" component="h2">
           Edit Data
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            <div>
              <label>Name:</label>
                 <input
                    type="text"
                    value={fname}
                    onChange={(e) => setFName(e.target.value)}
                    style={{ height: "15px", marginLeft: "10px" }}
                />
            </div>
            <div>
              <label>Number</label>
              <input
                    type="text"
                    value={number}
                    onChange={(e) => setPnumber(e.target.value)}
                    style={{ height: "15px", marginLeft: "10px" }}
                />
            </div>
   
            <div>
              <label>Address</label>
              <input
                    type="text"
                    value={address}
                    onChange={(e) => setAddress(e.target.value)}
                    style={{ height: "15px", marginLeft: "10px" }}
                />
            </div>
                <br/>
                <Typography>Verify Your Password</Typography>
                 <input
                    type="text"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    style={{ height: "15px", marginLeft: "10px" }}
                />
          </Typography>
          {
            password.length>0 &&   <Box sx={{display:'flex',justifyContent:'center',marginTop:"10px"}}>
            <Button onClick={Success} variant="contained" color="success">Save</Button>
          </Box>
          }
        
        </Box>
      </Modal>
    </div>
  );
}
