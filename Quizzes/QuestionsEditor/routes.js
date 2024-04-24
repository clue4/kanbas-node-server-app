import * as dao from "./dao.js";

// gonna use database/api/courses/ as base
function QuizQuestionsRoutes(app) {
  // gets all questions for a quiz
  app.get("/api/courses/quizzes/:qid/questions", async (req, res) => {
    const { qid } = req.params; 
    const allQuestions = await dao.getAllQuestionsForQuiz(qid); 
    let totalPoints = 0; 

    for (const question of allQuestions) {
        totalPoints = totalPoints + question.points;
    }
    res.json({questions: allQuestions, numQuestions: allQuestions.length, totalPoints: totalPoints}); 
  });

  // posts all questions to database when a quiz's editing session is done
  app.post("/api/courses/quizzes/:qid/questions", async (req, res) => {
    const { qid } = req.params;
    const questions = req.body;
    const newQuestions = [];
    console.log(qid);
  
    try {
      await dao.deleteAllQuestionsForQuiz(qid);
      console.log(dao.getAllQuestionsForQuiz(qid));
  
      for (const question of questions) {
        try {
          await dao.createQuestion(question);
          newQuestions.push(question);
        } catch (error) {
          return res.json({ question, error });
        }
      }
  
      console.log(dao.getAllQuestionsForQuiz(qid));

      // If all questions were processed successfully, send a success response
      return res.json({ success: true, newQuestions });
    } catch (error) {
      return res.json({ error });
    }
  });

}
export default QuizQuestionsRoutes;