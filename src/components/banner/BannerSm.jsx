import React from 'react'
import {motion} from "framer-motion"


const BannerSm = () => {
  return (
    <main>
      <div className="w-full bg-orange-600 h-44">
<motion.div  animate={{ x: 100 }}
  transition={{ type: "spring", stiffness: 100 }}  className="">
Makes Life Better
<h1></h1>
</motion.div>
      </div>
    </main>
  )
}

export default BannerSm
