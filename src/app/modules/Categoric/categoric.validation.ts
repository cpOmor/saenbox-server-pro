// import { z } from 'zod';

import { z } from 'zod';

export const mainCategoryValidationSchema = z.object({
  body: z.object({
    mainCategory: z.string(),
  }),
});

// const updateUserNameValidationSchema = z.object({
//   firstName: z.string().min(3).max(20).optional(),
//   middleName: z.string().min(3).max(20).optional(),
//   lastName: z.string().min(3).max(20).optional(),
// });

// export const updateAdminValidationSchema = z.object({
//   body: z.object({
//     admin: z.object({
//       name: updateUserNameValidationSchema,
//       designation: z.string().max(30).optional(),
//       gender: z.enum([...Gender] as [string, ...string[]]).optional(),
//       dateOfBirth: z.string().optional(),
//       email: z.string().email().optional(),
//       contactNo: z.string().optional(),
//       emergencyContactNo: z.string().optional(),
//       bloodGroup: z.enum([...BloodGroup] as [string, ...string[]]).optional(),
//       presentAddress: z.string().optional(),
//       permanentAddress: z.string().optional(),
//       // profileImg: z.string().optional(),
//     }),
//   }),
// });

// export const AdminValidations = {
//   createAdminValidationSchema,
//   updateAdminValidationSchema,
// };
