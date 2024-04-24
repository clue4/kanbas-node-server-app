import model from "./model.js";

// question should already be formatted correctly for mongo
export const createQuestion = (question) => { model.create(question); };

export const getAllQuestionsForQuiz = (quizId) => model.find({ quiz: quizId });

export const deleteAllQuestionsForQuiz = (quizId) => model.deleteMany({ quiz: quizId });

// export const updateQuestion = (questionId, question) =>  model.updateOne({ _id: questionId }, { $set: question });

// export const getEditQuestionId = (quizId, title) => model.find({ quiz: quizId, title: title })
