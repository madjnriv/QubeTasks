import express from "express";
import { z } from "zod";
import { validateRequest } from "zod-express-middleware";
import {
  inviteMemberSchema,
  tokenSchema,
  workspaceSchema,
} from "../libs/validate-schema.js";
import authMiddleware from "../middleware/auth-middleware.js";
import {
  acceptGeneralInvite,
  acceptInviteByToken,
  createWorkSpace,
  getWorkSpaceDetails,
  getWorkspaceProjectArchive,
  getWorkSpaces,
  getWorkSpacesProjects,
  getWorkSpaceStats,
  getWorkspaceTaskArchive,
  inviteUserToWorkspace,
} from "../controllers/workspace-controller.js";

const router = express.Router();

router.post(
  "/",
  authMiddleware,
  validateRequest({ body: workspaceSchema }),
  createWorkSpace
);
router.post(
  "/accept-invite-token",
  authMiddleware,
  validateRequest({ body: tokenSchema }),
  acceptInviteByToken
);

router.post(
  "/:workspaceId/invite-member",
  authMiddleware,
  validateRequest({
    params: z.object({ workspaceId: z.string() }),
    body: inviteMemberSchema,
  }),
  inviteUserToWorkspace
);

router.post(
  "/:workspaceId/accept-general-invite",
  authMiddleware,
  validateRequest({ params: z.object({ workspaceId: z.string() }) }),
  acceptGeneralInvite
);

router.get("/", authMiddleware, getWorkSpaces);
router.get(
  "/:workspaceId",
  authMiddleware,
  validateRequest({ params: z.object({ workspaceId: z.string() }) }),
  getWorkSpaceDetails
);
router.get(
  "/:workspaceId/projects",
  authMiddleware,
  validateRequest({ params: z.object({ workspaceId: z.string() }) }),
  getWorkSpacesProjects
);
router.get(
  "/:workspaceId/stats",
  authMiddleware,
  validateRequest({ params: z.object({ workspaceId: z.string() }) }),
  getWorkSpaceStats
);
router.get(
  "/:workspaceId/projects",
  authMiddleware,
  validateRequest({ params: z.object({ workspaceId: z.string() }) }),
  getWorkSpacesProjects
);
router.get(
  "/:workspaceId/archive/projects",
  authMiddleware,
  validateRequest({ params: z.object({ workspaceId: z.string() }) }),
  getWorkspaceProjectArchive
);
router.get(
  "/:workspaceId/archive/tasks",
  authMiddleware,
  validateRequest({ params: z.object({ workspaceId: z.string() }) }),
  getWorkspaceTaskArchive
);

export default router;
