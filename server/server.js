const express = require('express');
const app = express();
const port = process.env.PORT || 5000;
const propertyRoutes = require('./routes/properties')
const cors = require('cors');
require('dotenv').config();

app.listen(port, () => console.log(`Listening on port ${port}`));

app.use(cors({
  credentials: true,
  origin: process.env.FRONTEND_POINT
}));

app.use('/api/properties', propertyRoutes);

// For any routes that starts with "/api", catch 404 and forward to error handler
app.use("/api/*", (req, res, next) => {
  let err = new Error("Not Found");
  err.status = 404;
  next(err);
})
