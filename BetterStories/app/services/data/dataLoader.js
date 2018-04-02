var RNFS = require('react-native-fs');

export default class DataLoader{
    getFileList(){
        return RNFS.readDir(RNFS.DocumentDirectoryPath)
            .then((res)=>{
                console.console.log('====================================');
                console.log(res);
                console.log('====================================');
                return res;
            })
    }
}