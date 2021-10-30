import mongoose from 'mongoose';
import uniqueValidator from 'mongoose-unique-validator';

const { Schema } = mongoose;

const projectSchema = new Schema({
  name: {
    type: String,
    validate: {
      validator: (name) => name.length > 5,
      message: 'El nombre debe tener mas de 5 caracteres dude',
    },
    required: [true, 'El campo nombre es obligatorio'],
    unique: true,
  },
  year: {
    type: Number,
    validate: {
      validator: (year) => year > 2018 && year <= 2021,
      message: 'En ese año no programabas pendejo',
    },
  },
  tags: [],
  description: {
    type: String,
    default: 'Sin descripcion',
  },
  images: [],
  liveURL: {
    type: String,
    validate: {
      validator: (value) =>
        /^(?:(?:(?:https?|ftp):)?\/\/)(?:\S+(?::\S*)?@)?(?:(?!(?:10|127)(?:\.\d{1,3}){3})(?!(?:169\.254|192\.168)(?:\.\d{1,3}){2})(?!172\.(?:1[6-9]|2\d|3[0-1])(?:\.\d{1,3}){2})(?:[1-9]\d?|1\d\d|2[01]\d|22[0-3])(?:\.(?:1?\d{1,2}|2[0-4]\d|25[0-5])){2}(?:\.(?:[1-9]\d?|1\d\d|2[0-4]\d|25[0-4]))|(?:(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)(?:\.(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)*(?:\.(?:[a-z\u00a1-\uffff]{2,})))(?::\d{2,5})?(?:[/?#]\S*)?$/i.test(
          value
        ),
      message: 'El URL no es valido',
    },
    unique: true,
  },
  githubURL: {
    type: String,
    validate: {
      validator: (value) =>
        /^(?:(?:(?:https?|ftp):)?\/\/)(?:\S+(?::\S*)?@)?(?:(?!(?:10|127)(?:\.\d{1,3}){3})(?!(?:169\.254|192\.168)(?:\.\d{1,3}){2})(?!172\.(?:1[6-9]|2\d|3[0-1])(?:\.\d{1,3}){2})(?:[1-9]\d?|1\d\d|2[01]\d|22[0-3])(?:\.(?:1?\d{1,2}|2[0-4]\d|25[0-5])){2}(?:\.(?:[1-9]\d?|1\d\d|2[0-4]\d|25[0-4]))|(?:(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)(?:\.(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)*(?:\.(?:[a-z\u00a1-\uffff]{2,})))(?::\d{2,5})?(?:[/?#]\S*)?$/i.test(
          value
        ),
      message: 'El URL no es valido',
    },
    unique: true,
  },
});

projectSchema.plugin(uniqueValidator, {
  message: '{PATH} debe ser unico',
});

export default mongoose.model('Project', projectSchema);
