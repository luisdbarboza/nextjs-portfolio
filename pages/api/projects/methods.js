import Project from '../../../models/projects';

const createProject = async (req, res) => {
  try {
    const body = JSON.parse(req.body);

    const project = new Project({
      name: body.name,
      year: body.year,
      tags: body.tags,
      images: body.images,
      description: body.description,
    });

    await project.save();

    return res.status(200).json({
      ok: true,
      message: 'Proyecto agregado a la bdd!',
    });
  } catch (err) {
    return res.status(400).json({
      ok: false,
      message: err.message,
    });
  }
};

const getAllProjects = (req, res) => {
  try {
    const projects = await Project.find({});

    return res.status(200).json({
      ok: true,
      projects,
    });
  } catch (err) {
    return res.status(400).json({
      ok: false,
      message: err.message,
    });
  }
};

export { createProject, getAllProjects };
