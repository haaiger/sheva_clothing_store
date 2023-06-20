import React, { useState } from "react";
import { UserOutlined, LockOutlined } from "@ant-design/icons";
import { Input, Checkbox, Button, Form } from "antd";
import { ISuccessAuth, IErrorAuth } from "../types";

/**
 * Компонент авторизации.
 */
const Login: React.FC = (): JSX.Element => {
  const [showText, setShowText] = useState<string | null>(null);

  const handleLogin = async ({
    email,
    password,
  }: {
    email: string;
    password: string;
  }) => {
    try {
      const response = await fetch("http://localhost:4000/signin", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        credentials: "include",
        body: JSON.stringify({ email, password }),
      });

      if (response.ok) {
        const data: ISuccessAuth | IErrorAuth = await response.json();
        setShowText(data.message);
        if (data.message === "Успешно авторизовались!") {
          const successData = data as ISuccessAuth;
          localStorage.setItem("token", successData.token);
          setTimeout(() => (window.location.href = "/"), 2000);
        }
      }
    } catch (error) {
      console.error("Ошибка регистрации: ", error);
    }
  };

  return (
    <>
      <h1>Авторизация</h1>

      <Form
        name="normal_login"
        className="login-form"
        initialValues={{ remember: true }}
        onFinish={handleLogin}
      >
        <Form.Item
          name="email"
          rules={[
            { required: true, message: "Пожалуйста, введите вашу почту!" },
          ]}
        >
          <Input
            prefix={<UserOutlined className="site-form-item-icon" />}
            placeholder="Почта"
          />
        </Form.Item>
        <Form.Item
          name="password"
          rules={[
            { required: true, message: "Пожалуйста, введите ваш пароль!" },
          ]}
        >
          <Input
            prefix={<LockOutlined className="site-form-item-icon" />}
            type="password"
            placeholder="Пароль"
          />
        </Form.Item>
        <Form.Item style={{ display: "flex", justifyContent: "center" }}>
          <Form.Item name="remember" valuePropName="checked" noStyle>
            <Checkbox>Запомнить</Checkbox>
          </Form.Item>

          <div>
            <a className="login-form-forgot" href="">
              Забыли пароль?
            </a>
          </div>
        </Form.Item>

        <Form.Item>
          <Button
            type="primary"
            htmlType="submit"
            className="login-form-button"
            style={{ width: "100%" }}
          >
            Авторизоваться
          </Button>
          <div>
            Или <a href="/registration">Зарегистрироваться</a>
          </div>
        </Form.Item>
      </Form>

      {showText && Boolean(Object.keys(showText).length !== 0) && (
        <p>{showText}</p>
      )}
    </>
  );
};

export default Login;
