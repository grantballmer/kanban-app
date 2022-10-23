import React from "react";
import { IoIosCheckmarkCircle } from "react-icons/io";
import { COMMON } from "../../../constants/common";

const FormSuccess = () => {
  return (
    <div className="flex-column justify-content-center align-items-center">
      <IoIosCheckmarkCircle color={COMMON.COLORS.SUCCESS_GREEN} size="8rem" />
      <p>Congratulations, your account has been successfully created</p>
    </div>
  );
};

export default FormSuccess;
