import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import { Save } from "@mui/icons-material";
import { ButtonBase } from "@mui/material";

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

export default function EditModal({
  open,
  setOpen,
  packageType,
  setPackageType,
  weight,
  setWeight,
  price,
  setPrice,
  packageId,
  setPackageId,
  success,
  setSuccess,
}) {
  // const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const UpdateData = (packageId, packageType, weight, price) => {
    console.log("pricing", price);
    fetch(`http://127.0.0.1:8000/pricing/${packageId}`, {
      method: "PUT",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        pricing_id: packageId,
        package_type: packageType,
        weight: weight,
        price: price,
      }),
    })
      .then((res) => {
        console.log("Response value", res);
        return res.json();
      })
      .then((data) => {
        // setEmployeeId(data.employee_id);
        // setName(data.full_name);
      });
    setSuccess(!success);
    setOpen(false);
  };
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
              <label>PackageId:</label>
              <input
                type="text"
                value={packageId}
                onChange={(e) => setPackageId(e.target.value)}
                style={{ height: "15px", marginLeft: "10px" }}
                disabled
              />
            </div>
            <div>
              <label>Package Type</label>
              <input
                type="text"
                value={packageType}
                onChange={(e) => setPackageType(e.target.value)}
                style={{ height: "15px", marginLeft: "10px" }}
              />
            </div>

            <div>
              <label>Weight</label>
              <input
                type="text"
                value={weight}
                onChange={(e) => setWeight(e.target.value)}
                style={{ height: "15px", marginLeft: "10px" }}
              />
            </div>
            <div>
              <label>Price</label>
              <input
                type="text"
                value={price}
                onChange={(e) => setPrice(e.target.value)}
                style={{ height: "15px", marginLeft: "10px" }}
              />
            </div>
            <br />
            <Button
              onClick={() => UpdateData(packageId, packageType, weight, price)}
            >
              Save
            </Button>
          </Typography>
        </Box>
      </Modal>
    </div>
  );
}
