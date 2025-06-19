// Passport-Buddy database initialization
db = db.getSiblingDB('passport_buddy');

// Create collections
db.createCollection('users');
db.createCollection('posts');
db.createCollection('flights');

// Create indexes
db.users.createIndex({ "email": 1 }, { unique: true });
db.users.createIndex({ "username": 1 }, { unique: true });
db.posts.createIndex({ "author": 1 });
db.flights.createIndex({ "user": 1 });

print("✅ Passport-Buddy database initialized");
