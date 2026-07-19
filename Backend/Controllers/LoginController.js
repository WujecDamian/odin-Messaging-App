import { prisma } from "../../lib/prisma.js";

const logInUser = async (req, res) => {
  const { username, password } = req.body;
  const user = await prisma.user.findUnique({ where: { username } });
  if (user) {
    const passwordMatch = bcrypt.compare(password, user.password);
    if (passwordMatch) {
    }
  }
  /* check if username exists in db 
    match passwords with bcrypt.compare(givenpassword, dbpassword)
    if correct send back jwt token 
    ? something like that
*/
};

export { logInUser };
