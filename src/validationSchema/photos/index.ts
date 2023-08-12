import * as yup from 'yup';

export const photoValidationSchema = yup.object().shape({
  photo_url: yup.string().required(),
  user_id: yup.string().nullable().required(),
});
