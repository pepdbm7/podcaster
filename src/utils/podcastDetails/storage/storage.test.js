import { PODCASTS_DETAILS, PODCASTS_LIST } from "../../../consts/storage";
import { localStoragePodcastDetails } from "../../../test/fixtures/mockedData";
import {
  getLocalStoragePodcastDetails,
  saveLocalStoragePodcastDetails,
} from "./storage";

const localStorageBackup = global.localStorage;

describe("podcast list storage", () => {
  beforeEach(() => {
    delete global.localStorage;
    global.localStorage = {
      getItem: jest.fn(),
      setItem: jest.fn(),
    };
  });
  afterAll(() => {
    global.localStorage = localStorageBackup;
  });

  it("getLocalStoragePodcastDetails should use localstorage getItem method", () => {
    getLocalStoragePodcastDetails();

    expect(global.localStorage.getItem).toBeCalledWith(PODCASTS_DETAILS);
  });

  it("getLocalStoragePodcastDetails should get local storage data", () => {
    delete global.localStorage;
    global.localStorage = {
      getItem: jest.fn(() => JSON.stringify(localStoragePodcastDetails)),
      setItem: jest.fn(),
    };
    const podcastId = 1535809341;
    getLocalStoragePodcastDetails(podcastId);

    expect(global.localStorage.getItem).toBeCalledWith(PODCASTS_DETAILS);
  });

  it("saveLocalStoragePodcastDetails should use localstorage setItem method", () => {
    saveLocalStoragePodcastDetails();

    expect(global.localStorage.setItem).toBeCalled();
  });
});
