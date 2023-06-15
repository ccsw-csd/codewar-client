import { ChallengeParameter } from './ChallengeParameter';
import { Status } from '../../core/models/Status';

export class ChallengeEdit {
    id: number;
    name: string;
    createdDate: Date;
    endDate?: Date;
    tries: boolean;
    status: Status;
    description: string;
    challengeParameter: ChallengeParameter[];
    className: string;
    functionName: string;
}