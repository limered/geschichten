import DataLoader from './dataLoader';

export default class BookRepository{
    soundFiles = {};
    loader;

    getAudioPath(key){
        try{
            return this.soundFiles[key];
        }catch(e){
            return "";
        }
    }

    async load(){
        this.loader = new DataLoader();
        let files = await this.loader.getFileList();
        files.forEach(book => {
            book.forEach(item=>{
                this.soundFiles[item.name] = item.path;
            });
        });
        console.warn(this.soundFiles);
    }
}