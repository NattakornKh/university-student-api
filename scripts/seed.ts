const { db } = require('@vercel/postgres');
import { Student } from '../src/models/student';
import { University } from '../src/models/university';
import {
  universities,
  students,
} from '../src/lib/data';

async function seedUniversities(client: any) {
  try {
    // Create "universities" table if it doesn't exist
    const createTable = await client.sql`
      CREATE TABLE IF NOT EXISTS universities (
        university_id INT AUTO_INCREMENT PRIMARY KEY,
        code VARCHAR(10) NOT NULL,
        name VARCHAR(150) NOT NULL
      );
    `;

    console.log(`Created "universities" table`);

    // Insert data into the "universities" table
    const insertedUniversities = await Promise.all(
        universities.map(async (university: University) => {
        return client.sql`
        INSERT INTO universities (university_id, code, name)
        VALUES (${university.university_id}, ${university.code}, ${university.name})
        ON CONFLICT (university_id) DO NOTHING;
      `;
      }),
    );

    console.log(`Seeded ${insertedUniversities.length} universities`);

    return {
      createTable,
      universities: insertedUniversities,
    };
  } catch (error) {
    console.error('Error seeding universities:', error);
    throw error;
  }
}

async function seedStudents(client: any) {
  try {
    // Create the "students" table if it doesn't exist
    const createTable = await client.sql`
        CREATE TABLE IF NOT EXISTS students (
            student_id INT AUTO_INCREMENT PRIMARY KEY,
            prefix VARCHAR(10) NOT NULL,
            first_name VARCHAR(75) NOT NULL,
            last_name VARCHAR(75) NOT NULL
        );
    `;

    console.log(`Created "students" table`);

    // Insert data into the "students" table
    const insertedStudents = await Promise.all(
      students.map(
        (student: Student) => client.sql`
        INSERT INTO students (student_id, prefix, first_name, last_name)
        VALUES (${student.student_id}, ${student.prefix}, ${student.first_name}, ${student.last_name})
        ON CONFLICT (student_id) DO NOTHING;
      `,
      ),
    );

    console.log(`Seeded ${insertedStudents.length} students`);

    return {
      createTable,
      students: insertedStudents,
    };
  } catch (error) {
    console.error('Error seeding students:', error);
    throw error;
  }
}


async function main() {
  const client = await db.connect();

  await seedUniversities(client);
  await seedStudents(client);

  await client.end();
}

main().catch((err) => {
  console.error(
    'An error occurred while attempting to seed the database:',
    err,
  );
});
