import { User } from "src/app/core/to/User";
import { ChallengeStatus } from "../../core/to/ChallengeStatus";
import { Parameter } from "./Parameter";
import { Tag } from "../../core/to/Tag";
import { Test } from "./Test";

export class ChallengeEdit {
    id : number | null = null;
    tags : Tag[] | null = [];
    name : string | null = null;
    description : string | null = null;
    functionName : string | null = null;
    className : string | null = null;
    multipleTries : boolean | null = null;
    outParameter: Parameter | null = null;
    inParameter: Parameter[] | null = [];
    test: Test[] | null = [];
  }
  