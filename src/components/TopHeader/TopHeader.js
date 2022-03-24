import { useNavigate } from "react-router-dom";
import {
  EnvironmentOutlined,
  CarOutlined,
  ShoppingOutlined,
  UserOutlined,
} from "@ant-design/icons";
import "./TopHeader.scss";

const TopHeader = () => {
  const navigate = useNavigate();

  return (
    <div className="TopHeader">
      <div className="container">
        <div className="wrapper">
          <a href="#">Welcome to Worldwide Electronics Store</a>
          <ul className="list-items">
            <li className="item">
              <a href="">
                <EnvironmentOutlined /> Store Location
              </a>
            </li>
            <li className="item">
              <a href="">
                <CarOutlined /> Track Your Order
              </a>
            </li>
            <li className="item">
              <a href="">
                <ShoppingOutlined /> Shop
              </a>
            </li>
            <li className="item" onClick={() => navigate("/my-account")}>
              <a href="">
                <UserOutlined /> My Account
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default TopHeader;
