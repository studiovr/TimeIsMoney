import FS from "react-native-fs";

export function SaveFile(content: string): any {

    var path = FS.DocumentDirectoryPath + '/test.txt';

    FS.writeFile(path, content, 'utf8')
        .then((success) => {
            console.log('FILE WRITTEN!', success);
        })
        .catch((err) => {
            console.log(err.message);
        });

}

export function ReadFile(): any {

    var path = FS.DocumentDirectoryPath + '/test.txt';

    FS.readFile(path)
        .then((success) => {
            console.log('FILE READ!', success);
        })
        .catch((err) => {
            console.log(err.message);
        });

}