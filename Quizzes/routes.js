import * as dao from "./dao.js";

export default function QuizRoutes(app) {
  const createQuiz = async (req, res) => {
    const quiz = await dao.createQuiz(req.body);
    res.json(quiz);
  };

  const deleteQuiz = async (req, res) => {
    const status = await dao.deleteQuiz(req.params.quizId);
    res.json(status);
  };

  const findAllQuizzesForCourse = async (req, res) => {
    const quizzes = await dao.findAllQuizzesForCourse(req.params.courseId);
    res.json(quizzes);
    return;
  };

  const findQuizById = async (req, res) => {
    const { quizId } = req.params;
    const quiz = await dao.findQuizById(quizId);
    res.json(quiz);
  };

  const updateQuiz = async (req, res) => {
    const { quizId } = req.params;
    const status = await dao.updateQuiz(quizId, req.body);
    res.json(status); 
  };

  const updateQuizPointsAndLength = async (req, res) => {
    const { quizId } = req.params;
    const { points, numQuestions } = req.body;

    const status = await dao.updateQuizPointsAndLength(quizId, points, numQuestions);
    res.json(status);
  };


  app.put("/api/courses/quizzes/:quizId/updatePointsAndNumQuestions", updateQuizPointsAndLength);
  app.put("/api/courses/quizzes/:quizId/updateQuizPublish", async (req, res) => {
    const { quizId }= req.params;
    const response = await dao.updateQuizPublish(quizId);
    res.send(response);
  })
  app.post("/api/quizzes", createQuiz);
  app.get("/api/quizzes/courses/:courseId", findAllQuizzesForCourse);
  app.get("/api/quizzes/:quizId", findQuizById);
  app.put("/api/quizzes/:quizId", updateQuiz);
  app.delete("/api/quizzes/:quizId", deleteQuiz);
  app.get("/api/quizzes", async (req, res) => {
    const quizzes = await dao.findAllQuizzes();
    res.json(quizzes);
    return;
  });
}
