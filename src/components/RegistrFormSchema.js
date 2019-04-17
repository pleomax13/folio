import * as Yup from 'yup';

const RegistrFormSchema = Yup.object().shape({
    email: Yup.string()
        .email('Пожалуйста, введите корректный e-mail')
        .required('Поле должно быть заполнено'),
    username: Yup.string()
        .min(4, 'Должно быть длиной не менее 4 символов')
        .max(20, 'Хорошая попытка, ни у кого нет такого длинного имени')
        .required('Поле должно быть заполнено'),
    password: Yup.string()
        .min(8, 'Должен быть длиной не менее 8 символов')
        .required('Поле должно быть заполнено')
});

export default RegistrFormSchema;