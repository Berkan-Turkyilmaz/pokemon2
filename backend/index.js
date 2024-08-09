import express from "express";
import { scoreRouter } from "./routers/scoreRouter.js";
import { userRouter } from "./routers/userRouter.js";
import cors from 'cors';

const PORT = process.env.PORT ?? 5000;

const app = express();

app.use(cors());
app.use(express.json());

app.use("/API/scores", scoreRouter);
app.use("/API/users", userRouter)



app.listen(PORT, () => {
  console.log(`The server is running at http://localhost:${PORT}/API/scores`);
});