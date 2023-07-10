import React from "react";


function Footer()
{
  const currentYear = new Date();
  const year = currentYear.getFullYear();
  return (<footer>
  <p>Copyright {year}</p>
</footer>);
}

export default Footer;
