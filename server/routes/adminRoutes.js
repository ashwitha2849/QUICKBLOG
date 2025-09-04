import express from "express";
import { adminLogin,getAllComments,getAllBlogsAdmin,deleteCommentById,approveCommentId,getDashboard } from "../controllers/adminController.js";
import auth from "../middleware/auth.js";
 

const adminRouter = express.Router();

adminRouter.post("/login",adminLogin);
adminRouter.get("/comments",auth,getAllComments);
adminRouter.get("/blogs",auth,getAllBlogsAdmin);
adminRouter.post("/delete-comment",auth,deleteCommentById);
adminRouter.post("/approve-comment",auth,approveCommentId);
adminRouter.get("/dasboard",auth,getDashboard);

export default adminRouter;