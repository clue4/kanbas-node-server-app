import * as dao from "./dao.js";

export default function QuizRoutes(app) {
  const createQuiz = async (req, res) => {
    const user = await dao.createQuiz(req.body);
    res.json(user);
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
    const quiz = await dao.findQuizById(req.params.quizId);
    res.json(quiz);
  };

  const updateQuiz = async (req, res) => {
    const { quizId } = req.params;
    const status = await dao.updateQuiz(quizId, req.body);
    //const currentQuiz = await dao.findQuizById(quizId);
    res.json(status); // change to currentUser?
  };

  const updateQuizPointsAndLength = async (req, res) => {
    const { quizId } = req.params;
    const { points, numQuestions } = req.body;

    const status = await dao.updateQuizPointsAndLength(quizId, points, numQuestions);
    res.json(status);
  };


  app.post("/api/courses/quizzes", createQuiz);
  app.get("/api/courses/quizzes/:courseId", findAllQuizzesForCourse);
  app.get("/api/courses/quizzes/:quizId", findQuizById);
  app.put("/api/courses/quizzes/:quizId", updateQuiz);
  app.delete("/api/courses/quizzes/:quizId", deleteQuiz);
  app.put("/api/courses/quizzes/:quizId/updatePointsAndNumQuestions", updateQuizPointsAndLength);
}
