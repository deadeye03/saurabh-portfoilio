const Footer = () => {
    return (
      <footer className="c-space pt-7 pb-3 border-t border-black-300 flex justify-between items-center flex-wrap gap-5">
        <div className="text-white-500 flex gap-2">
          <p>Terms & Conditions</p>
          <p>|</p>
          <p>Privacy Policy</p>
        </div>
  
        <div className="flex gap-3">
          <a href="https://github.com/deadeye03" target="_blank" rel="noreferrer" className="social-icon">
            <img src="/assets/github.svg" alt="github" className="w-1/2 h-1/2" />
          </a>
          <a href="https://www.linkedin.com/in/saurabh-kr-a99236264/" target="_blank" rel="noreferrer" className="social-icon">
            <img src="/assets/linkedin.svg" alt="linkedin" className="w-1/2 h-1/2" />
          </a>
          <a href="https://www.instagram.com/ig_saurabh.x/profilecard/?igsh=MWl4ZzVkNHh0ZWJvag==" target="_blank" rel="noreferrer" className="social-icon">
            <img src="/assets/instagram.svg" alt="instagram" className="w-1/2 h-1/2" />
          </a>
        </div>
  
        <p className="text-white-500">© 2024-2025 Saurabh Kumar. All rights reserved.</p>
      </footer>
    );
  };
  
  export default Footer;