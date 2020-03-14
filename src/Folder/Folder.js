const fs = require("fs");

let children = {
  name: "",
  children: [],
  type: "folder"
};

export class Folder {
  constructor(path) {
    const resource = fs.lstatSync(path);
    if (resource.isDirectory()) {
      const folder = fs.readdirSync(path);
      children.children = this.getFolderContent(folder, path);
      children.name = path;
      children.id = 0;
    }
  }

  getFolderContent(folder, path) {
    const children = [];
    folder.forEach((childrenInFolder, i) => {
      if (childrenInFolder.includes(".DS_Store")) {
        //ignore stupid shit file of mac
        return;
      }
      const childrenInFolderPath = path + "/" + childrenInFolder;
      const child = {
        path: childrenInFolderPath,
        name: childrenInFolder,
        id: i
      };
      if (fs.lstatSync(childrenInFolderPath).isDirectory()) {
        const folder = fs.readdirSync(childrenInFolderPath);
        child.children = this.getFolderContent(folder, childrenInFolderPath);
        child.type = "folder";
      } else {
        child.type = "file";
      }
      children.push(child);
    });
    return children;
  }

  getContent() {
    return this.children;
  }
}