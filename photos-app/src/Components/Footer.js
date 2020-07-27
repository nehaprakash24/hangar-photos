import React from 'react'

import HangarIcon from '../assets/svg/hangar_logo_small.svg';

function Footer() {
  return (
    <div className = "row m-4 justify-content-center">
      <img src = {HangarIcon} alt="Hangar Icon" />
      <div className = "footer-note text-left font-weight-light ml-4">
        <div> &copy;2020 Hangar Worldwide. </div>
        <div> All Rights Reserved. Privacy Polivy </div>
      </div>
    </div>
  )
}

export default Footer
