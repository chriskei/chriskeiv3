import { contactDotPositions } from "./contactDotPositions";
import { emailDotPositions } from "./emailDotPositions";
import { githubDotPositions } from "./githubDotPositions";
import { instagramDotPositions } from "./instagramDotPositions";
import { linkedinDotPositions } from "./linkedinDotPositions";
import { resumeDotPositions } from "./resumeDotPositions";
import { tiktokDotPositions } from "./tiktokDotPositions";

const dotPositions = {
  contact: contactDotPositions,
  github: githubDotPositions,
  linkedin: linkedinDotPositions,
  email: emailDotPositions,
  instagram: instagramDotPositions,
  tiktok: tiktokDotPositions,
  resume: resumeDotPositions,
};

export { dotPositions };
