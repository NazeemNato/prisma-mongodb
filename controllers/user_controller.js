const { PrismaClient } = require("@prisma/client");

const { user } = new PrismaClient();

exports.get_users = async (req, res) => {
  try {
    const users = await user.findMany({
      select: {
        username: true,
        post: true,
      },
    });
    return res.send(users);
  } catch (error) {
    return res.status(500).send({ message: error.message });
  }
};

exports.create_user = async (req, res) => {
  const { username } = req.body;
  try {
    const isExist = await user.findUnique({
      where: {
        username,
      },
      select: {
        username: true,
      },
    });

    if (isExist) {
      throw Error("Username already taken");
    }

    const newUser = await user.create({
      data: {
        username,
      },
    });

    return res.send(newUser);
  } catch (error) {
    return res.status(500).send({ message: error.message });
  }
};
