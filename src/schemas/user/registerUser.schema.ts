import * as yup from "yup";

const schemaRegisterUser = yup.object().shape({
  fullName: yup.string().required(),
  cpf: yup
    .string()
    .required()
    .matches(
      /^(([0-9]{3}.[0-9]{3}.[0-9]{3}-[0-9]{2})|([0-9]{11}))$/,
      "CPF must contain only 11 numbers"
    ),
  password: yup
    .string()
    .required()
    .matches(
      /^.*(?=.{8,})((?=.*[!@#$%^&*()\-_=+{};:,<.>]){1})(?=.*\d)((?=.*[a-z]){1})((?=.*[A-Z]){1}).*$/,
      "Password must contain at least 8 characters, one uppercase, one number and one special case character"
    ),
  surname: yup.string(),
  genre: yup.string().required(),
  phone: yup.string(),
  address: yup.string(),
  observations: yup.string(),
  isAdm: yup.boolean().default(false),
  profilePhoto: yup.string(),
});

export default schemaRegisterUser;
