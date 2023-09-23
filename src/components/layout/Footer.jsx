import { FaCode } from 'react-icons/fa'

function Footer() {
  const footerYear = new Date().getFullYear();

  return (
    <footer className='footer p-10 bg-stone-600 text-primary-content footer-center'>
      <div>
        <FaCode size={60}/>
        <p>Copyright &copy; {footerYear} All rights reserved</p>
      </div>
    </footer>
  );
}

export default Footer;
