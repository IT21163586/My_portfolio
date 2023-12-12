const SocialIcons = () => {
  const styles = {
    icon: {
      textDecoration: "none",
      fontSize: "30px",
      padding: "15px",
      transition: "0.2s ease-in",
    },
  };

  return (
    <div className="socialIcons" style={styles.socialIcons}>
      <a className="icon" style={styles.icon} href="https://github.com/IT21163586">
        <i className="fa-brands fa-github" aria-hidden="true" title="Michael Yeates' GitHub Profile"></i>
      </a>
      <a className="icon" style={styles.icon} href="https://www.linkedin.com/in/isuru-anushka-1525851a7">
        <i className="fa-brands fa-linkedin" aria-hidden="true" title="Michael Yeates' LinkedIn Profile"></i>
      </a>
      <a className="icon" style={styles.icon} href="https://www.instagram.com/_isuru_a_n_u_/">
        <i className="fa-brands fa-instagram" aria-hidden="true" title="Michael Yeates' Instagram Profile"></i>
      </a>
      <a className="icon" style={styles.icon} href="https://twitter.com/IsuruAnushka4">
        <i className="fa-brands fa-twitter" aria-hidden="true" title="Michael Yeates' Twitter Profile"></i>
      </a>
      <a className="icon" style={styles.icon} href="https://wa.me/0703191282>">
        <i className="fa-brands fa-whatsapp" aria-hidden="true" title="Michael Yeates' GitHub Profile"></i>
      </a>
    </div>
  );
};

export default SocialIcons;
