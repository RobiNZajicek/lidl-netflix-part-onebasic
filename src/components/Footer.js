import React from 'react'
import "./Footer.css"
import { FaInstagram } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
const Footer = () => {
  return <section className='foot'>
<FaFacebookF className='face'/>
<FaInstagram className='ig'/>
<FaYoutube className='ytb'/>
<ul>
  <li>Audio Description</li>
  <li>Investor Relation</li>
  <li>Legal Notices</li>
  <li>help Center</li>
  <li>Jobs</li>
  <li>Cookie Preferences</li>
  <li>Gift Cards</li>
  <li>Terms of Use</li>
  <li>Comperete Information</li>
  <li>Media Center</li>
  <li>Privacy</li>
  <li>Contact Us</li>
</ul>
  </section>
}

export default Footer