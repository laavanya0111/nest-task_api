import { IsBoolean, IsNotEmpty, isNotEmpty, IsNumber, IsString } from "class-validator";

export class createTaskDto{
    @IsNumber()
    task_id: number;

    @IsString()
    @IsNotEmpty()
    task_name: string;

    @IsBoolean()
    task_completed: boolean;
}