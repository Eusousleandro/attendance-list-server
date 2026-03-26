import { connection } from "../config/database/connection";

export class AttendanceListRepository {
    async attendanceAll() {
        const attendance = await connection.promise().query(
            'SELECT * FROM attendances',
        )
        return attendance
    }

    async attendanceById(id: number) {
        const attendance = await connection.promise().query(
            'SELECT * FROM attendances WHERE id=?',
            [id]
        )
        return attendance
    }

    async attendanceCreate(name: string) {
        const newAttendance = await connection.promise().query(
            'INSERT INTO attendances (name) VALUES (?)',
            [name, new Date()]
        )
        return newAttendance
    }

    async attendanceUpdate(id: number, name: string) {
        const updateAttendance = await connection.promise().query('UPDATE attendances SET name=? WHERE id=?',
            [name, id]
        )
        return updateAttendance
    }

    async attendanceDelete(id: number) {
        const deleteAttendance = await connection.promise().query(
            'DELETE FROM attendances WHERE id=?',
            [id]
        )
        return deleteAttendance
    }
}