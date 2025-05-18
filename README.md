# task-manager-api
Technical Task – Backend Developer Role at Codexal

# Setup Instructions
1-Create the GitHub repository and clone it locally.

2-Initialize the project:
npm init -y

3-Install the required packages:
npm install express @prisma/client joi
npm install prisma --save-dev

4-Initialize Prisma:
npx prisma init

5-Set up the MySQL database (we used a Docker container on port 3307):
docker run -d --name mysql-taskmanager -e MYSQL_ROOT_PASSWORD=password -e MYSQL_DATABASE=taskmanager -e MYSQL_USER=user -e MYSQL_PASSWORD=password -p 3307:3306 mysql:8.0

5-In .env, set the database URL:
DATABASE_URL="mysql://root:password@localhost:3307/taskmanager"

6-Define the data models in prisma/schema.prisma and run migration:
npx prisma migrate dev --name init

7-Generate the Prisma client:
npx prisma generate

Build the app logic:
Create routes/, controllers/, and validators/ folders

8-Set up:
POST /users
POST /tasks
GET /users/:id/tasks
PATCH /tasks/:id

9-Import the routes to the main file(index.js)

10-Start the server:
node index.js

_________
Tests done using thunder extension in VS code.
