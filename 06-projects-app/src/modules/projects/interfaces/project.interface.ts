export interface Project {
  [x: string]: any;
  id: string;
  name: string;
  tasks: Task[];
}

export interface Task {
  id: string;
  name: string;
  completedAt?: Date;
}
