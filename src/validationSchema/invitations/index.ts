import * as yup from 'yup';

export const invitationValidationSchema = yup.object().shape({
  organization_id: yup.string().nullable().required(),
  team_member_id: yup.string().nullable().required(),
});
