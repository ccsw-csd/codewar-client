import { User } from "src/app/core/to/User";
import { ChallengeStatus } from "./ChallengeStatus";
import { Tag } from "./Tag";

export class Challenge {
    id : number | null = null;
    user : User | null = null;
    status : ChallengeStatus | null = null;
    tags : Tag[] | null = null;
    creationDate : Date | null = null;
    name : string | null = null;
    description : string | null = null;
    baseCode : string | null = null;
    functionName : string | null = null;
    className : string | null = null;
    startDate : Date | null = null;
    endDate : Date | null = null;
    multipleTries : boolean | null = null;
    numParticipation : number | null = null;
  }
  