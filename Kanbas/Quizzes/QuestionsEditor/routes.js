import * as dao from "./dao.js";

// gonna use database/api/courses/ as base
function QuizQuestionsRoutes(app) {
  // gets all questions for a quiz
  app.get("/:cid/quizzes/:qid/questions", async (req, res) => {
    const { qid } = req.params; 
    const allQuestions = await dao.getAllQuestionsForQuiz(qid); 
    res.send(allQuestions); 
  });

  // posts all questions to database when a quiz's editing session is done
  app.post("/:cid/quizzes/:qid/questions", async (req, res) => {
    const { qid } = req.params; 
    const questions = req.body; 
    const newQuestions = [];

    try {
      await dao.deleteAllQuestionsForQuiz(qid); 
    } catch (error) {
      res.json(error);
    };

    for (const question of questions) {
      try {
        question.quiz = qid; 
        await dao.createQuestion(question);
        newQuestions.append(question);
      } catch (error) {
        res.json({question, error});
      }
    }
  });

}
export default QuizQuestionsRoutes;