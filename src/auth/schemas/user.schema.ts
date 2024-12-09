import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { v4 as uuidv4 } from 'uuid';


@Schema({
    timestamps: true
})

export class User {
    @Prop({ default: uuidv4 })
    _id: string;

    @Prop()
    name: string

    @Prop({ unique: [true, "Duplicate Email Entered"] })
    email: string
    @Prop()
    password: string
    @Prop()
    institute: string
}

export const UserSchema = SchemaFactory.createForClass(User)