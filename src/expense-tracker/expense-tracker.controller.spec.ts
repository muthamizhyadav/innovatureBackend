import { Test, TestingModule } from '@nestjs/testing';
import { ExpenseTrackerController } from './expense-tracker.controller';
import { ExpenseTrackerService } from './expense-tracker.service';

describe('ExpenseTrackerController', () => {
  let controller: ExpenseTrackerController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ExpenseTrackerController],
      providers: [ExpenseTrackerService],
    }).compile();

    controller = module.get<ExpenseTrackerController>(ExpenseTrackerController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
