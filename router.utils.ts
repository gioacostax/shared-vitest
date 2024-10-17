/**
 * This file can be used to define Router test utils
 */

//////////////////////////////////////////////////////////////
const useNavigateMockFn = vi.fn();
const NavigateMockFn = () => null;

vi.mock('react-router-dom', async (requireActual) => ({
  ...(await requireActual<object>()),
  Navigate: NavigateMockFn,
  useNavigate: () => useNavigateMockFn,
}));

export const useNavigateMock = () => useNavigateMockFn;
export const NavigateMock = () => NavigateMockFn;
