import axios from 'axios'

import * as fs from 'fs'

export class PushData{

    setData(url:string, data:any){

        let ret: any;

        axios.post(`${url}/tickets/create`, data).then(res => {
            ret = res
        }).catch(err => {
            console.warn(err);
        }

        )

        return ret
    }

    getData(url:string){
        axios.get(`${url}/tickets/create`).then(res => {
            return res
        }).catch(err => {
            console.warn(err)
        })
    }

    getDataToTXT(path:string, url:string){
        axios.get(`${url}/get-data//to-txt`).then(res => {
            fs.writeFile(path, res.data, err => {
                console.warn(`errro write file ${err}`)
            })
        })
    }

}