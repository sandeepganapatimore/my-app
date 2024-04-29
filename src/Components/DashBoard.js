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

function OrderHistory() {
  const [data, setData] = React.useState(null);
  const [id, setId] = React.useState(null);
  const [loading, setLoading] = React.useState(false);
  const columns = [
    {
      title: "Order Id",
      dataIndex: "Order Id",
      key: "name",
      sorter: (a, b) => a.order_id - b.order_id,
      render: (_, raw) => {
        return (
          <>
            <span>{raw.order_id}</span>
          </>
        );
      },
    },
    {
      title: "Delivery Address",
      dataIndex: "DeliveryAddress",
      key: "DeliveryAddress",
      sorter: (a, b) => a.delivery_address.localeCompare(b.delivery_address),
      render: (_, raw) => {
        return (
          <>
            <span>{raw.delivery_address}</span>
          </>
        );
      },
    },
    {
      title: "PickUp Address",
      dataIndex: "PickUPAddress",
      key: "PickUPAddress",
      sorter: (a, b) => a.pickup_address.localeCompare(b.pickup_address),
      render: (_, raw) => {
        return (
          <>
            <span>{raw.pickup_address}</span>
          </>
        );
      },
    },
    {
      title: "Package Information",
      dataIndex: "PackageInformation",
      key: "PackageInformation",
      sorter: (a, b) => a.package_info.localeCompare(b.package_info),
      render: (_, raw) => {
        return (
          <>
            <span>{raw.package_info}</span>
          </>
        );
      },
    },
  ];
  const User = () => {
    setLoading(true);

    fetch(`http://127.0.0.1:8000/orders/${id}`)
      .then((res) => {
        console.log("Response value", res);
        return res.json();
      })
      .then((data) => {
        console.log(data);
        setData(data);
        setLoading(false);
        // setEmployeeId(data.employee_id);
        // setName(data.full_name);
      });
  };

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
          <label>Enter Customer Id</label>
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
    </>
  );
}

function PlaceOrder() {
  const [data, setData] = React.useState(null);
  const [customerId, setCustomerId] = React.useState(null);
  const [address, SetAddress] = React.useState(null);
  const [dAddress, setDAddress] = React.useState(null);
  const [pAddress, setPAdress] = React.useState(null);
  const [information, setInformation] = React.useState("");
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
    fetch(`http://127.0.0.1:8000/orders?customer_id=${customerId}`, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        order_id: parseInt(customerId),
        customer_id: parseInt(customerId),
        pickup_address: pAddress,
        delivery_address: dAddress,
        package_info: information,
        // created_at: "string",
      }),
    })
      .then((res) => {
        console.log("Response", res.status);
        if (res.status === 200) {
          toast.success("Order Placed!");
          setCustomerId("");
          setPAdress("");
          setDAddress("");
          setInformation("");
          form.resetFields();
          window.location.reload();
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
        <h1>Place Order</h1>
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
            label="Customer Id"
            name="Customer Id"
            rules={[
              {
                required: true,
                message: "Enter Customer Id!",
              },
            ]}
            initialValues={{
              remember: false,
            }}
          >
            <Input
              value={customerId}
              onChange={(e) => setCustomerId(e.target.value)}
            />
          </Form.Item>
          <Form.Item
            label="Pick Up Address"
            name="Pick Up Address"
            initialValues={{
              remember: false,
            }}
            rules={[
              {
                required: true,
                message: "Please input your Pick Up Address!",
              },
            ]}
          >
            <Input
              value={pAddress}
              onChange={(e) => setPAdress(e.target.value)}
            />
          </Form.Item>
          <Form.Item
            label="Delivery Address"
            name="Delivery Address"
            initialValues={{
              remember: false,
            }}
            rules={[
              {
                required: true,
                // type: "email",
                message: "Please input a valid Delivery Address!",
              },
            ]}
          >
            <Input
              value={dAddress}
              onChange={(e) => setDAddress(e.target.value)}
            />
          </Form.Item>
          <Form.Item
            label="Package Info"
            name="Package Info"
            initialValues={{
              remember: false,
            }}
            rules={[
              {
                required: true,
                message: "Please input Package Info!",
              },
            ]}
          >
            <Input
              value={information}
              onChange={(e) => setInformation(e.target.value)}
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

export default function DashBoard() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: "100%" }}>
      <Typography>Couriers</Typography>
      <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
        <Tabs
          value={value}
          onChange={handleChange}
          aria-label="basic tabs example"
        >
          <Tab label="Order Information" {...a11yProps(0)} />
          <Tab label="Place an Order" {...a11yProps(1)} />
          <Tab label="Order History" {...a11yProps(1)} />
          <Tab label="UpdateProfile" {...a11yProps(2)} />
          {/* <Tab label="Item Three" {...a11yProps(2)} /> */}
        </Tabs>
      </Box>
      <CustomTabPanel value={value} index={0}>
        <OrderHistory />
      </CustomTabPanel>
      <CustomTabPanel value={value} index={1}>
        <PlaceOrder />
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
