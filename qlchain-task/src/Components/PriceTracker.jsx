import "../App";
import "../styles.css";
import { useEffect, useState } from "react";
import { Sparklines, SparklinesLine, SparklinesSpots } from "react-sparklines";
import IMAGES from "../images/imagesarray.js";
import Button from "./Button";

function PriceTracker() {
  const [cryptoData, setCryptoData] = useState([]);
  const [sorted, setSorted] = useState({ sorted: "id", reversed: false });

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

  const sortById = () => {
    setSorted({ sorted: "id", reversed: !sorted.reversed });
    const coinCopy = [...cryptoData];
    coinCopy.sort((coinA, coinB) => {
      if (sorted.reversed) {
        return coinA.market_cap_rank - coinB.market_cap_rank
      }
      return coinB.market_cap_rank - coinA.market_cap_rank
    });
    setCryptoData(coinCopy);
  };

  const sortByName = () => {
    setSorted({ sorted: "name", reversed: !sorted.reversed });
    const coinCopy = [...cryptoData];
    coinCopy.sort((coinA, coinB) => {
      const fullNameA = coinA.name;
      const fullNameB = coinB.name;
      if (sorted.reversed) {
        return fullNameB.localeCompare(fullNameA);
      }
      return fullNameA.localeCompare(fullNameB);
    });
    setCryptoData(coinCopy);
  };

const sortByPrice = () => {
  setSorted({ sorted: "price", reversed: !sorted.reversed });
    const coinCopy = [...cryptoData];
    coinCopy.sort((coinA, coinB) => {
      if (sorted.reversed) {
        return coinA.current_price - coinB.current_price
      }
      return coinB.current_price- coinA.current_price
    });
    setCryptoData(coinCopy);
};
  
  const sortByChange = () => {
    setSorted({ sorted: "change", reversed: !sorted.reversed });
    const coinCopy = [...cryptoData];
    coinCopy.sort((coinA, coinB) => {
      if (sorted.reversed) {
        return coinA.price_change_percentage_24h - coinB.price_change_percentage_24h
      }
      return coinB.price_change_percentage_24h- coinA.price_change_percentage_24h
    });
    setCryptoData(coinCopy);
  };
  const renderUsers = () => {
    return cryptoData.map((cryptocurr) => {
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
            })
  }

  const renderArrow = () => {
    if (sorted.reversed) {
      return <img src={IMAGES.arrowDropUp} className="dropup"></img>
    }
    return <img src={IMAGES.arrowDropDown}></img>

  }

  return (
    <>
      <div className="PriceTracker">
        <table className="main-table">
          <thead className="main-head">
            <tr className="table-header">
              <th className="th-Seq" onClick={sortById}>
                Seq {sorted.sorted === "id" ? renderArrow() : null}  
              </th>
              <th className="th-CN" onClick={sortByName}>
                Currency Name {sorted.sorted === "name" ? renderArrow() : null}</th>
              <th className="th-P" onClick={sortByPrice}>
                Price {sorted.sorted === "price" ? renderArrow() : null}</th>
              <th className="th-C" onClick={sortByChange}>
                Change {sorted.sorted === "change" ? renderArrow() : null}</th>
              <th className="th-Cha">Chart</th>
              <th className="th-Q">
                Quantum Key <img src={IMAGES.info}></img>
              </th>
            </tr>
          </thead>
          <tbody className="main-tail">
            {renderUsers()}
          </tbody>
        </table>
      </div>
    </>
  );
}

export default PriceTracker;
