console.log("the bot is starting");
const fetch = require("node-fetch");
var firebase = require("firebase");
// require("firebase/app")
// require("firebase/database");

qrin = [];
qrim = [];
rin = [];
rim = [];
data = [];
function setup(hello) {
  const fetchWithRetry = async (url, opt, tries = 20) => {
    const errs = [];

    for (let i = 0; i < tries; i++) {
      // console.log(`trying GET '${url}' [${i + 1} of ${tries}]`);

      try {
        return await fetch(url, opt);
      } catch (err) {
        errs.push(err);
        console.log(err);
      }
    }

    throw errs;
  };

  goaling = function () {
    const goaly = function (rit) {
      fetchWithRetry(
        `https://rgs.betradar.com/bgw-services-af-rest/rest/bookmakers/27/markets?key=pK9saJZcyZRVRgZ9&ptype=vfl&rtype=sr_live&tag=vfl-${hello}-${rit}`
      )
        .then((response) => response.json())
        .then((data) => {
          rin.push({ rit, data });
        })
        .catch((err) => console.error(err));
      fetchWithRetry(
        `https://rgs.betradar.com/bgw-services-af-rest/rest/bookmakers/27/events?key=pK9saJZcyZRVRgZ9&ptype=vfl&rtype=sr_live&tag=vfl-${hello}-${rit}`
      )
        .then((response) => response.json())
        .then((data) => {
          rim.push({ rit, data });
          // console.log(rit + " Done");
        })
        .catch((err) => console.error(err));
    };
    for (x = 1; x < 31; x++) {
      setTimeout(goaly, x * 1000, x);
    }
  };
  // var botMatches = 67801;
  goaling();

  var creatorcot = setInterval(() => {
    if (rim.length === 30) {
      clearInterval(creatorcot);
      qrin.push(love(rin));
      qrim.push(love(rim));
      quick();
      // setTimeout(quick(), 3000);
    }
  }, 3000);
  var love = (input) => {
    function compare(a, b) {
      return a.rit - b.rit;
    }
    return input.sort(compare);
  };
  var quick = () => {
    // if (qrim[0].length === 30 && qrin[0].length === 30)
    {
      //   true;
      food = () => {
        g = qrim[0][0].data.doc[0].data[0].events[0].details.vflSeasonId;
        this.dat = [];
        var good = (x) => {
          var v = qrin[0][x].data.doc[0].data[0].markets;
          var v1 = qrim[0][x].data.doc[0].data[0].events;
          h = v1[0].details.vflMatchDay;
          let w = [];
          for (let i = 0; i < v.length; i++) {
            var r = v[i].market[0];
            let s = r.eventUniformId;
            w.push(s);
          }
          this.as = [...new Set(w)];
          array = [];
          function Mr(anu) {
            function an(awu) {
              for (let j = 0; j < v.length; j++) {
                mo = v[j].market[0];
                if (
                  mo.description === "Over/under (" + `${awu}` + ")" &&
                  mo.eventUniformId === as[anu]
                ) {
                  return {
                    Over: mo.selections[0].odds,
                    Under: mo.selections[1].odds,
                  };
                }
              }
            }
            subData = {
              A: an(0.5),
              B: an(1.5),
              C: an(2.5),
              D: an(3.5),
              E: an(4.5),
            };
            Object.keys(subData).forEach((key) => {
              if (subData[key] === undefined) {
                delete subData[key];
              }
            });
            function am() {
              for (let k = 0; k < as.length; k++) {
                if (v1[k].uniformId === as[anu]) {
                  return {
                    Home: v1[k].competitors[0].teamName,
                    score1: v1[k].competitors[0].score,
                    Away: v1[k].competitors[1].teamName,
                    score2: v1[k].competitors[1].score,
                    subData,
                  };
                }
              }
            }
            return am();
          }
          for (let k = 0; k < 8; k++) {
            array.push(Mr(k));
          }
          dat.push({ ["MatchDay " + h]: array });
        };
        for (let k = 0; k < 30; k++) {
          setTimeout(good, k * 10, k);
        }

        setTimeout(() => {
          data.push({ ["Season " + g]: dat });
          pushData();
        }, 5000);
      };
      pushData = () => {
        var firebaseConfig = {
          apiKey: "AIzaSyBAtmBeTxYJB_zpD08jGwINA-FPuYel68k",
          authDomain: "kiyoodata.firebaseapp.com",
          databaseURL: "https://kiyoodata-default-rtdb.firebaseio.com",
          projectId: "kiyoodata",
          storageBucket: "kiyoodata.appspot.com",
          messagingSenderId: "776381398440",
          appId: "1:776381398440:web:14d27e010dcac91e4bb19d",
          measurementId: "G-R7B1VTGW6H",
        };
        if (!firebase.apps.length) {
          firebase.initializeApp(firebaseConfig);
        } else {
          firebase.app();
        }
        var database = firebase.database();
        var ref = database.ref("game");
        ref.push(data[0]);
      };
      food();
    }
    // } else {
    //   false;
    //   creatorBot;
    // }
  };
}
var botMatches = 67811;
setInterval(() => {
  setup(botMatches++);
  qrin = [];
  qrim = [];
  rim = [];
  rin = [];
  data = [];
}, 8250000);
