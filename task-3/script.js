var data = [
  {
    datasetid: "euro-exchange-rates",
    recordid: "43f5940bfd6881b2f8e0c434a3a96f229a8a1054",
    fields: {
      date: "2022-03-06",
      currency: "USD",
      rate: 1.0929,
    },
  },
  {
    datasetid: "euro-exchange-rates",
    recordid: "1787f87bcf029a223e001d6f88750fe0ca6772d1",
    fields: {
      date: "2022-03-06",
      currency: "AUD",
      rate: 1.4872,
    },
  },
  {
    datasetid: "euro-exchange-rates",
    recordid: "756f0f685431156ad1d3bc24b91d574c5a6f00fa",
    fields: {
      date: "2022-03-06",
      currency: "CAD",
      rate: 1.3937,
    },
  },
  {
    datasetid: "euro-exchange-rates",
    recordid: "58e15a0abb6fc40d08a10ae0f58fc2c9525b267a",
    fields: {
      date: "2022-03-06",
      currency: "GBP",
      rate: 0.8238800000000001,
    },
  },
  {
    datasetid: "euro-exchange-rates",
    recordid: "4f7879e2c8e97bc11ae065f748a2e13f2cd73c71",
    fields: {
      date: "2022-03-06",
      currency: "SEK",
      rate: 10.7935,
    },
  },
  {
    datasetid: "euro-exchange-rates",
    recordid: "e3f948548d1479dff8b10aeaaf0c247e17b70897",
    fields: {
      date: "2022-03-06",
      currency: "MXN",
      rate: 22.7543,
    },
  },
];

function populateTable() {
  var tableBody = document
    .getElementById("dataTable")
    .getElementsByTagName("tbody")[0];

  data.forEach(function (row) {
    var newRow = tableBody.insertRow(tableBody.rows.length);
    var cell1 = newRow.insertCell(0);
    var cell2 = newRow.insertCell(1);
    var cell3 = newRow.insertCell(2);
    var cell4 = newRow.insertCell(3);
    var cell5 = newRow.insertCell(4);

    cell1.innerHTML = row.datasetid;
    cell2.innerHTML = row.recordid;
    cell3.innerHTML = row.fields.date;
    cell4.innerHTML = row.fields.currency;
    cell5.innerHTML = row.fields.rate;
  });
}

window.onload = populateTable;
