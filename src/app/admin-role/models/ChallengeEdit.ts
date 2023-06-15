import { ChallengeParameter } from './ChallengeParameter';
import { Status } from '../../core/models/Status';
import { Tag } from 'src/app/core/models/Tag';

export class ChallengeEdit {
    id: number;
    name: string;
    createdDate: Date;
    endDate?: Date;
    tries: boolean;
    status: Status;
    description: string;
    className: string;
    functionName: string;
    challengeParameters: ChallengeParameter[];
    tags: Tag[];
}