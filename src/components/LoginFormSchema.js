import * as Yup from 'yup';

const LoginFormSchema = Yup.object().shape({
    email: Yup.string()
        .email('Пожалуйста, введите корректный e-mail')
        .required('Поле должно быть заполнено'),
    password: Yup.string()
        .min(8, 'Должен быть длиной не менее 8 символов')
        .required('Поле должно быть заполнено')
});

export default LoginFormSchema;