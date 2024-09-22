import { PushData } from "./PushData";

export class SVBclient extends PushData{

    public apiurl: string;

    constructor(apiUrl:string){
        super();
        this.apiurl = apiUrl;
    }

    initApp(){

    }

}