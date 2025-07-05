import Wave from "react-wavify"

export default function Waves(){
    return <Wave mask="url(#mask)" fill="#1277b0" 
            options={{
            height: 1,
            amplitude: 20,
            speed: 0.3,
            points: 4
          }}
          style={{height:"40em"}}
          >
          <defs>
            <linearGradient id="gradient" gradientTransform="rotate(180)">
              <stop offset="0" stopColor="white" />
              <stop offset="0.5" stopColor="black" />
            </linearGradient>
            <mask id="mask">
              <rect x="0" y="0" width="2000" height="400" fill="url(#gradient)"  />
            </mask>
          </defs>
      </Wave>
}