import { ChallengeParameter } from './ChallengeParameter';

export class ChallengeEdit {
    id: number;
    name: string;
    createdDate: Date;
    endDate?: Date;
    tries: boolean;
    statusId: number;
    description: string;
    challengeParameter: ChallengeParameter[];
}