import { AttendanceListRepository } from '../repositories/attendance.list.repository'

export class AttendanceListService {

    constructor(private attendanceListReposty: AttendanceListRepository) {
        this.attendanceListReposty = new AttendanceListRepository()
    }

    public async execute() {
        const attendanceAll = await this.attendanceListReposty.attendanceAll()

        if(!attendanceAll) {
            throw new Error("Não foi possível encontrar a lista de presença")
        }

        return attendanceAll;
    }

    public async find(id: number) {
        const attendanceById = await this.attendanceListReposty.attendanceById(id)
        if(!attendanceById) {
            throw new Error(`Não foi possível localizar a sua lista por esse ${id}`)
        }
        return attendanceById
    }

    public async create(name: string) {
        if(!name || name.trim() === "") {
            throw new Error("O nome é obrigatório")
        }
        
        const create = await this.attendanceListReposty.attendanceCreate(name)
        if(!create) {
            throw new Error("Não foi possível criar a sua lista")
        }
        return create;
    }

    public async update(id: number, name: string) {
        const update = await this.attendanceListReposty.attendanceUpdate(id, name);
        if(!update) {
            throw new Error(`Não foi possível encontrar essa lista por esse ${id}`)
        }        
        return update
    }

    public async deleteList(id: number) {
        const deleteAttendance = await this.attendanceListReposty.attendanceDelete(id);
        if(!deleteAttendance) {
            throw new Error(`Não foi possível encontrar essa lista por esse ${id}`)
        }        
        return deleteAttendance
    }
}