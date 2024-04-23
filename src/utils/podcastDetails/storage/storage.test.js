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

  it("getLocalStoragePodcastDetails should use localstorage", () => {
    getLocalStoragePodcastDetails();

    expect(global.localStorage.getItem).toBeCalledWith(PODCASTS_DETAILS);
  });

  it("getLocalStoragePodcastDetails should use localstorage and return data", () => {
    delete global.localStorage;
    global.localStorage = {
      getItem: jest.fn(() => JSON.stringify(localStoragePodcastDetails)),
      setItem: jest.fn(),
    };
    const podcastId = 1535809341;
    const details = getLocalStoragePodcastDetails(podcastId);
    expect(details).toReturnWith(localStoragePodcastDetails[podcastId]);

    expect(global.localStorage.getItem).toBeCalledWith(PODCASTS_DETAILS);
  });

  it("saveLocalStoragePodcastDetails should use localstorage", () => {
    saveLocalStoragePodcastDetails();

    expect(global.localStorage.setItem).toBeCalled();
  });
});
