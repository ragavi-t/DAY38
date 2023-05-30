//1.Find all the topics and tasks which are thought in the month of October
db.topics.aggregate([
  { $match: { month: "october", task: { $ne: "no task" } } },
  {
    $project: { task: 1, topic: 1 },
  },
]);
//2.Find all the company drives which appeared between 15 oct-2020 and 31-oct-2020.
db.company_drives.aggregate([
   { $match:{
      Date:{$gte:"15-cot-2020",$lte:"31-oct-2020"}
    }
  },
    {
      $project:
      {
        company_name:1,
        Date:1
      }
    }
  
])

//3.Find all the company drives and students who are appeared for the placement.
db.company_drives.aggregate([
  { $project: { company_name: 1, students_appeared: 1 } },
]);

//4.Find the number of problems solved by the user in codekata.
db.codekata.aggregate([{ $project: { id: 1, name: 1, codekata_solved: 1 } }]);

//5.Find all the mentors with who has the mentee's count more than 15
db.mentors.aggregate([
  {
    $match: {
      no_mentee: { $gt: 15 },
    },
  },
]);

//6.Find the number of users who are absent and task is not submitted  between 15 oct-2020 and 31-oct-2020
db.attendance.aggregate([
  { $match: { date: { $gte: "15-oct-2020", $lte: "31-oct-2020" } } },
  { $project: { date: 1, number_of_absent: 1, task_not_submitted: 1 } },
]);
