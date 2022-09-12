import React from 'react'

function Footer() {

const year = new Date().getFullYear();

  return (
    <div className='footer'>
        <p>Copyright &#xa9; {year}.</p>
        <p>Developed by Benny Boom Games. &#xae;</p>
    </div>
  );
}

export default Footer;