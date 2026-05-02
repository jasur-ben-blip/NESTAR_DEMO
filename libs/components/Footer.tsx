import { Stack } from "@mui/material";
import FacebookIcon from "@mui/icons-material/Facebook";
import TelegramIcon from "@mui/icons-material/Telegram";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";

const Footer = () => {
  return (
    <Stack id="footer">
      <Stack className="footer-container">
        {/* MAIN */}
        <Stack className="main">
          {/* LEFT */}
          <Stack className="left">
            <Stack className="footer-box">
              <img className="logo" src="/img/logo/logoWhite.svg" alt="" />
            </Stack>
            <span>Total Free Customer Care</span>
            <p>+82 10 4867 2909</p>
            <span>Nee Live</span>
            <p>+82 10 4867 2909</p>
            <span>Support?</span>
            <p>Follow Us On Social Media</p>
            <Stack className="media-box" flexDirection={"row"}>
              <FacebookIcon />
              <TelegramIcon />
              <InstagramIcon />
              <TwitterIcon />
            </Stack>
          </Stack>

          {/* RIGHT */}
          <Stack className="right">
            <Stack className="top">
              <strong>Keep Yourself Up To Date</strong>
              <div>
                <input type="text" placeholder="Your Email" />
                <span>Subscribe</span>
              </div>
            </Stack>
            <Stack className="bottom">
              <div>
                <strong>Popular Search</strong>
                <span>Property for Rent</span>
                <span>Property Low to hide</span>
              </div>
              <div>
                <strong>Quick Links</strong>
                <span>Terms of Use</span>
                <span>Privacy Policy</span>
                <span>Pricing Plans</span>
                <span>Our Services</span>
                <span>Contact Support</span>
                <span>FAQs</span>
              </div>
              <div>
                <strong>Discover</strong>
                <span>Seoul</span>
                <span>Gyeongido</span>
                <span>Busan</span>
                <span>Jejudo</span>
              </div>
            </Stack>
          </Stack>
        </Stack>

        {/* SECOND - Copyright */}
        <Stack className="second">
          <span>© Nestar - All rights reserved. Nestar 2026</span>
          <span>Privacy · Terms · Sitemap</span>
        </Stack>
      </Stack>
    </Stack>
  );
};

export default Footer;
