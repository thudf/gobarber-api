import fs from 'fs';
import path from 'path';
import mime from 'mime';
import aws, { S3 } from 'aws-sdk';

import uploadConfig from '@config/upload';

import IStorageProvider from '../models/IStorageProvider';

export default class DiskStorageProvider implements IStorageProvider {
  private client: S3;

  constructor() {
    this.client = new aws.S3({
      region: 'us-east-1',
    });
  }

  public async saveFile(file: string): Promise<string> {
    const originalPath = path.resolve(uploadConfig.tmpFolder, file);

    const ContentType = mime.getType(originalPath);

    if (!ContentType) {
      throw new Error('File not found');
    }

    const fileContent = await fs.promises.readFile(originalPath);

    await this.client
      .putObject({
        Bucket: uploadConfig.config.aws.bucket, // Nome do bucket criado no AWS S3
        Key: file, // Nome com o qual será salvo o arquivo no S3, aqui usaremos o nome do prorpio arquivo local
        ACL: 'public-read', // Tipo de permissão para o arquivo, no caso leitura é  publica
        Body: fileContent, // Conteudo que será arquivado
        ContentType,
      })
      .promise();

    await fs.promises.unlink(originalPath);

    return file;
  }

  public async deleteFile(file: string): Promise<void> {
    await this.client
      .deleteObject({
        Bucket: uploadConfig.config.aws.bucket, // Nome do bucket criado no AWS S3
        Key: file, // Nome com o qual será salvo o arquivo no S3, aqui usaremos o nome do prorpio arquivo local
      })
      .promise();
  }
}
