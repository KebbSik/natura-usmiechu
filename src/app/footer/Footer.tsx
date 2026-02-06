"use server";
import { getContactInfo } from "../lib/getContactInfo";
import FooterClient from "./FooterClient";

const Footer = async () => {
  // const contactInfo = await getContactInfo();

  // return <FooterClient contactInfo={contactInfo}></FooterClient>;
  return <div>Footer</div>;
};

export default Footer;
