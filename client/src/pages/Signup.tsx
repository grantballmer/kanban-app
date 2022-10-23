import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaUserCircle } from "react-icons/fa";
import { COMMON } from "../constants/common";
import { FIELDS } from "../constants/fields";
import { ROUTES } from "../constants/routes";
import { signup } from "../redux/auth";

import AuthWrapper from "../components/layout/AuthWrapper";
import FormBox from "../components/common/form/FormBox";
import Form from "../components/common/form/Form";
import Logo from "../components/common/Logo";
import { Validator } from "../services/validation";
import { useSelector } from "react-redux";
import { RootState } from "../redux/store";
import FormSuccess from "../components/common/form/FormSuccess";

const Signup = () => {
  const auth = useSelector((state: RootState) => state.auth);
  const [success, setSuccess] = useState(false);

  return (
    <AuthWrapper>
      <Logo />
      <FormBox size="medium">
        {!success && (
          <>
            <FormBox.Header text={"Sign up"}>
              <FaUserCircle color={COMMON.COLORS.PURPLE} size={"1.4rem"} />
            </FormBox.Header>
            <FormBox.Body>
              <p>
                If you already have an account, you can log in{" "}
                <Link to={ROUTES.LOGIN}>here</Link>.
              </p>
            </FormBox.Body>

            <Form
              fields={FIELDS.SIGNUP}
              reduxFunc={signup}
              redirectPath={ROUTES.CREATE_TEAM}
              setSuccess={setSuccess}
              validationFunc={Validator.signup}
            />
          </>
        )}

        {success && <FormSuccess />}
      </FormBox>
    </AuthWrapper>
  );
};

export default Signup;
