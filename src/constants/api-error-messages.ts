export const API_ERROR_MESSAGES = {
    API_NOT_FOUND: (req: { method: string, url: string }) => `Couldn't found API verb: ${req.method} - url: ${req.url}`,
    UNHANDLED_ERROR: "An error ocurred while running the requested operation. Please try again later.",
} as const;