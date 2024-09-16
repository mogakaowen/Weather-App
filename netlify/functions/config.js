// netlify/functions/config.js
exports.handler = async () => {
  return {
    statusCode: 200,
    body: JSON.stringify({
      XRapidAPIHostHeaderName: process.env.XRapidAPIHostHeaderName,
      XRapidAPIHostHeaderValue: process.env.XRapidAPIHostHeaderValue,
      XRapidAPIHeaderKeyName: process.env.XRapidAPIHeaderKeyName,
      XRapidAPIHeaderKeyValue: process.env.XRapidAPIHeaderKeyValue,
      weatherApi: process.env.weatherApi,
    }),
    headers: {
      "Content-Type": "application/json",
    },
  };
};
