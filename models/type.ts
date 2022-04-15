export enum TaskTypeEnum {
  Basic,
  Urgent,
  Important,
}

type TaskType = keyof typeof TaskTypeEnum;

// https://exercism.org/tracks/typescript/exercises/resistor-color-duo/iterations?idx=3

export default TaskType;
