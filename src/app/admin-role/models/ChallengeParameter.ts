import { ParameterType } from "src/app/core/models/ParameterType";

export class ChallengeParameter {
    id: number;
    name: string;
    parameterType: ParameterType;
    order: number;
    isInput: boolean;
}