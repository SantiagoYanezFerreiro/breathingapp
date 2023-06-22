import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faTwitter,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";

export default function SupportUs() {
  return (
    <div className="about-section-container">
      <h1 className="text-section-heading">Our Goals</h1>
      <p className="text-section-content">
        At BreathingApp, our goal is to help you find relaxation and effectively
        cope with stress. We provide a wide range of resources, tools, and
        techniques to create a calm and peaceful environment for you to improve
        your overall well-being. Whether you are looking for meditation
        techniques, stress management tips, or mindfulness practices, we are
        here to support you on your journey to tranquility.
      </p>
      <img
        src="https://images.unsplash.com/photo-1507120410856-1f35574c3b45?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGJyZWF0aGluZ3xlbnwwfDB8MHx8fDA%3D&auto=format&fit=crop&w=400&q=60"
        className="supportus-image"
      ></img>
      <h2 className="text-section-heading">Support Us</h2>
      <p className="text-section-content">
        If you appreciate the positive impact we are making and would like to
        support our mission, there are a few ways you can help:
      </p>
      <p className="text-section-content">
        Connect on Social Media: Stay updated on our latest content, events, and
        promotions by liking and following us on social media. You can find our
        social media links below.
      </p>

      <ul className="social-media-icons">
        <li className="footer-item">
          <a
            rel="noreferrer"
            href="https://www.instagram.com"
            className="footer-link"
            target="_blank"
          >
            <FontAwesomeIcon
              className="social-icons support-icon"
              icon={faInstagram}
            />
          </a>
          <a
            rel="noreferrer"
            href="https://www.instagram.com"
            className="footer-link"
            target="_blank"
          >
            <FontAwesomeIcon
              className="social-icons support-icon"
              icon={faTwitter}
            />
          </a>
          <a
            rel="noreferrer"
            href="https://www.instagram.com"
            className="footer-link"
            target="_blank"
          >
            <FontAwesomeIcon
              className="social-icons support-icon"
              icon={faFacebook}
            />
          </a>
        </li>
      </ul>
      <p className="text-section-content">
        Leave a Review: If you have found our services valuable, please consider
        leaving a review on the Google App Store. Your feedback helps us reach
        more people who can benefit from our resources.
      </p>
      <a href="https://play.google.com/store/apps/details?id=com.yourapp.package">
        <p className="review-link">
          &#9733;&#9733;&#9733;&#9733;&#9733; Give Us a Five Star Review Here
          &#9733;&#9733;&#9733;&#9733;&#9733;
        </p>
      </a>

      <p className="text-section-content">
        Make a Donation: If you would like to make a financial contribution, we
        offer options for one-time donations or ongoing monthly support. Your
        generous contributions enable us to continue providing the best
        breathing app possible. Below, you will find our bank details for direct
        donations and secure online donation links.
      </p>
      <p className="text-section-content">
        Thank you for considering supporting us. Together, we can make a
        difference in helping people find relaxation and effectively manage
        stress in their lives.
      </p>
    </div>
  );
}
