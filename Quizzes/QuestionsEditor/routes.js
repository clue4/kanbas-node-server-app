import * as dao from "./dao.js";

// gonna use database/api/courses/ as base
function QuizQuestionsRoutes(app) {
  app.get("/:cid/quizzes/:qid/questions", async (req, res) => {
    // logic
  });
  app.post("/:cid/quizzes/:qid/questions", async (req, res) => {
    // logic
  });
  app.put("/:cid/quizzes/:cid/questions", async (req, res) => {
    // logic
  });
}
export default QuizQuestionsRoutes;