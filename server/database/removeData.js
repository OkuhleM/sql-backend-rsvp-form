const { formDataBase } = require("./database.js");



const removeData = () => {
  return new Promise(function(resolve, reject) {
    const id = parseInt(request.params.id)
    formDataBase.query('DELETE FROM form WHERE id = $1', [id], (error, results) => {
      if (error) {
        reject(error)
      }
      resolve(`form deleted with ID: ${id}`)
    })
  })
}
module.exports = { removeData };