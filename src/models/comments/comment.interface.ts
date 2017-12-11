import { Profile } from "../profile/profile.interface";

export interface Comment {
  user: Profile;
  date: Date;
  lastMessage: string;
}
