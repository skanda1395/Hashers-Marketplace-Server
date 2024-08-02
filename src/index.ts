import express from "express";
import prisma from "./prisma";

const app = express();
app.use(express.json());

app.get("/", async(req, res) => {
  const users = await prisma.user.findMany();
  res.json(users);
});

app.post("/user", async(req, res) => {
  const { email, password } = req.body;
  const user = await prisma.user.create({
    data: {
      email,
      password
    }
  });
  res.json(user);
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on localhost:${PORT}`);
});

