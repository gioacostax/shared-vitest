/**
 * This file can be used to define Astro utils
 */

//////////////////////////////////////////////////////////////
const getCollectionMockFn = vi.fn();

vi.mock('astro:content', async (requireActual) => ({
  ...(await requireActual<object>()),
  getCollection: () => getCollectionMockFn,
}));

export const getCollectionMock = (results: Record<string, unknown>[] = []) => {
  getCollectionMockFn.mockResolvedValue(results);
  return getCollectionMockFn;
};
