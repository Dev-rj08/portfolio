import React from 'react'

const TempScreen = () => {
  return (
    <div className="relative h-20 sm:h-28 lg:h-36"> {/* Adjust height as needed */}
          <TypeAnimation
            className="absolute inset-0 pb-4 text-4xl font-thin tracking-tight sm:text-5xl lg:mt-16 lg:text-6xl"
            sequence={[
              "We're Temporarily Unavailable",
              3000
            ]}
            repeat={Infinity}
          />
    </div>
  )
}

export default TempScreen