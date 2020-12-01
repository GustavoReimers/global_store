const express = require('express');

const router = express.Router();
const purchaseControllers = require('./purchase.controllers');
const validation = require('./purchase.validation');

const validateWrap = require('../../utils/validation');

router.route('/')
  .get(purchaseControllers.getData)
  .post(validateWrap([validation.add, ['body']], purchaseControllers.add));

router.route('/:purchaseId')
  .patch(validateWrap([validation.update, ['body', 'params']], purchaseControllers.update))
  .get(validateWrap([validation.id, ['params']], purchaseControllers.getPurchase))
  .delete(validateWrap([validation.id, ['params']], purchaseControllers.deletePurchase));

module.exports = router;
