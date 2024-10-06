import React, { useEffect, useRef, useState } from "react";
import "./OtherFn.css";
import axios from "axios";
import Dropdown from "react-bootstrap/Dropdown";
import "bootstrap/dist/css/bootstrap.min.css";
import { useBackendContext, UserDataContext, useUserDataContext, useUserStatContext } from "../../Context/Context";
import { Link, useNavigate } from "react-router-dom";

const backendUrl = 'http://localhost:8000';

export function Profile() {
  const navigate = useNavigate();
  const defaultVal = {
    firstName: "Default firstname",
    lastName: "Default lastname",
    shopEmail: "Default email",
  };
  const {backendUrl,setBackendUrl} = useBackendContext();
  const { stat, setStat } = useUserStatContext();
  const {userData, setUserData} = useUserDataContext();

  return (
    <div className="base_table">
      {/* {console.log(userData)} */}
      <table className="cus_table">
        <tbody>
          <tr className="porfileRow">
            <th className="profileColumn">Firstname</th>
            <th className="profileColumn">{userData.firstName}</th>
          </tr>
          <tr className="porfileRow">
            <th className="profileColumn">Lastname</th>
            <th className="profileColumn">{userData.lastName}</th>
          </tr>
          <tr className="porfileRow">
            <th className="profileColumn">Email</th>
            <th className="profileColumn">{userData.shopEmail}</th>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export function Bills() {
  const [billData, setBillData] = useState([]);
  const [loader, setLoader] = useState(false);
  const [loadingButtons, setLoadingButtons] = useState({});
  const {userData,setUserData} = useUserDataContext();
  const {backendUrl,setBackendUrl} = useBackendContext();

  const handleReminderClick = async (index) => {
    setLoadingButtons((prev) => ({ ...prev, [index]: true }));

    // Simulate an async function call
    try {
      const User = billData.find((item) => item._id === index);
      const response = await axios.post(
        `${backendUrl}/sendEmail`,
        { User },
        {
          headers: {
            "auth-token": localStorage.getItem("auth-token"),
          },
          withCredentials: true,
        }
      );
      if (response.status === 206) {
        localStorage.removeItem("auth-token");
        localStorage.setItem("auth-token", response.data.token);
        await axios
          .post(
            `${backendUrl}/sendEmail`,
            { User },
            {
              headers: {
                "auth-token": localStorage.getItem("auth-token"),
              },
              withCredentials: true,
            }
          ).then((data)=>{
            setLoadingButtons((prev) => ({ ...prev, [index]: false }));

          })
          .catch((e) => {
            console.log(e);
            setLoadingButtons((prev) => ({ ...prev, [index]: false }));

          });
      }else{
        setLoadingButtons((prev) => ({ ...prev, [index]: false }));
      }
    } catch (e) {
      console.log(e);
      setLoadingButtons((prev) => ({ ...prev, [index]: false }));
    }
    // await new Promise((resolve) => setTimeout(resolve, 2000));

  };

  const fetchBills = async () => {
    // console.log("current token : ", localStorage.getItem("auth-token"));
    try {
      const response = await axios.post(
        `${backendUrl}/fetchOrdersByEmail`,
        {shopEmail:userData.shopEmail},
        {
          headers: {
            "auth-token": localStorage.getItem("auth-token"),
          },
          withCredentials: true,
          credentials: 'include',
        }
      );

      if (response.status === 206) {
        // console.log("new token generated");
        localStorage.removeItem("auth-token");
        localStorage.setItem("auth-token", response.data.token);
        await fetchBills();
      } else {
        // console.log("data: ", response.data);
        setBillData(response.data);
        setLoader(false);
      }
      // Call the function again if needed
    } catch (error) {
      setLoader(false);
      console.log(error);
    }
  };

  useEffect(() => {
    setLoader(true);
    fetchBills();
  }, []);
  return (
    <>
      <Loader loader={loader} />

      <div className="billsTable">
        <table className="billsHeading">
          <thead>
            <tr className="billsRow">
              <th className="billsColumn heading">billID</th>
              {/* <th className="billsColumn heading">orderId</th> */}
              {/* <th className="billsColumn heading">shopEmail</th> */}
              <th className="billsColumn heading">consumerName</th>
              <th className="billsColumn heading">consumerEmail</th>
              <th className="billsColumn heading">billAmount</th>
              <th className="billsColumn heading">billDescription</th>
              <th className="billsColumn heading">billStatus</th>
              <th className="billsColumn heading">Reminder</th>
            </tr>
          </thead>

          <tbody>
            {billData.map((bill, index) => (
              <tr key={index} className="billsRow content">
                <td className="billsColumn content">{bill.billID}</td>
                {/* <td className="billsColumn content">{bill.orderId}</td> */}
                {/* <td className="billsColumn content">{bill.shopEmail}</td> */}
                <td className="billsColumn content">{bill.consumerName}</td>
                <td className="billsColumn content">{bill.consumerEmail}</td>
                <td className="billsColumn content">
                  {(bill.billAmount.$numberDecimal)}
                </td>
                <td
                  className="billsColumn content"
                  data-fulltext={`${bill.billDescription}`}
                >
                  {bill.billDescription}
                </td>
                <td className="billsColumn">
                  {bill.billStatus ? "Paid" : "Pending"}
                </td>
                <td className="billsColumn">
                  {bill.billStatus? <>-</>:
                  <button
                    className={`reminder ${bill._id}`}
                    onClick={() => handleReminderClick(bill._id)}
                    disabled={loadingButtons[bill._id]}
                  >
                    {loadingButtons[bill._id] ? (
                      <div className="spinner"></div>
                    ) : (
                      "Send Reminder"
                    )}
                  </button>
                }
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
}

export function Create() {
  const {userData, setUserData} = useUserDataContext();
  const billDefault = {
    Name: userData.firstName+" "+userData.lastName,
    shopEmail: userData.shopEmail,
    consumerName: "",
    consumerEmail: "",
    billAmount: 1,
    billDescription: "",
  };
  const {backendUrl,setBackendUrl} = useBackendContext();

  // Fetch the shop's name, and email
  const [bill, setBill] = useState(billDefault);
  const [loader, setLoader] = useState(false);
  const formRef = useRef(null);
  const addbill = async () => {
    setLoader(true);
    try {
      const response = await axios.post(`${backendUrl}/addBill`, bill, {
        headers: {
          "auth-token": localStorage.getItem("auth-token"),
        },
        withCredentials: true,
      });
      if (response.status === 206) {
        // console.log("new token generated");
        localStorage.removeItem("auth-token");
        localStorage.setItem("auth-token", response.data.token);
        await addbill();
      } else {
        // console.log("bills added succesfully ");
        setLoader(false);
      }
    } catch (e) {
      console.log(e);
      setLoader(false);
    }
  };
  const handleClick = async (e) => {
    e.preventDefault();
    if (formRef.current.checkValidity()) {
      // console.log("valid bill");
      addbill();
      setBill(billDefault);
    } else {
      // console.log("invalid bill");
      formRef.current.reportValidity();
      setBill(billDefault);
    }
  };
  return (
    <>
      <Loader loader={loader} />
      <div className="billBox">
        <div className="billTitle">Create Bill</div>
        <img className="billImg" src="/bills.jpeg"></img>
        <form className="billForm" ref={formRef}>
          <input value={bill.Name} className="billFormSpace" readOnly />
          <input value={bill.shopEmail} className="billFormSpace" readOnly />
          <input
            value={bill.consumerName}
            onChange={(e) => {
              setBill({ ...bill, consumerName: e.target.value });
            }}
            className="billFormSpace"
            placeholder="Customer Name"
            type="text"
            required
          />
          <input
            value={bill.consumerEmail}
            onChange={(e) => {
              setBill({ ...bill, consumerEmail: e.target.value });
            }}
            className="billFormSpace"
            placeholder="Customer Email"
            type="text"
            required
          />
          <input
            value={bill.billAmount}
            onChange={(e) => {
              setBill({ ...bill, billAmount: e.target.value });
            }}
            className="billFormSpace"
            placeholder="Bill Amount"
            type="number"
            min={1}
            required
          />
          <input
            value={bill.billDescription}
            onChange={(e) => {
              setBill({ ...bill, billDescription: e.target.value });
            }}
            className="billFormSpace"
            placeholder="Bill description"
            type="text"
            required
          />
          <button className="createBill" onClick={handleClick}>
            Create Bill
          </button>
        </form>
      </div>
    </>
  );
}

export function ProfileIcon() {
  const LogOutFn = () => {};
  const navigate = useNavigate();
  const {userData,setUserData} = useUserDataContext();
  const { stat, setStat } = useUserStatContext();
  const {backendUrl,setBackendUrl} = useBackendContext();

  return (
    <>
      <Dropdown className="topPanel">
        <Dropdown.Toggle id="dropdown-basic">
          <img src="/logo.png" />
        </Dropdown.Toggle>
        <Dropdown.Menu className="Dropdown">
          <Dropdown.Item as={Link} to="/" className="goHomepage">
            {/* <Link to="/" className="goHomepage"> */}
            HomePage
            {/* </Link> */}
          </Dropdown.Item>
          <Dropdown.Item as={Link} to="/Dashboard" className="goDashboard">
            {/* <Link to="/Dashboard" className="goDashboard"> */}
            DashBoard
            {/* </Link> */}
          </Dropdown.Item>
          <Dropdown.Item>
            <button
              onClick={() => {
                setStat(false);
                localStorage.removeItem("auth-token");
                setUserData([]);
                navigate("/");
              }}
            >
              Logout
            </button>
          </Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
    </>
  );
}

export function Loader({ loader }) {
  if (loader) {
    return (
      <div className="loader-block">
        <div className="loader"></div>
      </div>
    );
  } else return null;
}
