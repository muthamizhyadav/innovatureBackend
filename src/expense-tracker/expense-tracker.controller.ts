import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards, Request } from '@nestjs/common';
import { ExpenseTrackerService } from './expense-tracker.service';
import { CreateExpenseTrackerDto, CreateGoalDto } from './dto/create-expense-tracker.dto';
import { UpdateExpenseTrackerDto } from './dto/update-expense-tracker.dto';

@Controller('expense-tracker')
export class ExpenseTrackerController {
  constructor(private readonly expenseTrackerService: ExpenseTrackerService) { }

  @Post()
  create(@Body() createExpenseTrackerDto: CreateExpenseTrackerDto, @Request() req) {
    return this.expenseTrackerService.create(createExpenseTrackerDto, req.user);
  }

  @Get('get')
  getBudgetsByUser(@Request() req) {
    return this.expenseTrackerService.getBudgetByUser(req.user)
  }

  @Post("goal")
  createGoal(@Body() createGoalDto: CreateGoalDto, @Request() req) {
    return this.expenseTrackerService.createGoal(createGoalDto, req.user);
  }

  @Get('goal')
  getGoalByUser(@Request() req) {
    return this.expenseTrackerService.getGoalByUser(req.user)
  }

  @Get()
  findAll() {
    return this.expenseTrackerService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.expenseTrackerService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateExpenseTrackerDto: UpdateExpenseTrackerDto) {
    return this.expenseTrackerService.update(+id, updateExpenseTrackerDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.expenseTrackerService.remove(+id);
  }
}
