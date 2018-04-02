var RNFS = require('react-native-fs');

export default class DataLoader{
    async getFileList(){
        return await RNFS
            .readDir(RNFS.ExternalDirectoryPath)
            .then((folders)=>{
                return Promise.all(folders.map(item=>RNFS.readDir(item.path)));
            });
    }
}

// [{
// ctime:null,
// mtime:Date,
// name:string,
// path:/storage/emulated/0/Android/data/com.betterstories/files/buch,
// size:?
// },{
// ...
// }]