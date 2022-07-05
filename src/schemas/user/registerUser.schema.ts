import * as yup from "yup";

const schemaRegister = yup.object().shape({
  fullname: yup.string().required(),
  cpf: yup.string().required(),
  password: yup.string().required(),
  surname: yup.string(),
  genre: yup.string().required(),
  phone: yup.string(),
  address: yup.string(),
  observations: yup.string(),
  isAdm: yup.boolean(),
  profilePhoto: yup.string(),
});

export default schemaRegister;
