import handler from "../srcs/cardAdd";

describe("cardAdd", () => {
  test("Should return 405 if method is not POST", async () => {
    const req = {
      method: "GET",
    };
    const res = {
      status: jest.fn(() => res),
      redirect: jest.fn(),
    };
    await handler(req, res);
    expect(res.status).toHaveBeenCalledWith(405);
    expect(res.redirect).toHaveBeenCalledWith("/addcard");

    // Needs to be tested separately because testEnvironment configuration for Jest clashes with mongoose. If they're together, the frontend test will fail.
  });
});
