import { Status } from '../../core/models/Status';

export class Challenge {
    id: number;
    name: string;
    createdDate: Date;
    endDate?: Date;
    tries: boolean;
    status: Status;
} 