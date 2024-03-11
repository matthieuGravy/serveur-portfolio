const cors = require("cors");

const corsOptions = {
  origin:
    process.env.NODE_ENV === "production"
      ? [process.env.PRODUCTION_ORIGIN]
      : [process.env.FRONTEND_URL],
  methods: "POST",
  credentials: true,
};

const configureCors = (app: express.Application) => {
  app.use(cors(corsOptions));
};

export default configureCors;
