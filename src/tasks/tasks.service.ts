import { Injectable } from '@nestjs/common';
import { tasks } from '@prisma/client';
import { PrismaService } from 'src/prisma.service';

@Injectable()
export class TasksService {
    constructor(private prisma: PrismaService){}

    async createTask(task: tasks): Promise<any>{
        const addTask = await this.prisma.tasks.create({
            data:{
                task_id: task.task_id,
                task_name: task.task_name,
                task_completed: task.task_completed,
            }
        })
        return addTask;
    }

    async getAllTask(): Promise<tasks[]>{
        return this.prisma.tasks.findMany();
    }

    async updateTask(id: number ,task:tasks): Promise<any>{
        const updateData = await this.prisma.tasks.update({
            where: {task_id: Number(id)},
            data:{
                task_name: task.task_name,
                task_completed: task.task_completed,
            }
        })
        return updateData;
    }
    async deleteTask(id: number): Promise<any>{
        const delData = await this.prisma.tasks.delete({
            where: {task_id: Number(id)},
        })
        return delData;
    }

    async findTaskbyName(task_name: string): Promise<any>{
        return this.prisma.tasks.findFirst({
            where:{task_name: String(task_name)},
        })
    }
}
