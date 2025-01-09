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
@Schema({ timestamps: true })
export class Goal {
    @Prop({ default: uuidv4 })
    _id: string;

    @Prop({ required: true })
    goalName: string;

    @Prop({ required: true })
    targetAmount: number;

    @Prop({ required: true })
    savingAmount: number;

    @Prop({ type: Date, required: true })
    savingDate: Date;

    @Prop({ type: Date, required: true })
    targetDate: Date;

    @Prop()
    description?: string;

    @Prop({ required: true })
    userId: string;

    @Prop({ default: true })
    active: boolean;

    @Prop({ default: false })
    archive: boolean;
}

export const GoalSchema = SchemaFactory.createForClass(Goal)

