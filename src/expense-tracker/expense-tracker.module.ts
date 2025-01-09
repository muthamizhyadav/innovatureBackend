import { Module } from '@nestjs/common';
import { ExpenseTrackerService } from './expense-tracker.service';
import { ExpenseTrackerController } from './expense-tracker.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { Budget, BudgetSchema } from './schemas/expense-tracker-schema';
import { AuthModule } from 'src/auth/auth.module';
import { User, UserSchema } from 'src/auth/schemas/user.schema';

@Module({
  controllers: [ExpenseTrackerController],
  providers: [ExpenseTrackerService],
  imports: [
    MongooseModule.forFeature([{ name: Budget.name, schema: BudgetSchema }, { name: User.name, schema: UserSchema }]),
    AuthModule,
  ],
})
export class ExpenseTrackerModule { }
