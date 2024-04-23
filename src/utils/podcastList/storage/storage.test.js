import { PODCASTS_LIST } from "../../../consts/storage";
import { getLocalStoragePodcasts, saveLocalStoragePodcasts } from "./storage";

const localStorageBackup = global.localStorage;

delete global.localStorage;
global.localStorage = {
  getItem: jest.fn(),
  setItem: jest.fn(),
};

describe("podcast list storage", () => {
  afterAll(() => {
    global.localStorage = localStorageBackup;
  });

  it("getLocalStoragePodcasts", () => {
    getLocalStoragePodcasts();

    expect(global.localStorage.getItem).toBeCalledWith(PODCASTS_LIST);
  });

  it("saveLocalStoragePodcasts", () => {
    saveLocalStoragePodcasts();

    expect(global.localStorage.setItem).toBeCalled();
  });
});
