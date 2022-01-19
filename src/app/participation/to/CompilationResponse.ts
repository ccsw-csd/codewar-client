import { CompilationTestExecutionResponse } from "./CompilationTestExecutionResponse";

export class CompilationResponse {
  compileError : boolean;
  errors : Array<any> = [];
  testExecutionResult: Array<CompilationTestExecutionResponse> = []; 
}
  