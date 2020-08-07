"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _fs = _interopRequireDefault(require("fs"));

var _path = _interopRequireDefault(require("path"));

var _mime = _interopRequireDefault(require("mime"));

var _awsSdk = _interopRequireDefault(require("aws-sdk"));

var _upload = _interopRequireDefault(require("../../../../../config/upload"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

class DiskStorageProvider {
  constructor() {
    this.client = void 0;
    this.client = new _awsSdk.default.S3({
      region: 'us-east-1'
    });
  }

  async saveFile(file) {
    const originalPath = _path.default.resolve(_upload.default.tmpFolder, file);

    const ContentType = _mime.default.getType(originalPath);

    if (!ContentType) {
      throw new Error('File not found');
    }

    const fileContent = await _fs.default.promises.readFile(originalPath);
    await this.client.putObject({
      Bucket: _upload.default.config.aws.bucket,
      // Nome do bucket criado no AWS S3
      Key: file,
      // Nome com o qual será salvo o arquivo no S3, aqui usaremos o nome do prorpio arquivo local
      ACL: 'public-read',
      // Tipo de permissão para o arquivo, no caso leitura é  publica
      Body: fileContent,
      // Conteudo que será arquivado
      ContentType
    }).promise();
    await _fs.default.promises.unlink(originalPath);
    return file;
  }

  async deleteFile(file) {
    await this.client.deleteObject({
      Bucket: _upload.default.config.aws.bucket,
      // Nome do bucket criado no AWS S3
      Key: file // Nome com o qual será salvo o arquivo no S3, aqui usaremos o nome do prorpio arquivo local

    }).promise();
  }

}

exports.default = DiskStorageProvider;