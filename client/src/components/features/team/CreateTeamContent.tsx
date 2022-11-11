import React from "react";
import { MdCreate } from "react-icons/md";
import { FIELDS } from "../../../constants/fields";

import Modal from "../../common/modal/_Modal";
import Form from "../../form/Form";
import { createTeam } from "../../../redux/team";
import { COMMON } from "../../../constants/common";

const CreateTeamContent = () => {
  return (
    <React.Fragment>
      <Modal.Header title={"Create A New Team"}>
        <MdCreate color={COMMON.COLORS.PURPLE} size={"1.4rem"} />
      </Modal.Header>
      <Modal.Body>
        <Form
          fields={FIELDS.CREATE_TEAM}
          reduxFunc={createTeam}
          validationFunc={() => console.log("here")}
        />
      </Modal.Body>
    </React.Fragment>
  );
};

export default CreateTeamContent;
