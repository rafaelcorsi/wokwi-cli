import { type APIClient } from '../APIClient';
import { type TestScenario } from '../TestScenario';

export interface ISetControlParams {
  'part-id': string;
  control: string;
  value: number;
}

export class SetControlCommand {
  async run(scenario: TestScenario, client: APIClient, params: ISetControlParams) {
    await client.controlSet(params['part-id'], params.control, params.value);
  }
}
