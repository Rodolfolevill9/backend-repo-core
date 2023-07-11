import HttpRequest from '../httpRequestPage';
import BasePage from '../basePage';

const _axios = new HttpRequest();
const _basePage = new BasePage();

const authParams = _basePage.getAuthParams();

describe('Unit testing', () => {
  test('Get method', async () => {
    const resp = await _axios.axiosGet(
      `https://api.trello.com/1/boards/6286b3d99ce1f98edbf83ddb/lists?${authParams}`
    );
    expect(resp.status).toBe(200);
  });
});
