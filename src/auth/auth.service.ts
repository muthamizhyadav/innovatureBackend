import { HttpStatus, Injectable } from '@nestjs/common';
import { AuthPaload } from './auth.dto/auth.dto';
import { User } from './schemas/user.schema';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { JwtService } from '@nestjs/jwt';
import { SignUpDto } from './auth.dto/signup.dto';
import * as bcrypt from 'bcrypt';
import { ApiError } from 'src/errors/api-error';
@Injectable()
export class AuthService {
    constructor(
        @InjectModel(User.name)
        private userModel: Model<User>,
        private jwtService: JwtService
    ) { }

    async signUp(SignUpDto: SignUpDto): Promise<{ user: any }> {
        const { email, password, confirmPassword, name, oauth } = SignUpDto;
        if (oauth) {
            const user = await this.userModel.create(SignUpDto)
            return {
                user: user
            }
        } else {
            const hashPwd = await bcrypt.hash(password, 10)
            let datas = {
                email, password: hashPwd, name
            }
            if (confirmPassword !== password) {
                throw new ApiError(HttpStatus.BAD_REQUEST, "Password doesn't match")
            }
            const user = await this.userModel.create(datas)
            return {
                user: user
            }
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
