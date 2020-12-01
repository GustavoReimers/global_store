const Joi = require('@hapi/joi');

module.exports = {
  add: Joi.object({
    category: Joi
      .string()
      .required(),
    amount: Joi
      .number()
      .required(),
    userId: Joi
      .number()
      .required(),
  }),

  update: Joi.object({
    category: Joi
      .string()
      .required(),
    amount: Joi
      .number()
      .required(),
    purchaseId: Joi
      .string()
      .regex(/^\d+$/)
      .required(),
  }),

  id: Joi.object({
    purchaseId: Joi
      .string()
      .regex(/^\d+$/)
      .required(),
  }),
};
