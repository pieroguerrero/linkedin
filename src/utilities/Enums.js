const Reactions = Object.freeze({
  LIKE: "like",
  CELEBRATE: "celebrate",
  SUPPORT: "support",
  FUNNY: "funny",
  LOVE: "love",
  INSIGHTFUL: "insightful",
  CURIOUS: "curious",
});

const ReactionParentTypes = Object.freeze({
  POST: "post",
  POSTCOMMENT: "post-comment",
  COMMENTREPLY: "comment-reply",
});

const MediaTypes = Object.freeze({
  PHOTO: "photo",
  VIDEO: "video",
  NONE: "none",
});

const ProfileSections = Object.freeze({
  EDUCATION: "education",
  SKILL: "skill",
  EXPERIENCE: "experience",
});

export { Reactions, ReactionParentTypes, MediaTypes, ProfileSections };
