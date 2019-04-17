import * as Yup from 'yup';
import AddNewLotSchema from './AddNewLotSchema';

const EditLotSchema = AddNewLotSchema.clone().shape({
    dateStart: Yup.date()
        .required('Поле должно быть заполнено')
        .min(min(), 'Дата начала не может быть прошедшей')
});

function min() {
    let min = new Date();

    min.setDate(min.getDate()-1);
    return min;
}

export default EditLotSchema;