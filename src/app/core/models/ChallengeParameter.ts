import { ParameterType } from "./ParameterType";

export class ChallengeParameter {
    id: number;
    name: string;
    parameterType: ParameterType;
    order: number;
    isInput: boolean;
}