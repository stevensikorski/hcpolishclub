import Image from "next/image";

import { navigationMobileData, socials } from "@/library/data";
import { GrFacebookOption, GrInstagram, GrLinkedinOption, GrYoutube } from "react-icons/gr";

import QuickLinkComponent from "./QuickLinksComponent";

export default function FooterComponent() {
  return (
    <footer className="w-full bg-czerwony">
      <section className="page py-12">
        {/* Footer Content */}
        <div className="tablet:flex justify-between pb-6">
          {/* Social Media */}
          <div className="tablet:w-1/2 desktop:w-5/12">
            <p className="footer-text font-bold underline underline-offset-3">Stay Connected</p>
            <p className="footer-text mt-6">Please check us out on our social media below. Follow us for the latest updates, event announcements, and more.</p>
            <ul className="gap-6 flex mt-6">
              <li>
                <a href={socials.facebook.url} target="_blank">
                  <GrFacebookOption className="footer-social"></GrFacebookOption>
                </a>
              </li>
              <li>
                <a href={socials.linkedin.url} target="_blank">
                  <GrLinkedinOption className="footer-social"></GrLinkedinOption>
                </a>
              </li>
              <li>
                <a href={socials.instagram.url} target="_blank">
                  <GrInstagram className="footer-social"></GrInstagram>
                </a>
              </li>
              <li>
                <a href={socials.youtube.url} target="_blank">
                  <GrYoutube className="footer-social"></GrYoutube>
                </a>
              </li>
            </ul>
          </div>

          {/* Quick Links */}
          <div className="tablet:w-1/2 desktop:w-5/12 mt-6 tablet:mt-0">
            <p className="footer-text font-bold underline underline-offset-3">Quick Links</p>
            <ul className="grid tablet:grid-cols-2 gap-3 tablet:gap-6 desktop:gap-3 mt-6">
              {Object.keys(navigationMobileData).map((key) => {
                return <QuickLinkComponent key={key} text={navigationMobileData[key].text} url={navigationMobileData[key].url} list={navigationMobileData[key].list} visible={navigationMobileData[key].visible} items={navigationMobileData[key].items}></QuickLinkComponent>;
              })}
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="pt-6 border-t border-white flex flex-col tablet:flex-row justify-between items-center">
          <div className="flex justify-start items-center">
            <Image src="/CoatOfArmsTransparent.svg" alt="Coat of Arms" height="24" width="24"></Image>
            <p className="footer-text ml-1">Polish Cultural Club of Hunter College</p>
          </div>
          <p className="footer-text">Copyright © 2024</p>
        </div>
      </section>
    </footer>
  );
}
