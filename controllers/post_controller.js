const { PrismaClient } = require("@prisma/client");

const { user, post } = new PrismaClient();

exports.create_post = async (req, res) => {
	try {
		const { title, body, userId } = req.body;

		const userExist = await user.findUnique({
			where: {
				id: userId,
			},
		});

		if (!userExist) {
			return res.status(400).send({ message: "User not exist" });
		}

		const newPost = await post.create({
			data: {
				title,
				body,
				userId,
			},
		});

		return res.send(newPost);
	} catch (error) {
		return res.status(500).send({ message: error.message });
	}
};
