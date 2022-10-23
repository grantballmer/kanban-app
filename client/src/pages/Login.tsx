import React from "react";
import { Link } from "react-router-dom";
import { FaUserCircle } from "react-icons/fa";
import { COMMON } from "../constants/common";
import { FIELDS } from "../constants/fields";
import { ROUTES } from "../constants/routes";
import { login } from "../redux/auth";

import AuthWrapper from "../components/layout/AuthWrapper";
import FormBox from "../components/common/form/FormBox";
import Form from "../components/common/form/Form";
import Logo from "../components/common/Logo";

const Login = () => {
  const validate = (inputs: { email: string; password: string }) => {
    console.log(inputs);
  };

  return (
    <AuthWrapper>
      <Logo />
      <FormBox size="medium">
        <FormBox.Header text={"Log in"}>
          <FaUserCircle color={COMMON.COLORS.PURPLE} size={"1.4rem"} />
        </FormBox.Header>
        <FormBox.Body>
          <p>
            If you don't already have an account, you can register{" "}
            <Link to={ROUTES.SIGNUP}>here</Link>.
          </p>
        </FormBox.Body>
        <Form
          fields={FIELDS.LOGIN}
          reduxFunc={login}
          redirectPath={"/"}
          validationFunc={validate}
        />
      </FormBox>
    </AuthWrapper>
  );
};

export default Login;
