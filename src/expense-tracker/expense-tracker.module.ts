import { Module } from '@nestjs/common';
import { ExpenseTrackerService } from './expense-tracker.service';
import { ExpenseTrackerController } from './expense-tracker.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { Budget, BudgetSchema, Goal, GoalSchema } from './schemas/expense-tracker-schema';
import { AuthModule } from 'src/auth/auth.module';

@Module({
  controllers: [ExpenseTrackerController],
  providers: [ExpenseTrackerService],
  imports: [
    MongooseModule.forFeature([{ name: Budget.name, schema: BudgetSchema }, { name: Goal.name, schema: GoalSchema }]),
    AuthModule,
  ],
})
export class ExpenseTrackerModule { }
