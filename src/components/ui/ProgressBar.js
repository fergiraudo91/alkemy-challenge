import React, { useEffect, useState } from 'react'

export const ProgressBar = ({value, newClass, maxValue = 100}) => {
  const [progress, setProgress] = useState(0);
  useEffect(() => {
    if(progress <= value){
      setTimeout(() => {
        setProgress(progress + 1);
      }, 10);
    }
  }, [progress, value]);


    return (
        <div className="progress">
        <div
          className={`progress-bar ${newClass}`}
          role="progressbar"
          style={{ width: `${progress}%`}}
          aria-valuenow={progress}
          aria-valuemin="0"
          aria-valuemax="100"
        ></div>
      </div>
    )
}
