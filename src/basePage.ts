/**
 * Variables required to access the Trello API.
 */
export enum Variables {
  // Api Key
  apiKey = 'fe2b4b44b9ac64d450ed0736500a251d',
  // Token key
  token = '3acc2e15b9fa1c80a6efc1747f799d687417a6d36aad4490f3ce918d2b037762',
  // Url base
  url = `https://api.trello.com/1/`,
}

export enum Contexts {
  cards = 'cards',
  boards = 'boards',
  lists = 'lists',
}

export default class BasePage {
  public getAuthParams() : string {
    const authParams = `key=${Variables.apiKey}&token=${Variables.token}`;
    return authParams;
  }
  public getUrlContext(context: Contexts) : string {
    const urlBase = `${Variables.url}${context}`
    return urlBase;
  }
  public getRandomName(): string {
    const randomNumber =Math.floor(Math.random() * 100);
    const randomName = ("Name Number: " + randomNumber);
    return randomName;
  }

} 