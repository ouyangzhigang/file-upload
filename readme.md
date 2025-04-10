# @ouyangzhigang/file-uploader

> A file uploader for front-end.

## Install

```bash
npm install @ouyangzhigang/file-uploader --save
```

## Usage

```js
import FileUploader from '@ouyangzhigang/file-uploader';

const fileUploader = new FileUploader({
  // ...
  // options});

fileUploader.upload(); // upload file(s) to server.
fileUploader.cancel(); // cancel upload.
fileUploader.destroy(); // destroy uploader.
fileUploader.getFileList(); // get file list.```


