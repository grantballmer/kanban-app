import React from "react";
import { Link } from "react-router-dom";
import { BiUserCircle } from "react-icons/bi";
import { COMMON } from "../constants/common";
import { FIELDS } from "../constants/fields";
import { ROUTES } from "../constants/routes";
import { signup } from "../redux/auth";

import AuthWrapper from "../components/layout/AuthWrapper";
import FormBox from "../components/common/form/FormBox";
import Form from "../components/common/form/Form";
import Logo from "../components/common/Logo";
import { Validator } from "../services/validation";

const Signup = () => {
  return (
    <AuthWrapper>
      <Logo />
      <FormBox size="medium">
        <FormBox.Header text={"Sign up"} className="margin-bottom-default">
          <BiUserCircle color={COMMON.COLORS.PURPLE} size={"1.4rem"} />
        </FormBox.Header>
        <FormBox.Body className="margin-bottom-default">
          <p>
            If you already have an account, you can log in{" "}
            <Link to={ROUTES.LOGIN}>here</Link>.
          </p>
        </FormBox.Body>
        <Form
          fields={FIELDS.SIGNUP}
          reduxFunc={signup}
          validationFunc={Validator.signup}
        />
      </FormBox>
    </AuthWrapper>
  );
};

export default Signup;
