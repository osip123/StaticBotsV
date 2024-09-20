import { Injectable } from '@nestjs/common';
import { AuthDto } from './dto/auth-dto';
import { UserData } from 'data/Usersdata';


@Injectable()
export class AuthService {
  auth(dto:AuthDto){
      for(let i: number; i < UserData.length; i++){
        if(UserData[i].name === dto.name){
          if(UserData[i].password === dto.password){
            return UserData[i]
          }
          return{
            status: "139",
            data: "password not found"
          }
        }
        return {
            status: "159",
            data: "UserName not found"
        }
      }
  }
}
