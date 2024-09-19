/**
 * This file can be used to define Test utils
 */

//////////////////////////////////////////////////////////////
type Env = Partial<typeof import('@/env').default>;
const envMockObj = {} as Env;
vi.mock('@/env', () => ({ default: envMockObj }));
export const envMock = (result: Env) => Object.assign(envMockObj, result);
