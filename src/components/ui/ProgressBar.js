import React from 'react'

export const ProgressBar = ({value, newClass}) => {
    return (
        <div className="progress">
        <div
          className={`progress-bar ${newClass}`}
          role="progressbar"
          style={{ width: `${value}%`}}
          aria-valuenow={value}
          aria-valuemin="0"
          aria-valuemax="100"
        ></div>
      </div>
    )
}
