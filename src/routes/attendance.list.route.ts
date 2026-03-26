import express from 'express';
import { AttendanceListController } from '../controlleries/attendance.list.controller'
import { AttendanceListService } from '../services/attendance.list.service';
import { AttendanceListRepository } from '../repositories/attendance.list.repository';

const router = express.Router();

const attendanceListRepository = new AttendanceListRepository()
const attendanceListService = new AttendanceListService(attendanceListRepository)
const attendanceListController = new AttendanceListController(attendanceListService)

router.get('/attendance', attendanceListController.getAll.bind(attendanceListController))
router.get('/attendace/:id', attendanceListController.getById.bind(attendanceListController))
router.post('/create/attendance', attendanceListController.createList.bind(attendanceListController))
router.put('/update/attendance', attendanceListController.updateList.bind(attendanceListController))
router.delete('/delete/attendance', attendanceListController.deleteList.bind(attendanceListController))

export { router }