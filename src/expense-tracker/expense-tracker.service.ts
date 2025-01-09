import { HttpStatus, Injectable } from '@nestjs/common';
import { CreateExpenseTrackerDto, CreateGoalDto } from './dto/create-expense-tracker.dto';
import { UpdateExpenseTrackerDto } from './dto/update-expense-tracker.dto';
import { AuthToken } from 'src/middlewares/auth-token';
import { AuthMiddleware } from 'src/middlewares/auth.middleware';
import { Model } from 'mongoose';
import { Budget, Goal } from './schemas/expense-tracker-schema';
import { InjectModel } from '@nestjs/mongoose';
import { User } from 'src/auth/schemas/user.schema';
import { AuthModule } from 'src/auth/auth.module';
import { AuthService } from 'src/auth/auth.service';
import { ApiError } from 'src/errors/api-error';

@Injectable()
export class ExpenseTrackerService {
  constructor(
    @InjectModel(Budget.name) private budgetModel: Model<Budget>,
    @InjectModel(Goal.name) private goalModel: Model<Goal>,
    private userService: AuthService
  ) {
  }

  async create(createExpenseTrackerDto: CreateExpenseTrackerDto, req: any) {
    const findUserById = (await this.userService.findUserById(req._id)).data
    if (!findUserById.active) {
      throw new ApiError(HttpStatus.BAD_REQUEST, "User disabled")
    }
    const data = { ...createExpenseTrackerDto, ...{ userId: req._id } }
    const creation = await this.budgetModel.create(data)
    return creation
  }

  async getBudgetByUser(req: any) {
    const fetchdatas = await this.budgetModel.find({ userId: req._id })
    return fetchdatas
  }

  async createGoal(createGoalDto: CreateGoalDto, req: any) {

    const findUserById = (await this.userService.findUserById(req._id)).data
    if (!findUserById.active) {
      throw new ApiError(HttpStatus.BAD_REQUEST, "User disabled")
    }
    const data = { ...createGoalDto, ...{ userId: req._id } }
    const creation = await this.goalModel.create(data)
    return creation
  }

  async getGoalByUser(req: any) {
    const fetchdatas = await this.goalModel.find({ userId: req._id })
    return fetchdatas
  }

  findAll() {
    return `This action returns all expenseTracker`;
  }

  findOne(id: number) {
    return `This action returns a #${id} expenseTracker`;
  }

  update(id: number, updateExpenseTrackerDto: UpdateExpenseTrackerDto) {
    return `This action updates a #${id} expenseTracker`;
  }

  remove(id: number) {
    return `This action removes a #${id} expenseTracker`;
  }
}
