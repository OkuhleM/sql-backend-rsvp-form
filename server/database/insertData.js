const { formDataBase } = require("./database.js");

const insertData = async (data) => {
  try {
    const res = await formDataBase.query(
      "INSERT INTO form (name,surname,food,time,attending) VALUES ($1,$2,$3,$4,$5)",
      [data.name, data.surname, data.food, data.time, data.attending]
    );
  } catch (err) {
    console.error(err);
  }
  formDataBase.end;
};
module.exports = { insertData };
