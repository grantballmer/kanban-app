const FIELD_TYPES = {
  EMAIL: {
    id: "email",
    name: "email",
    type: "email",
    label: "Email",
    placeholder: "Enter your email",
    required: true,
  },
  PASSWORD: {
    id: "password",
    name: "password",
    type: "password",
    label: "Password",
    placeholder: "Enter your password",
    required: true,
  },
  CONFIRM_PASSWORD: {
    id: "confirmPassword",
    name: "confirmPassword",
    type: "password",
    label: "Confirm Password",
    placeholder: "Confirm your password",
    required: true,
  },
  TEAM: {
    id: "team",
    name: "team",
    type: "text",
    label: "Team Name",
    placeholder: "Enter the team name",
    required: true,
  },
};

export const FIELDS = {
  CREATE_BOARD: [
    {
      id: "board",
      name: "board",
      type: "text",
      label: "Board Name",
      placeholder: "Type here",
    },
    {
      id: "column-1",
      name: "column-1",
      type: "text",
      label: "Column 1 Name",
      placeholder: "Type here",
    },
  ],
  LOGIN: [FIELD_TYPES.EMAIL, FIELD_TYPES.PASSWORD],
  SIGNUP: [
    FIELD_TYPES.EMAIL,
    FIELD_TYPES.PASSWORD,
    FIELD_TYPES.CONFIRM_PASSWORD,
  ],
  JOIN_TEAM: [
    {
      id: "team",
      name: "team",
      type: "text",
      label: "Team Name",
      placeholder: "Enter the team name",
      required: true,
    },
    FIELD_TYPES.PASSWORD,
  ],
  CREATE_TEAM: [
    FIELD_TYPES.TEAM,
    FIELD_TYPES.PASSWORD,
    FIELD_TYPES.CONFIRM_PASSWORD,
  ],
};
