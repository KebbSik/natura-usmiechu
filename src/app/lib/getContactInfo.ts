import { fetchHygraph } from "./hygraph";
import { CONTACT_QUERY } from "../graphql/queries/contact";
import { ContactInfosResponse } from "../types/contact";

export async function getContactInfo() {
  const data = await fetchHygraph<ContactInfosResponse>({
    query: CONTACT_QUERY,
  });

  if (!data.contactInfos.length) {
    throw new Error("No contact info found");
  }

  return data.contactInfos[0];
}
