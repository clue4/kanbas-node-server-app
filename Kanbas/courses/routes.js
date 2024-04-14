import * as dao from "./dao.js";

export default function CourseRoutes(app) {
  const getAllCourses = async (req, res) => {
    const courses = await dao.getAllCourses();
    res.send(courses);
  }

  app.get("/api/courses/:id", async (req, res) => {
    const { id } = req.params;
    const course = await dao.getCourseById(id);
    if (!course) {
      res.status(404).send("Course not found");
      return;
    }
    res.send(course);
  });
  app.put("/api/courses/:id", async (req, res) => {
    const { id } = req.params;
    const course = req.body;
    const status = await dao.updateCourse(id, course)
    res.json(status);
  });
  app.delete("/api/courses/:id", async (req, res) => {
    const { id } = req.params;
    const status = await dao.deleteCourse(id);
    res.json(status);
  });
  app.post("/api/courses", async (req, res) => {
    const course = dao.createCourse(req.body)
    const newlyCreated = await dao.findCourseByCourseId(req.body.id)
    res.send(newlyCreated[0]);
  });
  app.get("/api/courses", getAllCourses);
}
