import express from "express";
import router from "./routes"; // Make sure the path is correct

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use("/", router);

const port = process.env.PORT || 1245;

app.listen(port, () => {
    console.log(`Server is listening on port ${port}`);
});

export default app;
