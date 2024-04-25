import model from "./model.js";
export const createQuiz = (quiz) => {
  const newlyCreatedQuiz = model.create(quiz);
  return newlyCreatedQuiz;
}
export const findAllQuizzesForCourse = (courseId) => model.find({ course: courseId });
export const findQuizById = (quizId) => model.findById(quizId);
export const updateQuiz = (quizId, quiz) =>  model.updateOne({ _id: quizId }, { $set: quiz });
export const deleteQuiz = (quizId) => model.deleteOne({ _id: quizId });
export const updateQuizPointsAndLength = (quizId, points, numQuestions) => model.findByIdAndUpdate(quizId, { $set: {points: points, numQuestions: numQuestions}});
export const findAllQuizzes = () => model.find();
