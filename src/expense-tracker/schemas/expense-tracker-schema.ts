import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { v4 as uuidv4 } from 'uuid';


@Schema({
    timestamps: true
})

export class Budget {
    @Prop({ default: uuidv4 })
    _id: string;
    @Prop()
    budgetName: string
    @Prop()
    budgetAmount: number
    @Prop()
    toDate: string
    @Prop()
    note: string
    @Prop()
    userId: string
    @Prop({ default: true })
    active: boolean
    @Prop({ default: false })
    archive: boolean
}

export const BudgetSchema = SchemaFactory.createForClass(Budget)
