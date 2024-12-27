export const taskData = [
  {
    "id": "1",
    "title": "Design Landing Page",
    "description": "Create the design for the new landing page.",
    "status": "To Do",
    "priority": "High",
    "category": "Design",
    "dueDate": "2024-12-31",
    "assignee": "John Doe"
  },
  {
    "id": "2",
    "title": "Fix Login Bug",
    "description": "Resolve the issue with user login on mobile devices.",
    "status": "In Progress",
    "priority": "Medium",
    "category": "Development",
    "dueDate": "2024-12-28",
    "assignee": "Jane Smith"
  },
  {
    "id": "3",
    "title": "Write Blog Post",
    "description": "Draft a blog post about task management best practices.",
    "status": "To Do",
    "priority": "Low",
    "category": "Content",
    "dueDate": "2024-12-29",
    "assignee": "Chris Lee"
  },
  {
    "id": "4",
    "title": "Conduct User Testing",
    "description": "Run usability tests on the new dashboard layout.",
    "status": "Completed",
    "priority": "High",
    "category": "Testing",
    "dueDate": "2024-12-25",
    "assignee": "Sara Connor"
  }
]

export const analyticsData = {
  "completedTasks": 45,
  "pendingTasks": 20,
  "overdueTasks": 5,
  "productivityRate": 75,
  "teamProgress": [
    {
      "member": "John Doe",
      "tasksCompleted": 10,
      "tasksAssigned": 12
    },
    {
      "member": "Jane Smith",
      "tasksCompleted": 15,
      "tasksAssigned": 20
    },
    {
      "member": "Chris Lee",
      "tasksCompleted": 8,
      "tasksAssigned": 10
    },
    {
      "member": "Sara Connor",
      "tasksCompleted": 12,
      "tasksAssigned": 13
    }
  ]
}
export const dummyUsers = [
  { id: '1', name: 'Priyanka Dumasia', initials: 'PD', color: '#FF5733' },
  { id: '2', name: 'Amit Desai', initials: 'AD', color: '#33B5FF' },
  { id: '3', name: 'Ankit Mehta', initials: 'AM', color: '#FF33D4' },
  { id: '4', name: 'Arjun Patel', initials: 'AP', color: '#33FF57' },
  { id: '5', name: 'John Doe', initials: 'JD', color: '#FFC300' },
];
export const dummyTasks = [
  {
    id: 1,
    title: 'Implement Login Page',
    description: 'Design and implement the login functionality with validation.',
    status: 'In Progress',
    priority: 'High',
    dueDate: '2024-12-30',
    assignedUserIds: 2,
  },
  {
    id: 2,
    title: 'Set up Database',
    description: 'Create the initial database schema and seed data.',
    status: 'To Do',
    priority: 'Medium',
    dueDate: '2024-12-29',
    assignedUserIds: 3,
  },
  {
    id: 3,
    title: 'UI Design for Dashboard',
    description: 'Design the user interface for the dashboard screen.',
    status: 'To Do',
    priority: 'Low',
    dueDate: '2025-01-05',
    assignedUserIds: 5,
  },
  {
    id: 4,
    title: 'Fix Bug #123',
    description: 'Resolve the issue with API timeout for long queries.',
    status: 'Completed',
    priority: 'High',
    dueDate: '2024-12-20',
    assignedUserIds: null,
  },
];

export const dummyTasksByStatus = {
  todo: [
    {
      id: '2',
      title: 'Set up Database',
      description: 'Create the initial database schema and seed data.',
      status: 'To Do',
      priority: 'Medium',
      dueDate: '2024-12-29',
      assignedUserId: 3,
    },
    {
      id: '3',
      title: 'UI Design for Dashboard',
      description: 'Design the user interface for the dashboard screen.',
      status: 'To Do',
      priority: 'Low',
      dueDate: '2025-01-05',
      assignedUserId: 5,
    },
  ],
  inProgress: [
    {
      id: '1',
      title: 'Implement Login Page',
      description: 'Design and implement the login functionality with validation.',
      status: 'In Progress',
      priority: 'High',
      dueDate: '2024-12-30',
      assignedUserId: 2,
    },
  ],
  qa: [
    {
      id: '5',
      title: 'Test New Features',
      description: 'Perform QA on new features to ensure they meet requirements.',
      status: 'QA',
      priority: 'Medium',
      dueDate: '2024-12-31',
      assignedUserId: null,
    },
  ],
  uat: [
    {
      id: '6',
      title: 'User Acceptance Testing',
      description: 'Test the application with end-users to validate requirements.',
      status: 'UAT',
      priority: 'Medium',
      dueDate: '2025-01-10',
      assignedUserId: 1,
    },
  ],
  rca: [
    {
      id: '7',
      title: 'Root Cause Analysis for Issue #456',
      description: 'Investigate and resolve the root cause of issue #456.',
      status: 'RCA',
      priority: 'Low',
      dueDate: '2025-01-05',
      assignedUserId: 4,
    },
  ],
  done: [
    {
      id: '4',
      title: 'Fix Bug #123',
      description: 'Resolve the issue with API timeout for long queries.',
      status: 'Completed',
      priority: 'High',
      dueDate: '2024-12-20',
      assignedUserId: null,
    },
  ],
};
