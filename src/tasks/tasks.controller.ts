import { Body, Controller, Delete, Get, Param, Post, Put, Query } from '@nestjs/common';
import { IsFQDN } from 'class-validator';
//import { tasks } from '@prisma/client';
import { BaseController } from 'core/base.controller';
import { PrismaService } from 'src/prisma.service';
import { createTaskDto } from './dto/createtask.dto';
import { TasksService } from './tasks.service';

@Controller('tasks')
export class TasksController extends BaseController{
    constructor(private readonly taskservice: TasksService){
        super();
    }

    @Post('/create')
    async createTask(@Body() createtaskdto: createTaskDto): Promise<any>{
        return this.standardResponse(
            await this.taskservice.createTask(createtaskdto)
        );
    }

    @Get('/get')
    async getAllTask(@Query('search') search:string):Promise<any>{
        console.log(search);
        if(search){
            return this.taskservice.findTaskbyName(search);
        }
        return this.taskservice.getAllTask();
    }

    @Put(":id")
    async updateTask(@Param('id') id: number, @Body() createtaskdto: createTaskDto): Promise<any>{
        return this.standardResponse(
            await this.taskservice.updateTask(id, createtaskdto)
        );
    }

    @Delete(':id')
    async deleteTask(@Param('id') id: number): Promise<any>{
        return this.taskservice.deleteTask(id);
    }

    //@Get('/filter')
    //async findTaskbyName(@Query('search') search: string): Promise<any>{
    //    console.log(search)
    //    return this.taskservice.findTaskbyName(search);
    //}
}
