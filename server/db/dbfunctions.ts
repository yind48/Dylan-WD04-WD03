import connection from './connection.ts'
import { singleTask } from '../../client/models.ts'

export function getAllTasks() {
  return connection('tasks').select('id', 'tasks')
}

export function addTasks(newTasks: singleTask) {
  return connection('tasks').insert(newTasks).returning(['id', 'tasks'])
}

export function deleteTask(id: number) {
  return connection('tasks').where('id', id).del()
}
