import React, { useState, useEffect } from "react";
import Carousel from 'react-bootstrap/Carousel';
import ControlledCarousel from './Curosor'
import { Table, Typography } from "antd";
// import ExampleCarouselImage from 'components/ExampleCarouselImage';
// import image1 from '../images/'
import Icon, {
    EditTwoTone,
    DeleteTwoTone,
    SaveTwoTone,
} from "@ant-design/icons";
import Button from "@mui/material/Button";
import EditModal from "./EditModal";
import DeleteModal from "./DeleteModal";
import { Password } from "@mui/icons-material";
import { fn } from "moment";
const CursorData = () => {
    const [index, setIndex] = useState(0);

    const handleSelect = (selectedIndex) => {
        setIndex(selectedIndex);
    };
    return <>
        <div style={{ display: 'flex' }}>
            <ControlledCarousel />
        </div>
    </>
}


export default function CustomerDashBoard() {
    const [data, setData] = useState(null);
    const [id, setId] = useState(null);
    const [bool, setBool] = useState(false);
    const [fname, setFName] = useState("");
    const [pnumber, setPnumber] = useState("");
    const [address, setAddress] = useState("");
    const [password, setPassword] = useState("");
   const [email,setEmail]=useState("")
    const User = () => {
        fetch(`http://127.0.0.1:8000/customers/${id}`)
            .then((res) => {
                console.log("Response", res);
                return res.json();
            })
            .then((data) => {
                console.log(data);
                setData(data);
                setFName(data[0].name);
                setAddress(data[0].address);
                setPnumber(data[0].phone_number);
                // setPassword(data[0].password);
                setEmail(data[0].email)
            
            });
    };
    const [deleteModal, setDeleteModal] = useState(false);
    const [editModal, setEditModal] = useState(false);

    useEffect(() => {
        if (bool === true) {
            User()
            setBool(false)
        }
    }, [bool])
    const columns = [
        {
            title: "Name",
            dataIndex: "Name",
            key: "name",
            // align: "center",
            alignItems: "center",
            sorter: (a, b) => a.name - b.name,
            // render: (_, raw) => console.log("raw,raw", raw),
            render: (_, raw) => {
                return (
                    <>
                        <span>{raw.name}</span>
                    </>
                );
            },
        },
        {
            title: "Number",
            dataIndex: "Number",
            key: "Number",
            alignItems: "center",
            sorter: (a, b) => a.phone_number.localeCompare(b.phone_number),
            render: (_, raw) => {
                return (
                    <>
                        <span>{raw.phone_number}</span>
                    </>
                );
            },
        },
        {
            title: "Email",
            dataIndex: "Email",
            alignItems: "center",
            key: "Email",
            sorter: (a, b) => a.email.localeCompare(b.email),
            render: (_, raw) => {
                return (
                    <>
                        {/* <span>{raw.email}</span> */}
                        <span>
                            {raw.email}</span>
                        {/* {moment(raw.order_date).format("MMMM Do YYYY, h:mm:ss a")} */}
                        {/* {Moment(data.order_date).format("MMMM Do YYYY, h:mm:ss a")} */}

                    </>
                );
            },
        },
        {
            title: "Address",
            dataIndex: "address",
            key: "address",
            alignItems: "center",
            sorter: (a, b) => a.address.localeCompare(b.address),
            render: (_, raw) => {
                return (
                    <>
                        <span>{raw.address}</span>
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
    //   const handleDelete=()=>{
    //     fetch(`http://127.0.0.1:8000/customers/${data[0].email}/${data[0].Password}`)
    //     .then((res) => {
    //       console.log("Response", res);
    //       return res.json();
    //     })
    //     .then((data) => {
    //       console.log(data);
    //      setData(data)
    //     });
    //   }
    // "name": "string",
    //   "phone_number": 0,
    //   "email": "string",
    //   "address": "string",
    //   "password": "string"

const EditData=()=>{
    console.log("data file")
    fetch(`http://127.0.0.1:8000/customers/${password}`, {
        method: "PUT",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          // password: password,
          // full_name: firstName.concat(" ", lastName),
          // email: email,
          // role: role,
          name: fname,
          phone_number: pnumber,
          address:address,
        //   password:password
        }),
      })
        .then((res) => {
          console.log("Response", res);
          setBool(true);
          setEditModal(false)
          return res.json();

        })
        .then((data) => {
          console.log(data);
        });
        // 
        
}
    return <>
        {/* <ControlledCarousel/> */}
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
                    <Table dataSource={data} columns={columns} pagination={false}/>
                </div>
            )}
        </div>
        <div>
            {
                editModal ? <div>
                    <EditModal data="" open={editModal} setOpen={setEditModal} fname={fname} number={pnumber} address={address} password={password} setFName={setFName} setPnumber={setPnumber} setAddress={setAddress} setPassword={setPassword} Success={EditData}/>
                </div> : <></>
            }
            {
                deleteModal ? <div>
                    <DeleteModal data={data} open={deleteModal} setOpen={setDeleteModal} />
                </div> : ""
            }
        </div>


    </>
}