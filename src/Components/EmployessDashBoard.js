import * as React from "react";
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import moment from "moment";
// import moment from 'moment"
import Icon, {
  EditTwoTone,
  DeleteTwoTone,
  SaveTwoTone,
} from "@ant-design/icons";
import Button from "@mui/material/Button";
import { Label, Sort } from "@mui/icons-material";
import TextField from "@mui/material/TextField";
import { Form, Input, Spin } from "antd";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { Space, Table, Tag } from "antd";
import { render } from "@testing-library/react";
import CustomerDashBoard from "../Customers/CustomerDashBoard";
import EditPackage from "./EditPackage";
// import Moment from "react-moment";

function OrderPlacement() {
  const [firstName, setFirstName] = React.useState("");
  const [lastName, setLastName] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [role, setRole] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [data, setData] = React.useState(null);
  const [address, SetAddress] = React.useState("");
  const [id, setId] = React.useState(null);

  const [edit, setEdit] = React.useState(false);
  const columns = [
    {
      title: "Order Id",
      dataIndex: "Order Id",
      key: "name",
      // align: "center",
      alignItems: "center",
      sorter: (a, b) => a.order_id - b.order_id,
      // render: (_, raw) => console.log("raw,raw", raw),
      render: (_, raw) => {
        return (
          <>
            <span>{raw.order_id}</span>
          </>
        );
      },
    },
    {
      title: "Customer Id",
      dataIndex: "CustomerId",
      key: "CustomerId",
      alignItems: "center",
      sorter: (a, b) => a.customer_id.localeCompare(b.customer_id),
      render: (_, raw) => {
        return (
          <>
            <span>{raw.customer_id}</span>
          </>
        );
      },
    },
    {
      title: "Date",
      dataIndex: "Date",
      alignItems: "center",
      key: "Date",
      sorter: (a, b) => a.order_date.localeCompare(b.order_date),
      render: (_, raw) => {
        return (
          <>
            {/* <span>{raw.pickup_address}</span> */}
            <span>
              {moment(raw.order_date).format("MMMM Do YYYY, h:mm:ss a")}
              {/* {Moment(data.order_date).format("MMMM Do YYYY, h:mm:ss a")} */}
            </span>
          </>
        );
      },
    },
    {
      title: "Order Status",
      dataIndex: "OrderStatus",
      key: "OrderStatus",
      alignItems: "center",
      sorter: (a, b) => a.order_status.localeCompare(b.order_status),
      render: (_, raw) => {
        return (
          <>
            <span>{raw.order_status}</span>
          </>
        );
      },
    },
    {
      title: "Package Id",
      dataIndex: "PackageId",
      key: "PackageId",
      alignItems: "center",
      sorter: (a, b) => a.package_id.localeCompare(b.package_id),
      render: (_, raw) => {
        return (
          <>
            <span>{raw.package_id}</span>
          </>
        );
      },
    },
  ];
  var value = [];
  const User = () => {
    fetch(`http://127.0.0.1:8000/order_history/${id}`)
      .then((res) => {
        console.log("Response", res);
        return res.json();
      })
      .then((data) => {
        console.log(data);
        value.push(data);
        setData(value);
        // setEmployeeId(data.employee_id);
        // setName(data.full_name);
        setEmail(data.email);
        setRole(data.role);
      });
  };
  console.log("datat0", data);
  return (
    <>
      <div>
        <span>Enter History Order Id</span>
        <input
          type="text"
          value={id}
          onChange={(e) => setId(e.target.value)}
          style={{ marginLeft: "10px", borderRadius: "2px" }}
        />
        <button style={{ marginLeft: "10px" }} onClick={User}>
          Submit
        </button>
      </div>
      <div>{data && <Table dataSource={data} columns={columns} />}</div>
    </>
    // </div>
    // </div>
  );
}

function Packages() {
  const [data, setData] = React.useState(null);
  const [id, setId] = React.useState(null);
  const [loading, setLoading] = React.useState(false);
  const [editModal, setEditModal] = React.useState(false);
  const [recieverName,setRecieverName]=React.useState("");
  const [senderName,setSenderName]=React.useState("");
  const [status,setStatus]=React.useState("");
  const [bool,setBool]=React.useState(false)
  const columns = [
    {
      title: "Package Id",
      dataIndex: "PackageId",
      key: "PackageId",
      sorter: (a, b) => a.package_id - b.package_id,
      render: (_, raw) => {
        return (
          <>
            <span>{raw.package_id}</span>
          </>
        );
      },
    },
    {
      title: "Name",
      dataIndex: "Name",
      key: "Name",
      sorter: (a, b) => a.sender_name.localeCompare(b.sender_name),
      render: (_, raw) => {
        return (
          <>
            <span>{raw.sender_name}</span>
          </>
        );
      },
    },
  
    {
      title: "Reciever Name",
      dataIndex: "RecieverName",
      key: "RecieverName",
      sorter: (a, b) => a.receiver_name.localeCompare(b.receiver_name),
      render: (_, raw) => {
        return (
          <>
            <span>{raw.receiver_name}</span>
          </>
        );
      },
    },
    {
      title: "Sender Address",
      dataIndex: "SenderAddress",
      key: "SenderAddress",
      sorter: (a, b) => a.sender_address.localeCompare(b.sender_address),
      render: (_, raw) => {
        return (
          <>
            <span>{raw.sender_address}</span>
          </>
        );
      },
    },
    {
      title: "Reciever Address",
      dataIndex: "RecieverAddress",
      key: "RecieverAddress",
      sorter: (a, b) => a.receiver_address.localeCompare(b.receiver_address),
      render: (_, raw) => {
        return (
          <>
            <span>{raw.receiver_address}</span>
          </>
        );
      },
    },
    {
      title: "Weight",
      dataIndex: "Weight",
      key: "Weight",
      sorter: (a, b) => a.weight.localeCompare(b.weight),
      render: (_, raw) => {
        return (
          <>
            <span>{raw.weight}</span>
          </>
        );
      },
    },
    {
      title: "Status",
      dataIndex: "Status",
      key: "Status",
      sorter: (a, b) => a.status.localeCompare(b.status),
      render: (_, raw) => {
        return (
          <>
            <span>{raw.status}</span>
          </>
        );
      },
    },
    {
      title: "Change",
      dataIndex: "Change",
      key: "Change",
      alignItems: "center",
      render: (_, raw) => {
          return (
              <>
                  <div>
                      <EditTwoTone onClick={() => setEditModal(true)} style={{ paddingLeft: "10px", paddingRight: "10px", cursor: "pointer" }} />
                      {/* <DeleteTwoTone onClick={()=>setDeleteModal(true)}  style={{paddingLeft:"10px",paddingRight:"10px",cursor:"pointer"}} />
        <SaveTwoTone  style={{paddingLeft:"10px",paddingRight:"10px",cursor:"pointer"}}/> */}
                  </div>
              </>
          );
      },
  },
  ];
  
  const User = () => {
    setLoading(true);
let value=[]
    fetch(`http://127.0.0.1:8000/packages/${id}`)
      .then((res) => {
        console.log("Response value", res);
        return res.json();
      })
      .then((data) => {
        console.log(data);
        value.push(data)
        setData(value);
        setLoading(false);
        // setEmployeeId(data.employee_id);
        // setName(data.full_name);
      });
  };
React.useEffect(()=>{
  if(bool===true){
    User();
    setBool(false)
  }
},[bool])

const UpdateData=()=>{
  let value=[]
  fetch(`http://127.0.0.1:8000/packages/${id}`, {
    method: "PUT",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      receiver_name: recieverName,
      receiver_address: senderName,
      status: status
    //   password:password
    }),
  })
  .then((res) => {
    console.log("Response value", res);
    return res.json();
  })
  .then((data) => {
    console.log(data);
    value.push(data)
    setData(value);
    setLoading(false);
    setBool(true)
    // setEmployeeId(data.employee_id);
    // setName(data.full_name);
  });
}

  console.log("history data", data);
  return (
    <>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <span>
          <label>Enter Package Id</label>
          <input
            type="text"
            value={id}
            onChange={(e) => setId(e.target.value)}
            style={{ height: "15px", marginLeft: "10px" }}
          />
          <Button
            type="primary"
            htmlType="submit"
            onClick={User}
            style={{ paddingLeft: "10px" }}
          >
            Submit
          </Button>
        </span>
      </div>
      <div style={{ marginTop: "10px" }}>
        {data && (
          <div>
            <Table dataSource={data} columns={columns} />
          </div>
        )}
      </div>
      <div>
        { 
          editModal && <EditPackage open={editModal} setOpen={setEditModal} receivrName={recieverName} senderName={senderName} status={status} setRecieverName={setRecieverName} setSenderName={setSenderName} setStatus={setStatus}  success={UpdateData}/>
        }
      </div>
    </>
  );
}

function PlacePackage() {
  const [data, setData] = React.useState(null);
  const [customerId, setCustomerId] = React.useState(null);
  const [senderAddress, SetSenderAddress] = React.useState(null);
  const [recieverAddress, setRecieverAddress] = React.useState(null);
  const [senderName, setSenderName] = React.useState("null");
  const [weight, setWeight] = React.useState(null);
  const [receiverName, setRecieverName] = React.useState(null);
  const [status, setStatus] = React.useState("");
  const layout = {
    labelCol: {
      span: 8,
    },
    wrapperCol: {
      span: 16,
    },
  };

  const tailLayout = {
    wrapperCol: {
      offset: 8,
      span: 16,
    },
  };

  const onFinish = (values) => {
    console.log("Success:", values);
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };
  const [form] = Form.useForm();
  const navigate = useNavigate();
  const User = () => {
    form.resetFields();
    fetch(`http://127.0.0.1:8000/packages`, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        // order_id: parseInt(customerId),
        // customer_id: parseInt(customerId),
        // pickup_address: pAddress,
        // delivery_address: dAddress,
        // package_info: information,
        // created_at: "string",
        // "package_id": 0,
        sender_name: senderName,
        sender_address:senderAddress,
        receiver_name: receiverName,
        receiver_address: recieverAddress,
        weight: parseInt(weight),
        status: status
      }),
    })
      .then((res) => {
        console.log("Response", res.status);
        if (res.status === 200) {
          toast.success("Order Placed!");
          
          // window.location.reload();
        }
        return res.json();
      })
      .then((data) => {
        console.log(data);
      });
  };
  return (
    <>
      <div className="container">
        <h1>Place Package</h1>
        <Form
          {...layout}
          name="basic"
          initialValues={{
            remember: false,
          }}
          // initialValues={{ first_name: "John" }}
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
        >
          <Form.Item
            label="Sender Name"
            name="Sender Name"
            rules={[
              {
                required: true,
                message: "Enter Sender Name!",
              },
            ]}
            initialValues={{
              remember: false,
            }}
          >
            <Input
              value={senderName}
              onChange={(e) => setSenderName(e.target.value)}
            />
          </Form.Item>
          <Form.Item
            label="Receiver Name"
            name="Receiver Name"
            initialValues={{
              remember: false,
            }}
            rules={[
              {
                required: true,
                message: "Please input  Receiver Name!",
              },
            ]}
          >
            <Input
              value={receiverName}
              onChange={(e) => setRecieverName(e.target.value)}
            />
          </Form.Item>
          <Form.Item
            label="Sender Address"
            name="Sender Address"
            initialValues={{
              remember: false,
            }}
            rules={[
              {
                required: true,
                // type: "email",
                message: "Please input a valid Sender Address!",
              },
            ]}
          >
            <Input
              value={senderAddress}
              onChange={(e) => SetSenderAddress(e.target.value)}
            />
          </Form.Item>
          <Form.Item
            label="Receiver address"
            name="Receiver address"
            initialValues={{
              remember: false,
            }}
            rules={[
              {
                required: true,
                message: "Please input Receiver address Info!",
              },
            ]}
          >
            <Input
              value={recieverAddress}
              onChange={(e) => setRecieverAddress(e.target.value)}
            />
          </Form.Item>
          <Form.Item
            label="Weight"
            name="Weight"
            initialValues={{
              remember: false,
            }}
            rules={[
              {
                required: true,
                message: "Please input product Weigth!",
              },
            ]}
          >
            <Input
              value={weight}
              onChange={(e) => setWeight(e.target.value)}
            />
          </Form.Item>
          <Form.Item
            label="Status"
            name="Status"
            initialValues={{
              remember: false,
            }}
            rules={[
              {
                required: true,
                message: "Please input Status!",
              },
            ]}
          >
            <Input
              value={status}
              onChange={(e) => setStatus(e.target.value)}
            />
          </Form.Item>
          <Form.Item {...tailLayout}>
            <Button type="primary" htmlType="submit" onClick={User}>
              Submit
            </Button>
          </Form.Item>
        </Form>
      </div>
    </>
  );
}

function CustomTabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

CustomTabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

export default function EmployeeDashBoard() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: "100%" }}>
      <Typography >Couriers</Typography>
      <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
        <Tabs
          value={value}
          onChange={handleChange}
          aria-label="basic tabs example"
        >
          <Tab label="Packages" {...a11yProps(0)} />
          <Tab label="Create Package" {...a11yProps(1)} />
          <Tab label="Pricing" {...a11yProps(1)} />
          <Tab label="Deliveries" {...a11yProps(2)} />
          {/* <Tab label="Item Three" {...a11yProps(2)} /> */}
        </Tabs>
      </Box>
      <CustomTabPanel value={value} index={0}>
        <Packages />
      </CustomTabPanel>
      <CustomTabPanel value={value} index={1}>
        <PlacePackage />
      </CustomTabPanel>
      <CustomTabPanel value={value} index={2}>
        {" "}
        <OrderPlacement />
      </CustomTabPanel>
      <CustomTabPanel value={value} index={3}>
        {" "}
        <CustomerDashBoard/>
      </CustomTabPanel>
    </Box>
  );
}

// export default DashBoard
