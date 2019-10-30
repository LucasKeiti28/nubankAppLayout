const express = require("express");
const multer = require("multer");

const uploadConfig = require("./config/upload");

const routes = express.Router();
const upload = multer(uploadConfig);

const SessionController = require("../src/controller/SessionController");
const SpotController = require("../src/controller/SpotController");
const DashboardController = require("../src/controller/DashboardController");
const BookingController = require("../src/controller/BookingController");

const ApprovalController = require("../src/controller/ApprovalController");
const RejectionController = require("../src/controller/RejectionController");

routes.post("/sessions", SessionController.store);
routes.post("/spots", upload.single("thumbnail"), SpotController.store);

routes.get("/spots", SpotController.index);
routes.get("/dashboard", DashboardController.show);

routes.post("/spots/:spot_id/bookings", BookingController.store);

routes.post("/bookings/:booking_id/approvals", ApprovalController.store);
routes.post("/bookings/:booking_id/rejections", RejectionController.store);

module.exports = routes;
