"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _tsyringe = require("tsyringe");

var _ResetPasswordService = _interopRequireDefault(require("../../../services/ResetPasswordService"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

class SessrionsController {
  async create(request, response) {
    const {
      token,
      password
    } = request.body;

    const restPassword = _tsyringe.container.resolve(_ResetPasswordService.default);

    await restPassword.execute({
      token,
      password
    });
    return response.status(204).json();
  }

}

exports.default = SessrionsController;