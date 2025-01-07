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
    @Prop()
    imageUrl: string
    @Prop({ default: true })
    active: boolean
    @Prop({ default: false })
    archive: boolean
    @Prop({ default: '' })
    currency: string
    @Prop({ default: [] })
    category: []
    @Prop({ default: false })
    oauth: boolean
}

export const UserSchema = SchemaFactory.createForClass(User)