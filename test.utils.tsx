/**
 * Project vite (base-testing)
 */

///////////////////// ENV /////////////////////
type Env = Partial<typeof import('@/env').default>;
const envMockObj = {} as Env;
vi.mock('@/env', () => ({ default: envMockObj }));
export const envMock = (result: Env) => Object.assign(envMockObj, result);
