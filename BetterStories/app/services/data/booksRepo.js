import DataLoader from './dataLoader';

export default class BookRepository{
    soundFiles = {};
    loader;

    hasPathForKey(key){
        return this.soundFiles.hasOwnProperty(key);
    }

    getAudioPath(key){
        return this.soundFiles[key];
    }

    async load(){
        this.loader = new DataLoader();
        let files = await this.loader.getFileList();
        files.forEach(book => { book.forEach(item=>{
                this.soundFiles[item.name] = item.path;
            });
        });
        console.warn(this.soundFiles);
    }
}