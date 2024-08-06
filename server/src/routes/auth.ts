import express, { Request, Response } from "express";
import passport from "passport";
import { authMiddleware } from "../middlewares/auth";

const router = express.Router();

router.get(
  "/google",
  passport.authenticate("google", {
    scope: ["profile", "email"],
  })
);

router.get(
  "/google/callback",
  passport.authenticate("google"),
  (req: Request, resp: Response) => {
    resp.redirect(process.env.CLIENT_URL as string);
  }
);

router.get("/logout", (req: Request, resp: Response) => {
  req.logout(() => {});
  resp.redirect("process.env.CLIENT_URL as string");
});

router.get("/me", authMiddleware, (req: Request, resp: Response) => {
  const user = req.user;
  resp.status(200).json({ user });
});

export default router;
