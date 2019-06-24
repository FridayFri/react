'use strict';

const Controller = require('egg').Controller;

class ApiController extends Controller {
  async index() {
    const { ctx } = this;
    ctx.body = 'hi, api';
  }
}

module.exports = ApiController;
