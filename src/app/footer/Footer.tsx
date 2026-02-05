"use server";
import { getContactInfo } from "../lib/getContactInfo";
import FooterClient from "./FooterClient";

const Footer = async () => {
  const contactInfo = await getContactInfo();

  return <FooterClient contactInfo={contactInfo}></FooterClient>;
};

export default Footer;
