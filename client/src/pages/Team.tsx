import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FaUserFriends } from "react-icons/fa";
import { ButtonProps } from "../types/components";
import { COMMON } from "../constants/common";
import { FIELDS } from "../constants/fields";
import { signup } from "../redux/auth";
import { Validator } from "../services/validation";

import AuthWrapper from "../components/layout/AuthWrapper";
import FormBox from "../components/form/FormBox";
import Form from "../components/form/Form";
import Logo from "../components/common/Logo";
import Modal from "../components/common/modal/_Modal";
import CreateTeamContent from "../components/features/team/CreateTeamContent";

const Team = () => {
  const [showModal, setShowModal] = useState(false);
  const buttons: ButtonProps[] = [
    {
      type: "button",
      buttonStyle: "primary",
      text: "+ Create New",
      onClick: () => setShowModal(true),
    },
    {
      type: "submit",
      buttonStyle: "primary",
      text: "Submit",
    },
  ];
  return (
    <AuthWrapper>
      <Modal isOpen={showModal} setIsOpen={setShowModal}>
        <CreateTeamContent />
      </Modal>
      <Logo />
      <FormBox size="medium">
        <FormBox.Header text={"Connect with team"}>
          <FaUserFriends color={COMMON.COLORS.PURPLE} size={"1.4rem"} />
        </FormBox.Header>
        <FormBox.Body>
          <p>
            Connect with your team by providing the team name and password below
            or create a new team.
          </p>
        </FormBox.Body>
        <Form
          fields={FIELDS.JOIN_TEAM}
          reduxFunc={signup}
          buttons={buttons}
          validationFunc={Validator.signup}
        />
      </FormBox>
    </AuthWrapper>
  );
};

export default Team;
