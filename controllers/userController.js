const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();
const { createUserSchema } = require('../validators/userValidator');

exports.createUser = async (req, res) => {
  const { error, value } = createUserSchema.validate(req.body);

  if (error) {
    return res.status(400).json({ error: error.details[0].message });
  }

  try {
    const user = await prisma.user.create({
      data: value,
    });
    return res.status(201).json(user);
  } catch (err) {
    return res.status(500).json({ error: 'Email already exists or DB error' });
  }
};