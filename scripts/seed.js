const { db  } = require('@vercel/postgres');
const {
  universities,
  students,
  enrollments,
} = require('./data');

async function seedUniversities(client) {
  try {
    // Create "universities" table if it doesn't exist
    const createTable = await client.sql`
      CREATE TABLE IF NOT EXISTS universities_tab (
        university_id SERIAL PRIMARY KEY,
        code VARCHAR(10) NOT NULL,
        name VARCHAR(150) NOT NULL
      );
    `;

    console.log(`Created "universities" table`);

    // Insert data into the "universities" table
    const insertedUniversities = await Promise.all(
        universities.map(async (university) => {
        return client.sql`
        INSERT INTO universities_tab (university_id, code, name)
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

async function seedStudents(client) {
  try {
    // Create the "students" table if it doesn't exist
    const createTable = await client.sql`
        CREATE TABLE IF NOT EXISTS students_tab (
            student_id SERIAL PRIMARY KEY,
            prefix VARCHAR(10) NOT NULL,
            first_name VARCHAR(75) NOT NULL,
            last_name VARCHAR(75) NOT NULL
        );
    `;

    console.log(`Created "students" table`);

    // Insert data into the "students" table
    const insertedStudents = await Promise.all(
      students.map(
        (student) => client.sql`
        INSERT INTO students_tab (student_id, prefix, first_name, last_name)
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

async function seedEnrollments(client) {
  try {
    // Create the "enrollments" table if it doesn't exist
    const createTable = await client.sql`
        CREATE TABLE IF NOT EXISTS enrollments_tab (
          enroll_id SERIAL PRIMARY KEY,
          university_id INT NOT NULL,
          student_id INT NOT NULL,
          degree VARCHAR(20) NOT NULL,
          FOREIGN KEY (student_id) REFERENCES students_tab(student_id),
          FOREIGN KEY (university_id) REFERENCES universities_tab(university_id)
        );
    `;

    console.log(`Created "enrollments" table`);

    // Insert data into the "enrollments" table
    const insertedEnrollments = await Promise.all(
      enrollments.map(
        (enrollment) => client.sql`
        INSERT INTO enrollments_tab (enroll_id, university_id, student_id, degree)
        VALUES (${enrollment.enroll_id}, ${enrollment.university_id}, ${enrollment.student_id}, ${enrollment.degree})
        ON CONFLICT (enroll_id) DO NOTHING;
      `,
      ),
    );

    console.log(`Seeded ${insertedEnrollments.length} enrollments`);

    return {
      createTable,
      enrollments: insertedEnrollments,
    };
  } catch (error) {
    console.error('Error seeding enrollments:', error);
    throw error;
  }
}

async function seedUniversitiesStudents(client) {
  try {
    // Create the "universities_students" view if it doesn't exist
    const createView = await client.sql`
      CREATE OR REPLACE VIEW universities_students AS
        SELECT e.*, 
          u.code AS university_code, u.name AS university, 
          (s.prefix || s.first_name || chr(32) || s.last_name) AS student,
          s.prefix, s.first_name, s.last_name
        FROM enrollments_tab e
        LEFT JOIN universities_tab u
          ON e.university_id = u.university_id
        LEFT JOIN students_tab s
          ON e.student_id = s.student_id;
      `;

    console.log(`Created "universities_students" view`);

    return {
      createView
    };
  } catch (error) {
    console.error('Error seeding universities_students:', error);
    throw error;
  }
}


async function main() {

  const client = await db.connect();

  await seedUniversities(client);
  await seedStudents(client);
  await seedEnrollments(client);
  await seedUniversitiesStudents(client);

  await client.end();
}

main().catch((err) => {
  console.error(
    'An error occurred while attempting to seed the database:',
    err,
  );
});
