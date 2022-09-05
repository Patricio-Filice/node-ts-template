import { API_ERROR_MESSAGES } from '../api-error-messages';

describe("Api Error Messages", () => {
    it("Should format api not found message", async () => {
        expect(API_ERROR_MESSAGES.API_NOT_FOUND({ method: "POST", url: "/articles" })).toBe("Couldn't found API verb: POST - url: /articles");
    });
})