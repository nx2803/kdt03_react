import React from 'react'
import CurrentTime from "./CurrentTime";
import Clock from "./Clock";
export default function MyClock() {
  return (
    <div>
      <Clock/>
        <CurrentTime/>
    </div>
  )
}
