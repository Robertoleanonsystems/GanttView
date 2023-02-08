export function initTasks() {
  const currentDate = new Date();
  const tasks = [
    {
      start: new Date(currentDate.getFullYear(), currentDate.getMonth(), 1),
      end: new Date(currentDate.getFullYear(), currentDate.getMonth(), 15),
      name: "Loran",
      id: "ProjectSample",
      progress: 25,
      type: "project",
      hideChildren: true
    },
    {
      start: new Date(currentDate.getFullYear(), currentDate.getMonth(), 1),
      end: new Date(
        currentDate.getFullYear(),
        currentDate.getMonth(),
        2,
        12,
        28
      ),
      name: "StunBleed - Trip GLOBAL",
      id: "Task 0",
      progress: 45,
      type: "task",
      project: "ProjectSample"
    },
    {
      start: new Date(currentDate.getFullYear(), currentDate.getMonth(), 2),
      end: new Date(currentDate.getFullYear(), currentDate.getMonth(), 4, 0, 0),
      name: "Childjob type",
      id: "Task 1",
      progress: 0,
      //dependencies: ["Task 0"],
      type: "task",
      project: "ProjectSample"
    },
    {
      start: new Date(currentDate.getFullYear(), currentDate.getMonth(), 4),
      end: new Date(currentDate.getFullYear(), currentDate.getMonth(), 8, 0, 0),
      name: "Repeater Subjob",
      id: "Task 2",
      progress: 10,
      // dependencies: ["Task 1"],
      type: "task",
      project: "ProjectSample"
    },
    {
      start: new Date(currentDate.getFullYear(), currentDate.getMonth(), 8),
      end: new Date(currentDate.getFullYear(), currentDate.getMonth(), 9, 0, 0),
      name: "Repeater Subjob",
      id: "Task 3",
      progress: 0,
      // dependencies: ["Task 2"],
      type: "task",
      project: "ProjectSample"
    },
    {
      start: new Date(currentDate.getFullYear(), currentDate.getMonth(), 8),
      end: new Date(currentDate.getFullYear(), currentDate.getMonth(), 10),
      name: "Repeater Subjob",
      id: "Task 4",
      type: "task",
      progress: 70,
      // dependencies: ["Task 2"],
      project: "ProjectSample"
    },
    {
      start: new Date(currentDate.getFullYear(), currentDate.getMonth(), 15),
      end: new Date(currentDate.getFullYear(), currentDate.getMonth(), 15),
      name: "Repeater Subjob",
      id: "Task 6",
      progress: 0,//currentDate.getMonth(),
      type: "task",
      // dependencies: ["Task 4"],
      project: "ProjectSample"
    },
    {
      start: new Date(currentDate.getFullYear(), currentDate.getMonth(), 18),
      end: new Date(currentDate.getFullYear(), currentDate.getMonth(), 19),
      name: "Repeater Subjob",
      id: "Task 9",
      progress: 0,
      // isDisabled: true,
      type: "task",
      project: "ProjectSample"
    },
    {
      start: new Date(currentDate.getFullYear(), currentDate.getMonth(), 1),
      end: new Date(currentDate.getFullYear(), currentDate.getMonth(), 15),
      name: "CUXHAVEN",
      id: "ProjectSample2",
      progress: 25,
      type: "project",
      hideChildren: false
    },
    {
      start: new Date(currentDate.getFullYear(), currentDate.getMonth(), 18),
      end: new Date(currentDate.getFullYear(), currentDate.getMonth(), 19),
      name: "Repeater Subjob",
      id: "Task 10",
      progress: 0,
      // isDisabled: true,
      type: "task",
      project: "ProjectSample2"
    }
  ];
  return tasks;
}
export function getStartEndDateForProject(tasks, projectId) {
  const projectTasks = tasks.filter((t) => t.project === projectId);
  let start = projectTasks[0].start;
  let end = projectTasks[0].end;
  for (let i = 0; i < projectTasks.length; i++) {
    const task = projectTasks[i];
    if (start.getTime() > task.start.getTime()) {
      start = task.start;
    }
    if (end.getTime() < task.end.getTime()) {
      end = task.end;
    }
  }
  return [start, end];
}
