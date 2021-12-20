import React from 'react'
import mostlycloudy from "../img/weather-icons/mostlycloudy.svg"
import Clear from "../img/weather-icons/clear.svg"



export default function Card(props) {
    console.log(props.data);
     return (
      <div className="listItem">
        {props.data && props.data.map((x, i) => {
           // const img = x.weather[0].main === "Clouds" ? MostlyCloudy : Clear;
        //   const id = x.weather[0].id;
          const weatherMain = x.weather[0].main;
          const img = weatherMain === "Clouds" ? mostlycloudy : Clear;
  
          if (i <= 6) {
            return (
              <div key={i}>
                <p>{x.dt_txt.split(" ")[1].slice(0, 5)}</p>
                <img src={img} alt="sun" width="75" height="75" />
                <p>{x.main.temp_kf} &#176;C</p>
              </div>
            );
          }
        })}
      </div>
    );
  }
  
{/* // export default function Card() {
    return (
        <div>
            <div className="listItem">
            <div><p>03.00</p>
            <img src={mostlycloudy } alt="sun" width="75" height="75" />
            <p>8 &#176;C</p>
            </div>
            <div>
            <p>06.00</p>
            <img src={mostlycloudy } alt="sun" width="75" height="75" />
            <p>9 &#176;C</p>
            </div>
            <div>
            <p>09.00</p>
            <img src={Clear} alt="sun" width="75" height="75" />
            <p>14 &#176;C</p>
            </div>
            <div>
            <p>12.00</p>
            <img src={Clear} alt="sun" width="75" height="75" />
            <p>17 &#176;C</p>
            </div>
            <div>
            <p>15.00</p>
            <img src={Clear} alt="sun" width="75" height="75" />
            <p>18 &#176;C</p>
            </div>
            <div>
            <p>17.00</p>
            <img src={Clear} alt="sun" width="75" height="75" />
            <p>16 &#176;C</p>
            </div>
            <div>
            <p>21.00</p>
            <img src={mostlycloudy} alt="sun" width="75" height="75" />
            <p>13 &#176;C</p>
            </div>
          </div>
        </div>
    )
} */}
