const fs = require("fs");

export class Folder {
  content = [];

  constructor(path) {
    const resource = fs.lstatSync("/Users/allwka/Desktop/anime");
    if (resource.isDirectory()) {
      const folder = fs.readdirSync(path);
      folder.forEach(contentInFolder => {
        const contentInFolderPath = path + "/" + contentInFolder;
        if (fs.lstatSync(contentInFolderPath).isDirectory()) {
          this.content.push(new Folder(contentInFolderPath));
        } else {
          this.content.push(contentInFolderPath);
        }
      });
    } else if (resource.isFile()) {
      this.content.push(path);
    }
  }
}
