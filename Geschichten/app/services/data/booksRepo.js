import DataLoader from './dataLoader';

class BookRepository{
    books = {}; // { key:string, value:string }
    loader;

    getAudio(key){
        return this.books[key];
    }

    load(){
        loader = new DataLoader();
    }
}