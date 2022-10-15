export const Validator = {
  signup: (inputs: {
    email: string;
    password: string;
    confirmPassword: string;
  }) => {
    const errors = [];
    const { email, password, confirmPassword } = inputs;
    if (password !== confirmPassword) {
      errors.push({ field: "password", message: "Passwords do not match" });
      errors.push({
        field: "confirmPassword",
        message: "Passwords do not match",
      });
    }

    console.log(errors);

    return errors;
  },
};
