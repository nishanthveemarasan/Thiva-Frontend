import ApiHelper from "@/components/helper/ApiHelper.ts";
import axios from "axios";

jest.mock("axios", () => ({
  __esModule: true,
  default: {
    create: jest.fn(() => ({
      request: jest.fn(),
    })),
  },
}));

const mockAxiosInstance = (axios.create as jest.Mock).mock.results[0].value;
const mockRequest = mockAxiosInstance.request as jest.Mock;

describe("test ApiHelper.js", () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  describe("test clientTokenRequest function", () => {
    test("should successfully retrieve an access token", async () => {
      mockRequest.mockResolvedValueOnce({
        data: { access_token: "test-token" },
      });

      const response = await ApiHelper.clientTokenRequest();

      expect(response.data.access_token).toBe("test-token");
      expect(mockRequest).toHaveBeenCalledTimes(1);
    });

    test("should send POST request with FormData", async () => {
      mockRequest.mockResolvedValueOnce({
        data: { access_token: "test-token" },
      });

      await ApiHelper.clientTokenRequest();

      expect(mockRequest).toHaveBeenCalledWith(
        expect.objectContaining({
          method: "POST",
          data: expect.any(FormData),
        }),
      );
    });

    test("should retry when access token is missing", async () => {
      mockRequest
        .mockResolvedValueOnce({ data: {} })
        .mockResolvedValueOnce({ data: {} })
        .mockResolvedValueOnce({
          data: { access_token: "test-token" },
        });

      const response = await ApiHelper.clientTokenRequest();

      expect(response.data.access_token).toBe("test-token");
      expect(mockRequest).toHaveBeenCalledTimes(3);
    });

    test("should stop after three unsuccessful attempts", async () => {
      mockRequest.mockResolvedValue({ data: {} });

      const response = await ApiHelper.clientTokenRequest();

      expect(response.data.access_token).toBeUndefined();
      expect(mockRequest).toHaveBeenCalledTimes(3);
    });

    test("should throw an error when token request fails", async () => {
      mockRequest.mockRejectedValueOnce(new Error("Token request failed"));

      await expect(ApiHelper.clientTokenRequest()).rejects.toThrow(
        "Token request failed",
      );
    });
  });

  describe("test request function", () => {
    test("should set loading true when request starts", async () => {
      const setLoading = jest.fn();

      mockRequest
        .mockResolvedValueOnce({
          data: { access_token: "test-token" },
        })
        .mockResolvedValueOnce({
          data: {},
        });

      await ApiHelper.request({
        endpoint: "/api/users",
        setLoading,
      });

      expect(setLoading).toHaveBeenNthCalledWith(1, true);
    });

    test("should make a successful GET request", async () => {
      mockRequest
        .mockResolvedValueOnce({
          data: { access_token: "test-token" },
        })
        .mockResolvedValueOnce({
          data: { message: "Success" },
        });

      const response = await ApiHelper.request({
        endpoint: "/api/users",
      });

      expect(response).toEqual({
        success: true,
        result: { message: "Success" },
      });

      expect(mockRequest).toHaveBeenCalledTimes(2);
    });

    test("should make a successful POST request with body", async () => {
      const body = { name: "John" };

      mockRequest
        .mockResolvedValueOnce({
          data: { access_token: "test-token" },
        })
        .mockResolvedValueOnce({
          data: { id: 1 },
        });

      const response = await ApiHelper.request({
        endpoint: "/api/users",
        method: "POST",
        body,
      });

      expect(response.success).toBe(true);

      expect(mockRequest).toHaveBeenLastCalledWith(
        expect.objectContaining({
          url: "/api/users",
          method: "POST",
          data: body,
          headers: expect.objectContaining({
            Authorization: "Bearer test-token",
          }),
        }),
      );
    });

    test.each(["PUT", "PATCH", "DELETE"] as const)(
      "should support %s requests",
      async (method) => {
        mockRequest
          .mockResolvedValueOnce({
            data: { access_token: "test-token" },
          })
          .mockResolvedValueOnce({
            data: { success: true },
          });

        const response = await ApiHelper.request({
          endpoint: "/api/users/1",
          method,
        });

        expect(response.success).toBe(true);

        expect(mockRequest).toHaveBeenLastCalledWith(
          expect.objectContaining({
            url: "/api/users/1",
            method,
          }),
        );
      },
    );

    test("should include custom headers", async () => {
      mockRequest
        .mockResolvedValueOnce({
          data: { access_token: "test-token" },
        })
        .mockResolvedValueOnce({
          data: {},
        });

      await ApiHelper.request({
        endpoint: "/api/users",
        headers: {
          "X-Custom-Header": "custom-value",
        },
      });

      expect(mockRequest).toHaveBeenLastCalledWith(
        expect.objectContaining({
          headers: expect.objectContaining({
            "X-Custom-Header": "custom-value",
            Authorization: "Bearer test-token",
          }),
        }),
      );
    });

    test("should return failure when access token is missing", async () => {
      mockRequest.mockResolvedValue({ data: {} });

      const response = await ApiHelper.request({
        endpoint: "/api/users",
      });

      expect(response).toEqual(
        expect.objectContaining({
          success: false,
        })
      );

      expect(mockRequest).toHaveBeenCalledTimes(3);
    });

    test("should return failure when API request throws an error", async () => {
      mockRequest
        .mockResolvedValueOnce({
          data: { access_token: "test-token" },
        })
        .mockRejectedValueOnce(new Error("API request failed"));

      const response = await ApiHelper.request({
        endpoint: "/api/users",
      });

      expect(response).toEqual(
        expect.objectContaining({
          success: false,
        })
      );
    });
    test("should set loading false when request finishes", async () => {
      const setLoading = jest.fn();

      mockRequest
        .mockResolvedValueOnce({
          data: { access_token: "test-token" },
        })
        .mockResolvedValueOnce({
          data: {},
        });

      await ApiHelper.request({
        endpoint: "/api/users",
        setLoading,
      });

      expect(setLoading).toHaveBeenNthCalledWith(2, false);
    });

    test("should reset loading when request fails", async () => {
      const setLoading = jest.fn();

      mockRequest
        .mockResolvedValueOnce({
          data: { access_token: "test-token" },
        })
        .mockRejectedValueOnce(new Error("Request failed"));

      await ApiHelper.request({
        endpoint: "/api/users",
        setLoading,
      });

      expect(setLoading).toHaveBeenNthCalledWith(1, true);
      expect(setLoading).toHaveBeenNthCalledWith(2, false);
    });
    test("should not stop loading when stopLoadingOnFinish is false", async () => {
      const setLoading = jest.fn();

      mockRequest
        .mockResolvedValueOnce({
          data: { access_token: "test-token" },
        })
        .mockResolvedValueOnce({
          data: {},
        });

      await ApiHelper.request({
        endpoint: "/api/users",
        setLoading,
        stopLoadingOnFinish: false,
      });

      expect(setLoading).toHaveBeenCalledTimes(1);
      expect(setLoading).toHaveBeenCalledWith(true);
    });
  });
});
