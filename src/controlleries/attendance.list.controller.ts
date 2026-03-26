import { Request, Response } from "express";
import { AttendanceListService } from "../services/attendance.list.service";
import { AttendanceListRepository } from "../repositories/attendance.list.repository";

export class AttendanceListController {
    constructor(private attendanceListService: AttendanceListService) { }
    
    async getAll(request: Request, response: Response) {
        try {
            const attendance = await this.attendanceListService.execute()
            response.status(200).json({
                error: false,
                message: "A suas listas de presenças",
                attendance
            })
        } catch (error: any) {
            console.error(error)
            response.status(500).json({
                error: true,
                message: error.messgae
            })
        }
    }

    async getById(request: Request, response: Response) {
        try {
            const id = Number(request.params.id)
            const attendanceById = await this.attendanceListService.find(id)
            return response.status(201).json({
                error: false,
                message: 'A sua lista de presença', 
                attendanceById
            })
        } catch (error: any) {
            console.error(error)
            response.status(500).json({
                error: true,
                message: error.messgae
            })
        }
    }

    async createList(request: Request, response: Response) {
        try {
            const bodyList = request.body
            const attendance = await this.attendanceListService.create(bodyList)
            return response.status(201).json({
                error: false,
                message: "A sua lista foi criado com sucesso",
                attendance
            })
        } catch (error: any) {
            console.error(error)
            response.status(500).json({
                error: true,
                message: error.messgae
            })
        }
    }

    async updateList(request: Request, response: Response) {
        try {
            const id = Number(request.params.id)
            const bodyAttendance = request.body
            const updateList = await this.attendanceListService.update(id, bodyAttendance)
            return response.status(201).json({
                error: false,
                message: "A sua lista foi atualizada com sucesso",
                updateList
            })
        } catch (error: any) {
            console.error(error)
            response.status(500).json({
                error: true,
                message: error.messgae
            })
        }
    }

    async deleteList(request: Request, response: Response) {
        try {
            const id = Number(request.params.id)
            const deleteList = await this.attendanceListService.deleteList(id)
            return response.status(201).json({
                error: false,
                message: "A sua lista foi deletada com sucesso",
                deleteList
            })
        } catch (error: any) {
            console.error(error)
            response.status(500).json({
                error: true,
                message: error.messgae
            })
        }
    }
}