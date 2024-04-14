import model from "./model.js";
export const createCourse = (course) => {
  delete course._id;
  model.create(course);
}
export const getAllCourses = () => model.find({});
export const findCourseByCourseId = (fakeId) => model.find({ id: fakeId })
export const getCourseById = (courseId) => model.findById(courseId);
export const updateCourse = (courseId, course) =>  model.updateOne({ _id: courseId }, { $set: course });
export const deleteCourse = (courseId) => model.deleteOne({ _id: courseId });