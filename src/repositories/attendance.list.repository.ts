import { ResultSetHeader, RowDataPacket } from 'mysql2'
import { connection } from "../config/database/connection";

export class AttendanceListRepository {
    async attendanceAll() {
        const [rows] = await connection
        .promise()
        .query<RowDataPacket[]>('SELECT * FROM attendances')
        return rows
    }

    async attendanceById(id: number) {
        const attendance = await connection.promise().query(
            'SELECT * FROM attendances WHERE id=?',
            [id]
        )
        return attendance
    }

    async attendanceCreate(name: string) {
        const time = new Date().toLocaleTimeString('pt-br', {
                hour: '2-digit',
                minute: '2-digit',
                second: '2-digit'
        })

        const [newAttendance] = await connection.promise().query<ResultSetHeader>(
            'INSERT INTO attendances (name, time) VALUES (?, ?)',
            [name, time]
        )
        return {
            id: newAttendance.insertId,
            name: name,
            time: time
        }
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