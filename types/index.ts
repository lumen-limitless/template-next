export type ServerActionResponse<T = undefined> =
  | {
      success: true
      data?: T
      message?: string
    }
  | {
      success: false
      error: Error
    }

export type ServerAction<Input = void, Output = undefined> = (
  args: Input
) => Promise<ServerActionResponse<Output>>
