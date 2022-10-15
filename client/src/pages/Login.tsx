import React from "react";
import AuthWrapper from "../components/layout/AuthWrapper";
import VerticalBox from "../components/common/VerticalBox";
import Form from "../components/common/form/Form";
import { FIELDS } from "../constants/fields";

const Login = () => {
  return (
    <AuthWrapper>
      <VerticalBox size="medium">
        <Form fields={FIELDS.LOGIN} reduxFunc={() => console.log("here")} />
      </VerticalBox>
    </AuthWrapper>
  );
};

export default Login;
