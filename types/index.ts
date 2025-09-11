/**
 * Represents the result of a server action.
 *
 * @template T - The type of the data returned on success.
 *
 * - On success:
 *   - `success`: true
 *   - `data`: Optional payload of type T
 *   - `message`: Optional success message
 *
 * - On failure:
 *   - `success`: false
 *   - `error`: An Error object describing the failure
 */
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

/**
 * Represents a server action function.
 *
 * @template Input - The type of the input argument. Defaults to void.
 * @template Output - The type of the output data on success. Defaults to undefined.
 *
 * A ServerAction is an asynchronous function that takes an argument of type Input
 * and returns a Promise resolving to a ServerActionResponse of type Output.
 *
 * @example
 * // Define a server action that takes a string and returns a number
 * const myAction: ServerAction<string, number> = async (input) => {
 *   // ...perform action...
 *   return { success: true, data: 42 }
 * }
 */
export type ServerAction<Input = void, Output = undefined> = (
  args: Input
) => Promise<ServerActionResponse<Output>>
