import { Injectable } from '@nestjs/common';
import { AuthPaload } from './auth.dto/auth.dto';
import { User } from './schemas/user.schema';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { JwtService } from '@nestjs/jwt';
import { SignUpDto } from './auth.dto/signup.dto';
import * as bcrypt from 'bcrypt';
@Injectable()
export class AuthService {
    constructor(
        @InjectModel(User.name)
        private userModel: Model<User>,
        private jwtService: JwtService
    ) { }

    async signUp(SignUpDto: SignUpDto): Promise<{ token: string }> {
        const { email, password, institute, name } = SignUpDto;
        const hashPwd = await bcrypt.hash(password, 10)
        let datas = {
            email, password: hashPwd, institute, name
        }
        const user = await this.userModel.create(datas)
        const token = this.jwtService.sign({ id: user._id })
        return {
            token: token
        }
    }

    // async login(loginDto:AuthPaload):Promise <{token: string}>{
    //     const {email, password} = loginDto
    //     let findByEmail = await this.userModel.findOne({email:email})
    //     if(!findByEmail){

    //     }
    //     const isMatch = await bcrypt.compare(password, hash);
    // }

}
