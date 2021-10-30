import Cors from 'cors';
import { runMiddleware } from '../../../helpers';
import { createProject, getAllProjects } from './methods';

// Initializing the cors middleware
const cors = Cors({
  methods: ['GET', 'HEAD'],
});

async function handler(req, res) {
  // Run the middleware
  await runMiddleware(req, res, cors);

  switch (req.method) {
    case 'POST':
      await createProject(req, res);
      break;
    case 'GET':
      await getAllProjects();
      break;
    default:
      return res.status(400).json({
        ok: false,
        message: 'Solicitud incorrecta',
      });
  }
}

export default handler;
