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

export default function EditPackage({open, setOpen,receivrName,senderName,status,setRecieverName, setSenderName,setStatus,success}) {
  // const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
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
          
          <Typography id="modal-modal-title" variant="h6" component="h2" style={{display:'flex',justifyContent:'center'}}>
            Edit the Package
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            <div>
              <label>Reciever Name:</label>
                 <input
                    type="text"
                    value={receivrName}
                    onChange={(e) => setRecieverName(e.target.value)}
                    style={{ height: "15px", marginLeft: "10px" }}
                />
            </div>
            <div>
              <label>Reciever address:</label>
              <input
                    type="text"
                    value={senderName}
                    onChange={(e) => setSenderName(e.target.value)}
                    style={{ height: "15px", marginLeft: "10px" }}
                />
            </div>
   
            <div>
              <label>Status:</label>
              <input
                    type="text"
                    value={status}
                    onChange={(e) => setStatus(e.target.value)}
                    style={{ height: "15px", marginLeft: "10px" }}
                />
            </div>
                <br/>
                
          </Typography>
          <Button onClick={success} variant="contained" color="success">Save</Button>
        
        </Box>
      </Modal>
    </div>
  );
}
