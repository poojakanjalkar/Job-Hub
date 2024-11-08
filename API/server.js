//using ES6 in node
import * as dotenv from "dotenv";
dotenv.config();
import morgan from "morgan";
import router from "../API/src/Router/job.route.js";
const app = express();

if (process.env.NODE_ENV === "development") {
  app.use(morgan("dev")); //it provides info about response time and content_length
}
app.use(express.json());

app.use("/", router);
app.get("/", (req, res) => {
  res.send("hello world");
});

app.post("/", (req, res) => {
  const result = req.body;
  res.json({ message: "REsul success", result });
});

const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log(`server running on port ${port}...`);
});
