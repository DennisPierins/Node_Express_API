import { v4 as uuidv4 } from "uuid";

export const getUsers = (req, res) => {
  res.send(users);
  // res.send("Hello");
};

export const createUser = (req, res) => {
  // req.body is the pushed data
  const user = req.body;

  // uuid adds a Id number to the data
  const userWithId = { ...user, id: uuidv4() };

  users.push(userWithId);

  res.send(`User with the name ${user.firstName} added to the database`);
};

// how do we get to /users/2 => req.params { id: 2 }
export const getUserById = (req, res) => {
  const { id } = req.params;

  const foundUser = users.find((user) => user.id === id);

  res.send(foundUser);
};

export const deleteUserById = (req, res) => {
  const { id } = req.params;

  // id to delete 123

  // John 123
  // Jane 321

  users = users.filter((user) => user.id !== id);

  res.send(`User with the id ${id} deleted from the database`);
};

export const updateUserById = (req, res) => {
  const { id } = req.params;
  const { firstName, lastName, age } = req.body;

  const user = users.find((user) => user.id === id);

  if (firstName) user.firstName = firstName;

  if (lastName) user.lastName = lastName;

  if (age) user.age = age;

  res.send(`User with the id ${id} has been updated`);
};
