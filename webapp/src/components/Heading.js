import React from "react"
import cx from "classnames"
import { IsMobile } from '../components/deviceDetect';

function Heading({ children, className, ...rest }) {
  const isMobile = IsMobile();
  return (
    <div  className={cx(isMobile ?"text-25p":"text-40", className)}>
      <div className="bg-lightBrown rounded-tr-xl rounded-bl-xl object-fill h-3 w-20"></div>
      <h1 {...rest}>
        {children}
      </h1>
    </div>
  )
}

export default Heading
