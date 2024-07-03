import { Task } from '@prisma/client'
import React from 'react'

const Completion = ({task}: {task: Task}) => {
  return (
    <span className="p1 rounded-xl text-gray-700 leading-tight text-sm cursor-pointer bg-orange-200">
        Open
    </span>
  )
}

export default Completion