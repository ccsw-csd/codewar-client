export class CompilationTestExecutionResponse {
  name : string = "";
  executionTimeExpected : number = 0;
  executionTimeActual : number = 0;
  performance : boolean = false;
  inParameter: string = "";
  outParameterExpected : string = "";
  outParameterActual : string = "";
  testFail : boolean = true;
  testTimeout : boolean = true;
  consoleOut : string = "";

 

}
  