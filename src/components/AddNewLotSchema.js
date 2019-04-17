import * as Yup from 'yup';

const AddNewLotSchema = Yup.object().shape({
    name: Yup.string()
        .required('Поле должно быть заполнено'),
    year: Yup.number()
        .max(max(), 'Год должен быть не позже нынешнего')
        .required('Поле должно быть заполнено'),
    startPrice: Yup.number()
        .min(0, 'Цена не может быть отрицательной')
        .required('Поле должно быть заполнено'),
    dateEnd: Yup.date()
        .min(new Date(), 'Дата окончания не может быть прошедшей')
        .required('Поле должно быть заполнено')
});

function max() {
    let year = new Date();

    return year.getFullYear();
}

export default AddNewLotSchema;