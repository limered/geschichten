var RNFS = require('react-native-fs');

export default class DataLoader{
    async getFileList(){
        await RNFS.mkdir(RNFS.ExternalStorageDirectoryPath + '/BetterStories');

        return await RNFS
            .readDir(RNFS.ExternalStorageDirectoryPath + '/BetterStories')
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