const wrapper = (schema, fields, func) => async (req, res, next) => {
  try {
    const dataToValidate = fields instanceof Array
      ? fields.reduce((acc, field) => ({ ...acc, ...req[field], }), {})
      : req[fields];
    const result = schema.validate(dataToValidate);
    if (result.error) return res.status(500).send(result.error);
    return await func(req, res, next);
  }
  catch (err) {
    return next(err);
  }
};

const validateWrap = ([schema, fields], func) => wrapper(schema, fields, func);

module.exports = validateWrap;
