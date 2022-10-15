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
      id: "column",
      name: "column",
      type: "text",
      label: "Column Name",
      placeholder: "Type here",
    },
  ],
  LOGIN: [
    {
      id: "email",
      name: "email",
      type: "email",
      label: "Email",
      placeholder: "Enter your email",
      required: true,
    },
    {
      id: "password",
      name: "password",
      type: "password",
      label: "Password",
      placeholder: "Enter your password",
      required: true,
    },
  ],
  SIGNUP: [
    {
      id: "email",
      name: "email",
      type: "email",
      label: "Email",
      placeholder: "Enter your email",
      required: true,
    },
    {
      id: "password",
      name: "password",
      type: "password",
      label: "Password",
      placeholder: "Enter your password",
      required: true,
    },
    {
      id: "confirmPassword",
      name: "confirmPassword",
      type: "password",
      label: "Confirm Password",
      placeholder: "Confirm your password",
      required: true,
    },
  ],
};
