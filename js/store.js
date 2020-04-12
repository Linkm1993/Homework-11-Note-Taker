//libary for generating unique IDs
const uuidv1 = require('uuid/v1');

//exporting template for notes
module.exports = (body) => {
   return data = {
      title: body.title,
      text: body.text,
      id: uuidv1()
   }
}

