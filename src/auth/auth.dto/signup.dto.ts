import { IsEmail, IsNotEmpty, IsString } from "class-validator";

export class SignUpDto {
    @IsString()
    @IsNotEmpty()
    @IsEmail({}, {message:"Please Enter Valid Email"})
    readonly email: string;
    @IsString()
    @IsNotEmpty()
    readonly password: string;
    @IsString()
    @IsNotEmpty()
    readonly institute: string;
    @IsString()
    @IsNotEmpty()
    readonly name: string;
}