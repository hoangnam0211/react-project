import { Breadcrumb } from "antd";
import ListMenu from "./ListMenu/ListMenu";
import Login from "./Login/Login";
import Register from "./Register/Register";
import { useDispatch, useSelector } from "react-redux";
import "./myAccount.scss";
import { Alert } from "antd";
import { Modal } from "antd";
import SyncLoader from "react-spinners/SyncLoader";
import { useNavigate } from "react-router-dom";
import { logout } from "../../actions/userActions";
import Dashboard from "../AfterLogin/Dashboard/DashBoard";
import Payment from "../AfterLogin/Payment/Payment";
import AccountDetail from "../AfterLogin/AccountDetail/AccountDetail";
import Addresses from "../AfterLogin/Addresses/Addresses";
import Download from "../AfterLogin/Download/Download";
import Orders from "../AfterLogin/Orders/Orders";
import { Routes, Route } from "react-router-dom";

const MyAccount = () => {
  const error = useSelector((state) => state.errorReducer.error);
  const loading = useSelector((state) => state.userReducer.loading);
  const user = useSelector((state) => state.userReducer?.currentUser);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const onClose = (e) => {
    console.log(e, "I was closed.");
  };

  //active tab user

  let ul = document.querySelector(".list-option-account");
  let li = document.querySelectorAll("li");
  li.forEach((el) => {
    el.addEventListener("click", function () {
      ul.querySelector(".active").classList.remove("active");
      el.classList.add("active");
    });
  });

  return (
    <div className="MyAccount">
      {user ? (
        <>
          <ListMenu />
          <div className="container">
            <Breadcrumb style={{ padding: "15px 0" }} separator=">">
              <Breadcrumb.Item style={{ color: "#000", cursor: "pointer" }}>
                Home
              </Breadcrumb.Item>
              <Breadcrumb.Item href="">My Account</Breadcrumb.Item>
            </Breadcrumb>

            <div className="wrapper-account">
              <ul className="list-option-account">
                <li
                  onClick={() => navigate("/my-account/dashboard")}
                  className="option-item active"
                >
                  Dashboard<i className="fa-solid fa-gauge-high"></i>
                </li>
                <li onClick={() => navigate("/orders")} className="option-item">
                  Orders<i className="fa-solid fa-cart-shopping"></i>
                </li>
                <li
                  onClick={() => navigate("/download")}
                  className="option-item"
                >
                  Downloads<i className="fa-solid fa-file-arrow-down"></i>
                </li>
                <li
                  onClick={() => navigate("/addresses")}
                  className="option-item"
                >
                  Addresses<i className="fa-solid fa-house-chimney"></i>
                </li>
                <li
                  onClick={() => navigate("/payment")}
                  className="option-item"
                >
                  Payment methods<i className="fa-solid fa-credit-card"></i>
                </li>
                <li
                  onClick={() => navigate("/account-detail")}
                  className="option-item"
                >
                  Account details<i className="fa-solid fa-user"></i>
                </li>
                <li onClick={() => dispatch(logout())} className="option-item">
                  Logout<i className="fa-solid fa-right-from-bracket"></i>
                </li>
              </ul>
              <div className="info">
                {/* <Dashboard /> */}
                <Routes>
                  <Route path="/dashboard" element={<Dashboard />} />
                  <Route path="/orders" element={<Orders />} />
                  <Route path="/download" element={<Download />} />
                  <Route path="/addresses" element={<Addresses />} />
                  <Route path="/payment" element={<Payment />} />
                  <Route path="/account-detail" element={<AccountDetail />} />
                </Routes>
              </div>
            </div>
          </div>
        </>
      ) : (
        <>
          <ListMenu />
          <Modal width={100} centered footer={null} visible={loading}>
            <SyncLoader color={"#333333"} loading={loading} size={10} />
          </Modal>
          <div className="container">
            <Breadcrumb style={{ padding: "15px 0" }} separator=">">
              <Breadcrumb.Item style={{ color: "#000", cursor: "pointer" }}>
                Home
              </Breadcrumb.Item>
              <Breadcrumb.Item href="">My Account</Breadcrumb.Item>
            </Breadcrumb>

            {error && (
              <Alert
                style={{ marginBottom: "20px" }}
                message="Invalid input or your email is already existed"
                // description=""
                type="error"
                closable
                onClose={onClose}
              />
            )}

            <div
              style={{ display: "flex", justifyContent: "space-between" }}
              className="wrapper-form"
            >
              <Login />
              <Register />
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default MyAccount;
