import { googleSearchURL } from "~constant/url"

const getGoogleSearchURL = (query: string) => {
  return `${googleSearchURL}${query}`
}

export { getGoogleSearchURL }
