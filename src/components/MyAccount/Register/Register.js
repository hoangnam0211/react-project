import { useDispatch } from "react-redux";
import "./register.scss";
import { register } from "../../../actions/userActions";
import { Form, Input, Button } from "antd";

const Register = () => {
  const [form] = Form.useForm();
  const dispatch = useDispatch();
  const onFinish = async (values) => {
    dispatch(register(values));
  };

  return (
    <div className="Register">
      <h2 className="title">Register</h2>
      <p className="desc">
        Create new account today to reap the benefits of a personalized shopping
        experience.
      </p>

      <Form form={form} name="register" onFinish={onFinish} scrollToFirstError>
        <Form.Item
          name="username"
          label="Username *"
          rules={[
            {
              required: true,
              message: "Please input your username!",
              whitespace: true,
            },
          ]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          name="email"
          label="E-mail *"
          rules={[
            {
              type: "email",
              message: "The input is not valid E-mail!",
            },
            {
              required: true,
              message: "Please input your E-mail!",
            },
          ]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          name="password"
          label="Password *"
          rules={[
            {
              required: true,
              message: "Please input your password!",
            },
          ]}
          hasFeedback
        >
          <Input.Password />
        </Form.Item>

        <p>
          Your personal data will be used to support your experience throughout
          this website, to manage access to your account, and for other purposes
          described in our privacy policy.
        </p>

        <Form.Item>
          <Button className="btn-register" htmlType="submit">
            Register
          </Button>
        </Form.Item>
      </Form>

      <div className="sign-up">
        <h3>Sign up today and you will be able to :</h3>
        <ul>
          <li>Speed your way through checkout</li>
          <li>Track your orders easily</li>
          <li>Keep a record of all your purchases</li>
        </ul>
      </div>
    </div>
  );
};

export default Register;
