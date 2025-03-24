/* eslint-disable @typescript-eslint/no-explicit-any */
import axios from "axios"

export default class UserAPI {
  public static async getUser(username: string): Promise<any> {
    const response = await axios.get(
      `${import.meta.env.VITE_API_URL}/user/${username}`,
    )

    return response.data
  }
}
