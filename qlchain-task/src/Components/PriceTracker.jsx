import "../App";
import "../styles.css";
import { useEffect, useState } from "react";
import { Sparklines, SparklinesLine, SparklinesSpots } from "react-sparklines";
import IMAGES from "../images/imagesarray.js";
import Button from "./Button";

function PriceTracker() {
  const [cryptoData, setCryptoData] = useState([]);

  useEffect(() => {
    const interval = setInterval(() => {
      fetchCryptoData();
    }, 10000);
    return () => clearInterval(interval);
  }, [cryptoData]);

  const fetchCryptoData = async () => {
    const data = await fetch(
      "https://api.coingecko.com/api/v3/coins/markets?vs_currency=aed&per_page=5&page=1&sparkline=true"
    );
    const apiResponse = await data.json();
    setCryptoData(apiResponse);
  };

  return (
    <>
      <div className="PriceTracker">
        <table className="main-table">
          <thead className="main-head">
            <tr className="table-header">
              <th className="th-Seq">
                Seq <img src={IMAGES.arrowDropDown}></img>
                <img src={IMAGES.arrowDropUp} className="dropup"></img>
              </th>
              <th className="th-CN">
                Currency Name <img src={IMAGES.arrowDropDown}></img>
                <img src={IMAGES.arrowDropUp} className="dropup"></img>
              </th>
              <th className="th-P">
                Price <img src={IMAGES.arrowDropDown}></img>
                <img src={IMAGES.arrowDropUp} className="dropup"></img>
              </th>
              <th className="th-C">
                Change <img src={IMAGES.arrowDropDown}></img>
                <img src={IMAGES.arrowDropUp} className="dropup"></img>
              </th>
              <th className="th-Cha">Chart</th>
              <th className="th-Q">
                Quantum Key <img src={IMAGES.info}></img>
              </th>
            </tr>
          </thead>
          <tbody className="main-tail">
            {cryptoData.map((cryptocurr) => {
              return (
                <tr>
                  <td className="seq">{cryptocurr.market_cap_rank}</td>
                  <td className="curr-name">
                    <div>
                      <img
                        src={cryptocurr.image}
                        alt="coin-symbol"
                        className="crypto-img"
                      ></img>
                    </div>
                    <div className="crypto-name">{cryptocurr.name}</div>
                    <div className="crypto-symbol">{cryptocurr.symbol}</div>
                  </td>
                  <td className="curr-price">AED {cryptocurr.current_price}</td>
                  <td className="curr-change">
                    {cryptocurr.price_change_percentage_24h}%
                  </td>
                  <td>
                    <div className="chart">
                      <Sparklines data={cryptocurr.sparkline_in_7d.price}>
                        <SparklinesLine style={{ fill: "none" }} />
                        <SparklinesLine color="purple" />
                        <SparklinesSpots />
                      </Sparklines>
                    </div>
                  </td>
                  <td>
                    <div>
                      <Button></Button>
                    </div>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </>
  );
}

export default PriceTracker;
