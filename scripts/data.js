const universities = [
  {
      university_id: 1,
      code: 'CU',
      name: 'จุฬาลงกรณ์มหาวิทยาลัย',
  },
  {
      university_id: 2,
      code: 'MU',
      name: 'มหาวิทยาลัยมหิดล',
  },
  {
      university_id: 3,
      code: 'CMU',
      name: 'มหาวิทยาลัยเชียงใหม่',
  },
  {
      university_id: 4,
      code: 'TU',
      name: 'มหาวิทยาลัยธรรมศาสตร์',
  },
  {
      university_id: 5,
      code: 'KU',
      name: 'มหาวิทยาลัยเกษตรศาสตร์',
  },
  {
      university_id: 6,
      code: 'PSU',
      name: 'มหาวิทยาลัยสงขลานครินทร์',
  },
  {
      university_id: 7,
      code: 'KKU',
      name: 'มหาวิทยาลัยขอนแก่น',
  },
  {
      university_id: 8,
      code: 'KMUTT',
      name: 'มหาวิทยาลัยเทคโนโลยีพระจอมเกล้าธนบุรี',
  },
  {
      university_id: 9,
      code: 'KMUTNB',
      name: 'มหาวิทยาลัยเทคโนโลยีพระจอมเกล้าพระนครเหนือ',
  },
  {
      university_id: 10,
      code: 'KMITL',
      name: 'สถาบันเทคโนโลยีพระจอมเกล้าเจ้าคุณทหารลาดกระบัง',
  },
  {
      university_id: 11,
      code: 'NU',
      name: 'มหาวิทยาลัยนเรศวร',
  },
  {
      university_id: 12,
      code: 'SU',
      name: 'มหาวิทยาลัยศิลปากร',
  },
  {
      university_id: 13,
      code: 'SUT',
      name: 'มหาวิทยาลัยเทคโนโลยีสุรนารี',
  }
];


const students = [
  {
      student_id: 1,
      prefix: 'นาย',
      first_name: 'สมชาย',
      last_name: 'ศรีสวัสดิ์',
  },
  {
      student_id: 2,
      prefix: 'นางสาว',
      first_name: 'สมหญิง',
      last_name: 'ทองดี',
  },
  {
      student_id: 3,
      prefix: 'นาย',
      first_name: 'วิชัย',
      last_name: 'รัตนมณี',
  },
  {
      student_id: 4,
      prefix: 'นางสาว',
      first_name: 'วราภรณ์',
      last_name: 'จันทรา',
  },
  {
      student_id: 5,
      prefix: 'นาย',
      first_name: 'สุริยา',
      last_name: 'ทองสุข',
  },
  {
      student_id: 6,
      prefix: 'นางสาว',
      first_name: 'กานดา',
      last_name: 'นาคเจริญ',
  },
  {
      student_id: 7,
      prefix: 'นาย',
      first_name: 'ประสิทธิ์',
      last_name: 'สิงห์โต',
  },
  {
      student_id: 8,
      prefix: 'นาย',
      first_name: 'ปรีชา',
      last_name: 'เสือสมิง',
  },
  {
      student_id: 9,
      prefix: 'นางสาว',
      first_name: 'อรทัย',
      last_name: 'มณีแก้ว',
  },
  {
      student_id: 10,
      prefix: 'นาย',
      first_name: 'จักรพงษ์',
      last_name: 'วัฒนชัย',
  },
  {
      student_id: 11,
      prefix: 'นาย',
      first_name: 'ศุภชัย',
      last_name: 'รัตนไพศาล',
  },
  {
      student_id: 12,
      prefix: 'นางสาว',
      first_name: 'สุพัตรา',
      last_name: 'จิตรเจริญ',
  },
  {
      student_id: 13,
      prefix: 'นาย',
      first_name: 'สมคิด',
      last_name: 'ทองอร่าม',
  },
  {
      student_id: 14,
      prefix: 'นาย',
      first_name: 'กิตติ',
      last_name: 'ชูแสง',
  },
  {
      student_id: 15,
      prefix: 'นางสาว',
      first_name: 'รัชนี',
      last_name: 'แก้วคำ',
  },
  {
      student_id: 16,
      prefix: 'นาย',
      first_name: 'วิทยา',
      last_name: 'ทองทิพย์',
  },
  {
      student_id: 17,
      prefix: 'นางสาว',
      first_name: 'รุ่งทิวา',
      last_name: 'มณีวงศ์',
  },
  {
      student_id: 18,
      prefix: 'นาย',
      first_name: 'มานพ',
      last_name: 'ศรีเจริญ',
  },
  {
      student_id: 19,
      prefix: 'นางสาว',
      first_name: 'สุภาภรณ์',
      last_name: 'แก้วมณี',
  },
  {
      student_id: 20,
      prefix: 'นาย',
      first_name: 'ธนกร',
      last_name: 'นวลจันทร์',
  },
  {
      student_id: 21,
      prefix: 'นางสาว',
      first_name: 'พรทิพย์',
      last_name: 'พงษ์สวัสดิ์',
  },
  {
      student_id: 22,
      prefix: 'นาย',
      first_name: 'สุกิจ',
      last_name: 'เพ็ญสุข',
  },
  {
      student_id: 23,
      prefix: 'นางสาว',
      first_name: 'ปราณี',
      last_name: 'จิราวรรณ',
  },
  {
      student_id: 24,
      prefix: 'นาย',
      first_name: 'เอกชัย',
      last_name: 'วัฒนสุข',
  },
  {
      student_id: 25,
      prefix: 'นางสาว',
      first_name: 'อรวรรณ',
      last_name: 'รัตนวงศ์',
  },
  {
      student_id: 26,
      prefix: 'นาย',
      first_name: 'จิราวัฒน์',
      last_name: 'ศรีทิพย์',
  },
  {
      student_id: 27,
      prefix: 'นาย',
      first_name: 'สุวัฒน์',
      last_name: 'ทองสุข',
  },
  {
      student_id: 28,
      prefix: 'นาย',
      first_name: 'นรินทร์',
      last_name: 'รัตนสกุล',
  },
  {
      student_id: 29,
      prefix: 'นางสาว',
      first_name: 'พิมพ์พร',
      last_name: 'ศิริชัย',
  },
  {
      student_id: 30,
      prefix: 'นาย',
      first_name: 'ชาญชัย',
      last_name: 'พงษ์ทิพย์',
  },
  {
      student_id: 31,
      prefix: 'นางสาว',
      first_name: 'วิไล',
      last_name: 'ทองเจริญ',
  },
  {
      student_id: 32,
      prefix: 'นาย',
      first_name: 'พิชัย',
      last_name: 'มณีวงศ์',
  },
  {
      student_id: 33,
      prefix: 'นางสาว',
      first_name: 'รัชนีกร',
      last_name: 'ทองสุข',
  },
  {
      student_id: 34,
      prefix: 'นาย',
      first_name: 'ภาณุ',
      last_name: 'รัตนจิต',
  },
  {
      student_id: 35,
      prefix: 'นางสาว',
      first_name: 'นุชนารถ',
      last_name: 'ศรีประเสริฐ',
  },
  {
      student_id: 36,
      prefix: 'นาย',
      first_name: 'อุดม',
      last_name: 'เพ็ญแสง',
  },
  {
      student_id: 37,
      prefix: 'นาย',
      first_name: 'ประกอบ',
      last_name: 'วงศ์แก้ว',
  },
  {
      student_id: 38,
      prefix: 'นางสาว',
      first_name: 'พิมพ์ใจ',
      last_name: 'จิราวรรณ',
  },
  {
      student_id: 39,
      prefix: 'นาย',
      first_name: 'อดิศร',
      last_name: 'ศรีสวัสดิ์',
  },
  {
      student_id: 40,
      prefix: 'นางสาว',
      first_name: 'วิมล',
      last_name: 'แก้วทอง',
  },
  {
      student_id: 41,
      prefix: 'นาย',
      first_name: 'สราวุฒิ',
      last_name: 'ทองเจริญ',
  },
  {
      student_id: 42,
      prefix: 'นางสาว',
      first_name: 'ดวงใจ',
      last_name: 'วัฒนวงศ์',
  },
  {
      student_id: 43,
      prefix: 'นาย',
      first_name: 'สถาพร',
      last_name: 'มณีรัตน์',
  },
  {
      student_id: 44,
      prefix: 'นางสาว',
      first_name: 'พัชรี',
      last_name: 'จิราพันธ์',
  },
  {
      student_id: 45,
      prefix: 'นาย',
      first_name: 'สมยศ',
      last_name: 'ทองอร่าม',
  },
  {
      student_id: 46,
      prefix: 'นางสาว',
      first_name: 'นภัส',
      last_name: 'รัตนมณี',
  },
  {
      student_id: 47,
      prefix: 'นาย',
      first_name: 'วิทูร',
      last_name: 'วัฒนสกุล',
  },
  {
      student_id: 48,
      prefix: 'นาย',
      first_name: 'ชัยรัตน์',
      last_name: 'ทองวงศ์',
  },
  {
      student_id: 49,
      prefix: 'นางสาว',
      first_name: 'ชุติมา',
      last_name: 'มณีชัย',
  },
  {
      student_id: 50,
      prefix: 'นางสาว',
      first_name: 'นฤมล',
      last_name: 'รัตนเจริญ',
  },
  {
      student_id: 51,
      prefix: 'นาย',
      first_name: 'พิชิต',
      last_name: 'ทองแสง',
  },
  {
      student_id: 52,
      prefix: 'นางสาว',
      first_name: 'นันทพร',
      last_name: 'วงศ์ประเสริฐ',
  },
  {
      student_id: 53,
      prefix: 'นาย',
      first_name: 'ก้องเกียรติ',
      last_name: 'ศรีวงศ์',
  },
  {
      student_id: 54,
      prefix: 'นาย',
      first_name: 'วีรพล',
      last_name: 'ทองจันทร์',
  },
  {
      student_id: 55,
      prefix: 'นาย',
      first_name: 'ธเนศ',
      last_name: 'มณีทิพย์',
  },
  {
      student_id: 56,
      prefix: 'นางสาว',
      first_name: 'ปราณีต',
      last_name: 'รัตนแสง',
  },
  {
      student_id: 57,
      prefix: 'นางสาว',
      first_name: 'อัมพร',
      last_name: 'วัฒนสุข',
  },
  {
      student_id: 58,
      prefix: 'นาย',
      first_name: 'วีรภัทร',
      last_name: 'ศรีทิพย์',
  },
  {
      student_id: 59,
      prefix: 'นางสาว',
      first_name: 'สุวรรณา',
      last_name: 'ทองคำ',
  },
  {
      student_id: 60,
      prefix: 'นาย',
      first_name: 'ศิริชัย',
      last_name: 'รัตนเพ็ญ',
  },
  {
      student_id: 61,
      prefix: 'นาย',
      first_name: 'ปรีดา',
      last_name: 'แก้ววงศ์',
  },
  {
      student_id: 62,
      prefix: 'นาย',
      first_name: 'ชาญณรงค์',
      last_name: 'ศรีเจริญ',
  },
  {
      student_id: 63,
      prefix: 'นางสาว',
      first_name: 'วรรณา',
      last_name: 'ทองเพ็ญ',
  },
  {
      student_id: 64,
      prefix: 'นาย',
      first_name: 'สุพจน์',
      last_name: 'รัตนประเสริฐ',
  },
  {
      student_id: 65,
      prefix: 'นาย',
      first_name: 'ธนภัทร',
      last_name: 'วงศ์สวัสดิ์',
  },
  {
      student_id: 66,
      prefix: 'นาย',
      first_name: 'กฤษฎา',
      last_name: 'ทองวงศ์',
  },
  {
      student_id: 67,
      prefix: 'นาย',
      first_name: 'มนูญ',
      last_name: 'มณีรัตน์',
  },
  {
      student_id: 68,
      prefix: 'นางสาว',
      first_name: 'พิมพ์ศิริ',
      last_name: 'รัตนเพ็ญ',
  },
  {
      student_id: 69,
      prefix: 'นาย',
      first_name: 'ดำรง',
      last_name: 'ศรีวงศ์',
  },
  {
      student_id: 70,
      prefix: 'นางสาว',
      first_name: 'รัตนา',
      last_name: 'วัฒนศิลป์',
  },
  {
      student_id: 71,
      prefix: 'นาย',
      first_name: 'ประทุม',
      last_name: 'ทองเจริญ',
  },
  {
      student_id: 72,
      prefix: 'นาย',
      first_name: 'พรชัย',
      last_name: 'รัตนมณี',
  },
  {
      student_id: 73,
      prefix: 'นางสาว',
      first_name: 'สุนิสา',
      last_name: 'ทองวรรณ',
  },
  {
      student_id: 74,
      prefix: 'นาย',
      first_name: 'ธวัช',
      last_name: 'ศรีสุข',
  },
  {
      student_id: 75,
      prefix: 'นางสาว',
      first_name: 'สาวิตรี',
      last_name: 'มณีวงศ์',
  },
  {
      student_id: 76,
      prefix: 'นาย',
      first_name: 'อนันต์',
      last_name: 'รัตนพงศ์',
  },
  {
      student_id: 77,
      prefix: 'นาย',
      first_name: 'ธนพล',
      last_name: 'วงศ์เจริญ',
  },
  {
      student_id: 78,
      prefix: 'นางสาว',
      first_name: 'ณัฐพร',
      last_name: 'ทองดี',
  },
  {
      student_id: 79,
      prefix: 'นางสาว',
      first_name: 'ปัทมา',
      last_name: 'ศรีจันทร์',
  },
  {
      student_id: 80,
      prefix: 'นาย',
      first_name: 'จักรกฤษณ์',
      last_name: 'รัตนแสง',
  },
  {
      student_id: 81,
      prefix: 'นางสาว',
      first_name: 'ชลลดา',
      last_name: 'ทองจันทร์',
  },
  {
      student_id: 82,
      prefix: 'นาย',
      first_name: 'อภิชัย',
      last_name: 'วัฒนวงศ์',
  },
  {
      student_id: 83,
      prefix: 'นาย',
      first_name: 'วิชชา',
      last_name: 'มณีรัตน์',
  },
  {
      student_id: 84,
      prefix: 'นาย',
      first_name: 'พงษ์เทพ',
      last_name: 'ทองแสง',
  },
  {
      student_id: 85,
      prefix: 'นางสาว',
      first_name: 'ดวงพร',
      last_name: 'ศรีประเสริฐ',
  },
  {
      student_id: 86,
      prefix: 'นาย',
      first_name: 'รุ่งโรจน์',
      last_name: 'รัตนวงศ์',
  },
  {
      student_id: 87,
      prefix: 'นาย',
      first_name: 'ณรงค์ชัย',
      last_name: 'วงศ์สวัสดิ์',
  },
  {
      student_id: 88,
      prefix: 'นางสาว',
      first_name: 'เพ็ญศรี',
      last_name: 'ศรีสกุล',
  },
  {
      student_id: 89,
      prefix: 'นาย',
      first_name: 'วีระชัย',
      last_name: 'ทองวรรณ',
  },
  {
      student_id: 90,
      prefix: 'นางสาว',
      first_name: 'พรพิมล',
      last_name: 'วัฒนสกุล',
  },
  {
      student_id: 91,
      prefix: 'นาย',
      first_name: 'สมพร',
      last_name: 'ศรีทิพย์',
  },
  {
      student_id: 92,
      prefix: 'นาย',
      first_name: 'ศิริพงษ์',
      last_name: 'ทองแสง',
  },
  {
      student_id: 93,
      prefix: 'นาย',
      first_name: 'ชุมพล',
      last_name: 'รัตนพงศ์',
  },
  {
      student_id: 94,
      prefix: 'นางสาว',
      first_name: 'สราวรรณ',
      last_name: 'วัฒนวงศ์',
  },
  {
      student_id: 95,
      prefix: 'นาย',
      first_name: 'สุดใจ',
      last_name: 'ทองคำ',
  },
  {
      student_id: 96,
      prefix: 'นาย',
      first_name: 'ยศศักดิ์',
      last_name: 'แสงทอง',
  },
  {
      student_id: 97,
      prefix: 'นาย',
      first_name: 'นพพร',
      last_name: 'ทองวงศ์',
  },
  {
      student_id: 98,
      prefix: 'นาย',
      first_name: 'ศุภกาญจน์',
      last_name: 'วัฒนแสง',
  },
  {
      student_id: 99,
      prefix: 'นาย',
      first_name: 'วินัย',
      last_name: 'รัตนสุข',
  },
  {
      student_id: 100,
      prefix: 'นางสาว',
      first_name: 'สุนิสา',
      last_name: 'ทองวาว',
  }
];

const enrollments = [
    { enroll_id: 1, university_id: 1, student_id: 1, degree: "ป.ตรี" },
    { enroll_id: 2, university_id: 2, student_id: 2, degree: "ป.ตรี" },
    { enroll_id: 3, university_id: 3, student_id: 3, degree: "ป.ตรี" },
    { enroll_id: 4, university_id: 4, student_id: 4, degree: "ป.ตรี" },
    { enroll_id: 5, university_id: 5, student_id: 5, degree: "ป.ตรี" },
    { enroll_id: 6, university_id: 6, student_id: 6, degree: "ป.ตรี" },
    { enroll_id: 7, university_id: 7, student_id: 7, degree: "ป.ตรี" },
    { enroll_id: 8, university_id: 8, student_id: 8, degree: "ป.ตรี" },
    { enroll_id: 9, university_id: 9, student_id: 9, degree: "ป.ตรี" },
    { enroll_id: 10, university_id: 10, student_id: 10, degree: "ป.ตรี" },
    { enroll_id: 11, university_id: 11, student_id: 11, degree: "ป.ตรี" },
    { enroll_id: 12, university_id: 12, student_id: 12, degree: "ป.ตรี" },
    { enroll_id: 13, university_id: 13, student_id: 13, degree: "ป.ตรี" },
    { enroll_id: 14, university_id: 1, student_id: 14, degree: "ป.ตรี" },
    { enroll_id: 15, university_id: 2, student_id: 15, degree: "ป.ตรี" },
    { enroll_id: 16, university_id: 3, student_id: 16, degree: "ป.ตรี" },
    { enroll_id: 17, university_id: 4, student_id: 17, degree: "ป.ตรี" },
    { enroll_id: 18, university_id: 5, student_id: 18, degree: "ป.ตรี" },
    { enroll_id: 19, university_id: 6, student_id: 19, degree: "ป.ตรี" },
    { enroll_id: 20, university_id: 7, student_id: 20, degree: "ป.ตรี" },
    { enroll_id: 21, university_id: 8, student_id: 21, degree: "ป.ตรี" },
    { enroll_id: 22, university_id: 9, student_id: 22, degree: "ป.ตรี" },
    { enroll_id: 23, university_id: 10, student_id: 23, degree: "ป.ตรี" },
    { enroll_id: 24, university_id: 11, student_id: 24, degree: "ป.ตรี" },
    { enroll_id: 25, university_id: 12, student_id: 25, degree: "ป.ตรี" },
    { enroll_id: 26, university_id: 13, student_id: 26, degree: "ป.ตรี" },
    { enroll_id: 27, university_id: 1, student_id: 27, degree: "ป.ตรี" },
    { enroll_id: 28, university_id: 2, student_id: 28, degree: "ป.ตรี" },
    { enroll_id: 29, university_id: 3, student_id: 29, degree: "ป.ตรี" },
    { enroll_id: 30, university_id: 4, student_id: 30, degree: "ป.ตรี" },
    { enroll_id: 31, university_id: 5, student_id: 31, degree: "ป.ตรี" },
    { enroll_id: 32, university_id: 6, student_id: 32, degree: "ป.ตรี" },
    { enroll_id: 33, university_id: 7, student_id: 33, degree: "ป.ตรี" },
    { enroll_id: 34, university_id: 8, student_id: 34, degree: "ป.ตรี" },
    { enroll_id: 35, university_id: 9, student_id: 35, degree: "ป.ตรี" },
    { enroll_id: 36, university_id: 10, student_id: 36, degree: "ป.ตรี" },
    { enroll_id: 37, university_id: 11, student_id: 37, degree: "ป.ตรี" },
    { enroll_id: 38, university_id: 12, student_id: 38, degree: "ป.ตรี" },
    { enroll_id: 39, university_id: 13, student_id: 39, degree: "ป.ตรี" },
    { enroll_id: 40, university_id: 1, student_id: 40, degree: "ป.ตรี" },
    { enroll_id: 41, university_id: 2, student_id: 41, degree: "ป.ตรี" },
    { enroll_id: 42, university_id: 3, student_id: 42, degree: "ป.ตรี" },
    { enroll_id: 43, university_id: 4, student_id: 43, degree: "ป.ตรี" },
    { enroll_id: 44, university_id: 5, student_id: 44, degree: "ป.ตรี" },
    { enroll_id: 45, university_id: 6, student_id: 45, degree: "ป.ตรี" },
    { enroll_id: 46, university_id: 7, student_id: 46, degree: "ป.ตรี" },
    { enroll_id: 47, university_id: 8, student_id: 47, degree: "ป.ตรี" },
    { enroll_id: 48, university_id: 9, student_id: 48, degree: "ป.ตรี" },
    { enroll_id: 49, university_id: 10, student_id: 49, degree: "ป.ตรี" },
    { enroll_id: 50, university_id: 11, student_id: 50, degree: "ป.ตรี" },
    { enroll_id: 51, university_id: 12, student_id: 51, degree: "ป.ตรี" },
    { enroll_id: 52, university_id: 13, student_id: 52, degree: "ป.ตรี" },
    { enroll_id: 53, university_id: 1, student_id: 53, degree: "ป.ตรี" },
    { enroll_id: 54, university_id: 2, student_id: 54, degree: "ป.ตรี" },
    { enroll_id: 55, university_id: 3, student_id: 55, degree: "ป.ตรี" },
    { enroll_id: 56, university_id: 4, student_id: 56, degree: "ป.ตรี" },
    { enroll_id: 57, university_id: 5, student_id: 57, degree: "ป.ตรี" },
    { enroll_id: 58, university_id: 6, student_id: 58, degree: "ป.ตรี" },
    { enroll_id: 59, university_id: 7, student_id: 59, degree: "ป.ตรี" },
    { enroll_id: 60, university_id: 8, student_id: 60, degree: "ป.ตรี" },
    { enroll_id: 61, university_id: 9, student_id: 61, degree: "ป.ตรี" },
    { enroll_id: 62, university_id: 10, student_id: 62, degree: "ป.ตรี" },
    { enroll_id: 63, university_id: 11, student_id: 63, degree: "ป.ตรี" },
    { enroll_id: 64, university_id: 12, student_id: 64, degree: "ป.ตรี" },
    { enroll_id: 65, university_id: 13, student_id: 65, degree: "ป.ตรี" },
    { enroll_id: 66, university_id: 1, student_id: 66, degree: "ป.ตรี" },
    { enroll_id: 67, university_id: 2, student_id: 67, degree: "ป.ตรี" },
    { enroll_id: 68, university_id: 3, student_id: 68, degree: "ป.ตรี" },
    { enroll_id: 69, university_id: 4, student_id: 69, degree: "ป.ตรี" },
    { enroll_id: 70, university_id: 5, student_id: 70, degree: "ป.ตรี" },
    { enroll_id: 71, university_id: 6, student_id: 71, degree: "ป.ตรี" },
    { enroll_id: 72, university_id: 7, student_id: 72, degree: "ป.ตรี" },
    { enroll_id: 73, university_id: 8, student_id: 73, degree: "ป.ตรี" },
    { enroll_id: 74, university_id: 9, student_id: 74, degree: "ป.ตรี" },
    { enroll_id: 75, university_id: 10, student_id: 75, degree: "ป.ตรี" },
    { enroll_id: 76, university_id: 11, student_id: 76, degree: "ป.ตรี" },
    { enroll_id: 77, university_id: 12, student_id: 77, degree: "ป.ตรี" },
    { enroll_id: 78, university_id: 13, student_id: 78, degree: "ป.ตรี" },
    { enroll_id: 79, university_id: 1, student_id: 79, degree: "ป.ตรี" },
    { enroll_id: 80, university_id: 2, student_id: 80, degree: "ป.ตรี" },
    { enroll_id: 81, university_id: 3, student_id: 81, degree: "ป.ตรี" },
    { enroll_id: 82, university_id: 4, student_id: 82, degree: "ป.ตรี" },
    { enroll_id: 83, university_id: 5, student_id: 83, degree: "ป.ตรี" },
    { enroll_id: 84, university_id: 6, student_id: 84, degree: "ป.ตรี" },
    { enroll_id: 85, university_id: 7, student_id: 85, degree: "ป.ตรี" },
    { enroll_id: 86, university_id: 8, student_id: 86, degree: "ป.ตรี" },
    { enroll_id: 87, university_id: 9, student_id: 87, degree: "ป.ตรี" },
    { enroll_id: 88, university_id: 10, student_id: 88, degree: "ป.ตรี" },
    { enroll_id: 89, university_id: 11, student_id: 89, degree: "ป.ตรี" },
    { enroll_id: 90, university_id: 12, student_id: 90, degree: "ป.ตรี" },
    { enroll_id: 91, university_id: 13, student_id: 91, degree: "ป.ตรี" },
    { enroll_id: 92, university_id: 1, student_id: 92, degree: "ป.ตรี" },
    { enroll_id: 93, university_id: 2, student_id: 93, degree: "ป.ตรี" },
    { enroll_id: 94, university_id: 3, student_id: 94, degree: "ป.ตรี" },
    { enroll_id: 95, university_id: 4, student_id: 95, degree: "ป.ตรี" },
    { enroll_id: 96, university_id: 5, student_id: 96, degree: "ป.ตรี" },
    { enroll_id: 97, university_id: 6, student_id: 97, degree: "ป.ตรี" },
    { enroll_id: 98, university_id: 7, student_id: 98, degree: "ป.ตรี" },
    { enroll_id: 99, university_id: 8, student_id: 99, degree: "ป.ตรี" },
    { enroll_id: 100, university_id: 9, student_id: 100, degree: "ป.ตรี" },
    { enroll_id: 101, university_id: 10, student_id: 1, degree: "ป.โท" },
    { enroll_id: 102, university_id: 11, student_id: 2, degree: "ป.โท" },
    { enroll_id: 103, university_id: 12, student_id: 3, degree: "ป.โท" },
    { enroll_id: 104, university_id: 13, student_id: 4, degree: "ป.โท" },
    { enroll_id: 105, university_id: 1, student_id: 5, degree: "ป.โท" },
    { enroll_id: 106, university_id: 2, student_id: 6, degree: "ป.โท" },
    { enroll_id: 107, university_id: 3, student_id: 7, degree: "ป.โท" },
    { enroll_id: 108, university_id: 4, student_id: 8, degree: "ป.โท" },
    { enroll_id: 109, university_id: 5, student_id: 9, degree: "ป.โท" },
    { enroll_id: 110, university_id: 6, student_id: 10, degree: "ป.โท" },
    { enroll_id: 111, university_id: 7, student_id: 11, degree: "ป.โท" },
    { enroll_id: 112, university_id: 8, student_id: 12, degree: "ป.โท" },
    { enroll_id: 113, university_id: 9, student_id: 13, degree: "ป.โท" },
    { enroll_id: 114, university_id: 10, student_id: 14, degree: "ป.โท" },
    { enroll_id: 115, university_id: 11, student_id: 15, degree: "ป.โท" },
    { enroll_id: 116, university_id: 12, student_id: 16, degree: "ป.โท" },
    { enroll_id: 117, university_id: 13, student_id: 17, degree: "ป.โท" },
    { enroll_id: 118, university_id: 1, student_id: 18, degree: "ป.โท" },
    { enroll_id: 119, university_id: 2, student_id: 19, degree: "ป.โท" },
    { enroll_id: 120, university_id: 3, student_id: 20, degree: "ป.โท" },
    { enroll_id: 121, university_id: 4, student_id: 21, degree: "ป.โท" },
    { enroll_id: 122, university_id: 5, student_id: 22, degree: "ป.โท" },
    { enroll_id: 123, university_id: 6, student_id: 23, degree: "ป.โท" },
    { enroll_id: 124, university_id: 7, student_id: 24, degree: "ป.โท" },
    { enroll_id: 125, university_id: 8, student_id: 25, degree: "ป.โท" },
    { enroll_id: 126, university_id: 9, student_id: 26, degree: "ป.โท" },
    { enroll_id: 127, university_id: 10, student_id: 27, degree: "ป.โท" },
    { enroll_id: 128, university_id: 11, student_id: 28, degree: "ป.โท" },
    { enroll_id: 129, university_id: 12, student_id: 29, degree: "ป.โท" },
    { enroll_id: 130, university_id: 13, student_id: 30, degree: "ป.โท" },
    { enroll_id: 131, university_id: 1, student_id: 31, degree: "ป.โท" },
    { enroll_id: 132, university_id: 2, student_id: 32, degree: "ป.โท" },
    { enroll_id: 133, university_id: 3, student_id: 33, degree: "ป.โท" },
    { enroll_id: 134, university_id: 4, student_id: 34, degree: "ป.โท" },
    { enroll_id: 135, university_id: 5, student_id: 35, degree: "ป.โท" },
    { enroll_id: 136, university_id: 6, student_id: 36, degree: "ป.โท" },
    { enroll_id: 137, university_id: 7, student_id: 37, degree: "ป.โท" },
    { enroll_id: 138, university_id: 8, student_id: 38, degree: "ป.โท" },
    { enroll_id: 139, university_id: 9, student_id: 39, degree: "ป.โท" },
    { enroll_id: 140, university_id: 10, student_id: 40, degree: "ป.โท" },
    { enroll_id: 141, university_id: 11, student_id: 1, degree: "ป.เอก" },
    { enroll_id: 142, university_id: 12, student_id: 2, degree: "ป.เอก" },
    { enroll_id: 143, university_id: 13, student_id: 3, degree: "ป.เอก" },
    { enroll_id: 144, university_id: 1, student_id: 4, degree: "ป.เอก" },
    { enroll_id: 145, university_id: 2, student_id: 5, degree: "ป.เอก" },
    { enroll_id: 146, university_id: 3, student_id: 6, degree: "ป.เอก" },
    { enroll_id: 147, university_id: 4, student_id: 7, degree: "ป.เอก" },
    { enroll_id: 148, university_id: 5, student_id: 8, degree: "ป.เอก" },
    { enroll_id: 149, university_id: 6, student_id: 9, degree: "ป.เอก" },
    { enroll_id: 150, university_id: 7, student_id: 10, degree: "ป.เอก" }
];  

module.exports = {
    universities,
    students,
    enrollments,
};