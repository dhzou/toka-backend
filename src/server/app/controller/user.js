'use strict';

const Controller = require('egg').Controller;

class UserController extends Controller {
  async login() {
    const { ctx } = this;
    // ctx.body = {username: 'admin', password: 'admin'};
     // return {username: 'admin', password: 'admin'};
  }
}

module.exports = UserController;
