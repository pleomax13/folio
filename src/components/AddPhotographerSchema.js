import * as Yup from 'yup';

const AddPhotographerSchema = Yup.object().shape({
    fio: Yup.string()
        .min(4, 'Должны быть длиной не менее 4 символов')
        .required('Поле должно быть заполнено'),
    birthday: Yup.date()
        .max(new Date(max()), 'Ваш возраст должен быть не менее 16 лет')
        .required('Поле должно быть заполнено'),
    inform: Yup.string() 
});

function max() {
    let age = new Date();
            
    return age.setFullYear(age.getFullYear() - 16);
}

export default AddPhotographerSchema;