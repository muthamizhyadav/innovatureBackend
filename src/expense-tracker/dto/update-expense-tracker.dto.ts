import { PartialType } from '@nestjs/mapped-types';
import { CreateExpenseTrackerDto } from './create-expense-tracker.dto';

export class UpdateExpenseTrackerDto extends PartialType(CreateExpenseTrackerDto) {}
