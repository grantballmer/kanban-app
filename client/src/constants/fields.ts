export const FIELD_TYPES = {
  TEXT: "text",
  EMAIL: "email",
  PASSWORD: "password",
  RADIO: "radio",
};

const STATIC_FIELDS = {
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
  CREATE_TASK: [
    {
      id: "columns",
      type: "radio",
      name: "columns",
      label: "Select which column to assign tasks to: ",
      placeholder: "",
    },
    {
      id: "task-1",
      name: "task-1",
      type: "text",
      label: "Task 1 Name",
      placeholder: "Type here",
    },
  ],
  CREATE_COLUMN: [
    {
      id: "column",
      name: "column",
      type: "text",
      label: "Column Name",
      placeholder: "Type here",
    },
    {
      id: "task-1",
      name: "task-1",
      type: "text",
      label: "Task 1 Name",
      placeholder: "Type here",
    },
  ],
  LOGIN: [STATIC_FIELDS.EMAIL, STATIC_FIELDS.PASSWORD],
  SIGNUP: [
    STATIC_FIELDS.EMAIL,
    STATIC_FIELDS.PASSWORD,
    STATIC_FIELDS.CONFIRM_PASSWORD,
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
    STATIC_FIELDS.PASSWORD,
  ],
  CREATE_TEAM: [
    STATIC_FIELDS.TEAM,
    STATIC_FIELDS.PASSWORD,
    STATIC_FIELDS.CONFIRM_PASSWORD,
  ],
};
