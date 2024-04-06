// Connect to the desired MongoDB instance
conn = new Mongo();
db = conn.getDB("todo");

// Create 'lists' collection with sample data
db.lists.insertMany([
    {
        name: "List 1",
        created_at: new Date(),
        updated_at: new Date(),
        tasks: [
            {
                description: "Task 1 for List 1",
                created_at: new Date(),
                updated_at: new Date(),
            },
            {
                description: "Task 2 for List 1",
                created_at: new Date(),
                updated_at: new Date(),
            },
            {
                description: "Task 3 for List 1",
                created_at: new Date(),
                updated_at: new Date(),
            },
            {
                description: "Task 4 for List 1",
                created_at: new Date(),
                updated_at: new Date(),
            },
            {
                description: "Task 5 for List 1",
                created_at: new Date(),
                updated_at: new Date(),
            },
        ],
    },
    {
        name: "List 2",
        created_at: new Date(),
        updated_at: new Date(),
        tasks: [
            {
                description: "Task 1 for List 2",
                created_at: new Date(),
                updated_at: new Date(),
            },
            {
                description: "Task 2 for List 2",
                created_at: new Date(),
                updated_at: new Date(),
            },
            {
                description: "Task 3 for List 2",
                created_at: new Date(),
                updated_at: new Date(),
            },
            {
                description: "Task 4 for List 2",
                created_at: new Date(),
                updated_at: new Date(),
            },
            {
                description: "Task 5 for List 2",
                created_at: new Date(),
                updated_at: new Date(),
            },
        ],
    },
]);

print("Database and collections initialized!");
