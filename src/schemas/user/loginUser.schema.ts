import * as yup from "yup";

const loginUserShape = yup.object().shape({
  cpf: yup.string().required(),
  password: yup.string().required(),
});

export default loginUserShape;
