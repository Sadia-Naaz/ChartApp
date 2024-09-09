# ChartApp
1.1 Install PostgreSQL
If PostgreSQL is not installed, you can download it from here. Follow the installation instructions specific to your operating system.

1.2 Creating a Database
Once PostgreSQL is installed and running, follow these steps to create a new database:

Open psql (PostgreSQL's interactive terminal) by typing the following command:

bash
psql -U postgres
Create a new database:

sql

CREATE DATABASE my_database;
Connect to the database:

sql

\c my_database;

Create tables and insert sample data. For example, let's create a table to track product sales
Confirm that the data is inserted correctly

2. Connecting Cube.js to PostgreSQL
2.1 Install Cube.js CLI
2.2 Create a Cube.js Project
2.3 Configure Cube.js with PostgreSQL Connection
Navigate to the Cube.js project directory:
Open the .env file and update the connection details to match your PostgreSQL database:
2.4 Define a Data Schema for Cube.js
   In the schema/ folder, create a new file called Product.js:
   Start the Cube.js development server:
   Cube.js will now start and connect to your PostgreSQL database. You can access the Cube.js Playground at http://localhost:4000 to test queries.


To save and integrate the chart you’ve built on the Cube.js Playground into your React frontend, follow these steps:
1. Create a React Component
Once you have copied the code from the Playground, create a new React component in your frontend to render the chart.

For example, let’s assume you're making a Bar chart.
Create a BarChartComponent.js file in the src/components/ folder:
Copy the code from Cube.js Playground (Code tab).
Ensure the Cube.js API client (cubejsApi.js) is configured correctly.
Import the chart component into your main app and render it.
Run your app (npm start).
