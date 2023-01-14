var quotations = [
  {
    quantity: 2,
    item: "iPhone 13 mini",
    price: 25900,
    discount: 1000,
  },
  {
    quantity: 1,
    item: "iPhone 13",
    price: 29900,
    discount: 2000,
  },
  {
    quantity: 4,
    item: "iPhone 13 Pro",
    price: 38900,
    discount: 5000,
  },
  {
    quantity: 4,
    item: "iPhone 13 Pro Max",
    price: 42900,
    discount: 10000,
  },
  {
    quantity: 4,
    item: "iPhone 13 Pro Max",
    price: 42900,
    discount: 10000,
  },
  {
    quantity: 4,
    item: "iPhone 13 Pro Max",
    price: 42900,
    discount: 10000,
  },
  {
    quantity: 4,
    item: "iPhone 13 Pro Max",
    price: 42900,
    discount: 10000,
  },
  {
    quantity: 4,
    item: "iPhone 13 Pro Max",
    price: 42800,
    discount: 10000,
  },
  {
    quantity: 4,
    item: "iPhone 13 Pro",
    price: 38900,
    discount: 5000,
  },
];

function addToQuotation() {
  let quotationObj = {
    quantity: $("#qtyInput").val(),
    item: $("#itemInput").val(),
    price: $("#priceInput").val(),
    discount: $("#discountInput").val(),
  };

  $("#quotationsBody").html("");

  quotations.push(quotationObj);
  loadData();
}

function deleteQuotation(index) {
  quotations.splice(index, 1);
  console.log(quotations);
  $("#quotationBody").html("");
  loadData();
}

function clearQuatation() {
  quotations = [];
  loadData();
}

function merge_redundant() {
  for (let p = 0; p < quotations.length; p++) {
    for (let r = p + 1; r < quotations.length; r++) {
      if (
        quotations[p].item == quotations[r].item &&
        quotations[p].price == quotations[r].price
      ) {
        quotations[p].quantity =
          quotations[p].quantity * 1 + quotations[r].quantity * 1;
        quotations[p].discount =
          quotations[p].discount * 1 + quotations[r].discount * 1;
        quotations.splice(r, 1);
        console.log(quotations);
        r -= 1;
      }
    }
  }
}

function loadData() {
  merge_redundant();
  let allRows = "";
  let total = 0;
  let total_amount = 0;
  let total_discount = 0;
  for (let p in quotations) {
    let deleteIcon = `<td style="height: 30px"><i class="fa-sharp fa-solid fa-trash" onclick='deleteQuotation("${p}")'></i></td>`;
    let qty = '<td class="text_right">' + quotations[p].quantity + "</td>";
    let cellItem = '<td class="text_left">' + quotations[p].item + "</td>";
    let price = quotations[p].price * 1;
    let cellPrice = '<td class="text_right">' + price.toFixed(2) + "</td>";
    let discount = quotations[p].discount * 1;
    let cellDiscount =
      '<td class="text_right">' + discount.toFixed(2) + "</td>";
    let amount = quotations[p].quantity * quotations[p].price;
    total_amount += amount;
    total_discount += discount;
    let cellAmount = '<td class="text_right">' + amount.toFixed(2) + "</td>";
    let row = `<tr>${deleteIcon}${qty}${cellItem}${cellPrice}${cellDiscount}${cellAmount}</tr>`;
    allRows += row;
  }

  $("#quotationBody").html(allRows);
  var tab = document.getElementById("quotationBody");
  var len = tab.rows.length;
  for (var i = 0; i < len; i++) {
    if (i % 2 == 0) {
      tab.rows[i].style.backgroundColor = "#cccccc";
    } else {
      tab.rows[i].style.backgroundColor = "#ffffff";
    }
  }
  $("#total_amount").html(total_amount.toFixed(2));
  $("#total_discount").html(total_discount.toFixed(2));
  total = total_amount - total_discount;
  $("#total").html(total.toFixed(2));
}
