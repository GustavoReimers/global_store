const express = require('express');

const router = express.Router();
const recordItems = require('./item.controllers');
const validation = require('./item.validation');

const validateWrap = require('../../utils/validation');

router.route('/')
  .get(recordItems.getData)
  .post(validateWrap([validation.add, ['body']], recordItems.add));

router.post('/filter', validateWrap([validation.filter, ['body']], recordItems.filterData));

router.route('/:itemId')
  .patch(validateWrap([validation.update, ['body', 'params']], recordItems.update))
  .get(validateWrap([validation.id, ['params']], recordItems.getItem))
  .delete(validateWrap([validation.id, ['params']], recordItems.deleteItem));

module.exports = router;
