if (typeof window === "undefined") {
  var { default: fetch } = await import("node-fetch");
}

fetch ||= window.fetch

const bins = [
  "627060dd019db4679694d8d7",
  "627060da38be296761fb5a66",
  "627060d625069545a32c5e7f",
  "627060d3019db4679694d8d3",
  "627060d038be296761fb5a63",
  "627060cd38be296761fb5a61",
  "627060ca019db4679694d8ce",
  "627060c7019db4679694d8ca",
  "627060c338be296761fb5a5a",
  "627060c038be296761fb5a58",
  "627060bd38be296761fb5a56",
  "627060ba019db4679694d8c7",
  "627060b738be296761fb5a53",
  "627060b438be296761fb5a51",
  "627060ab38be296761fb5a4e",
  "627060a838be296761fb5a4c",
  "627060a138be296761fb5a49",
  "6270609d38be296761fb5a47",
  "6270609a38be296761fb5a44",
  "6270609638be296761fb5a42",
  "6270609325069545a32c5e6f",
  "6270608838be296761fb5a3b",
  "62706085019db4679694d8b3",
  "6270608f019db4679694d8b8",
  "6270608d38be296761fb5a3f",
];

export const reqJSONBin = async (method, binNum, body) => {
  const urlSuffix = method == "get" ? "latest" : "";
  const bin = bins[binNum];
  const data = {
    method: method,
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      "X-Master-key": "$2b$10$BfSdlGY7.T2MK8eNEgBqx.ZDgA9oto5l2NO6PogwTLk27MQeiWRpC",
      "X-Bin-Meta": false,
    },
  };
  if (body) data.body = JSON.stringify(body);
  return new Promise((res, rej) => {
    fetch(`https://api.jsonbin.io/v3/b/${bin}/${urlSuffix}`, data)
      .then((response) => res(response.json()))
      .catch((err) => rej(err));
  });
};
