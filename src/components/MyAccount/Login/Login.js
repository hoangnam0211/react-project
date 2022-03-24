import { Form, Input, Button } from "antd";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { login } from "../../../actions/userActions";
import "./login.scss";

const Login = () => {
  const dispatch = useDispatch();
  // const [email, setEmail] = useState("");
  // console.log(email);
  // useEffect(() => {
  //   const userEmail = localStorage.getItem("userEmail");
  //   console.log(userEmail);
  //   if (userEmail) setEmail(userEmail);
  // }, []);

  const onFinish = (values) => {
    dispatch(login(values));
  };

  return (
    <div className="Login">
      <h2 className="title">Login</h2>
      <p className="desc">Welcome back! Sign in to your account.</p>

      <Form
        name="basic"
        initialValues={{
          remember: true,
        }}
        onFinish={onFinish}
        autoComplete="off"
      >
        <Form.Item
          label="Email address *"
          name="email"
          rules={[
            {
              type: "email",
              required: true,
              message: "Please input your email!",
            },
          ]}
        >
          <Input />
          {/* <Input value={email} onChange={(e) => setEmail(e.target.value)} /> */}
        </Form.Item>

        <Form.Item
          label="Password *"
          name="password"
          rules={[
            {
              required: true,
              message: "Please input your password!",
            },
          ]}
        >
          <Input.Password />
        </Form.Item>

        {/* <Form.Item className="remember" valuePropName="checked" name="remember">
          <Checkbox>Remember me</Checkbox>
        </Form.Item> */}

        <Form.Item>
          <Button className="btn-login" htmlType="submit">
            Login
          </Button>
          <p>
            <a href="">Lost your password?</a>
          </p>
        </Form.Item>
      </Form>
    </div>
  );
};

export default Login;
