import { FileUploader } from "./file-uploader.class.ts";
export default class Uploader extends FileUploader {
  constructor(options: any) {
    super(options);
    this.setOptions(options);
  }

  
};
