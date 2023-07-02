/* Strat variable area coding */
let budget = document.getElementById('budget');
let budget_btn = document.getElementById('budget-btn');
let total_budget = document.getElementById('total-budget');
let title = document.getElementById('title');
let cost = document.getElementById('cost');
let product_btn = document.getElementById('product-btn');
let expence_list = document.getElementById('expence-list');
let expence = document.getElementById('expence');
let balance = document.getElementById('balance');

/* End variable area coding */

/** store budget in local storage */
budget_btn.onclick = function (e) {
    e.preventDefault();

    if (budget.value != "") {
        localStorage.setItem("budget", budget.value);
        // location.reload();
        location.href = location.href;
    } else {
        alert("Budget is empty!");
    }
}

/* store products in local storage */
product_btn.onclick = function (e) {
    e.preventDefault();
    if (title.value != "" && cost.value != "") {
        let p_title = title.value;
        let p_cost = cost.value;
        let data = {
            p_title: p_title,
            p_cost: p_cost
        };
        let string = JSON.stringify(data);
        localStorage.setItem("budget_" + title.value, string);
        location.href = location.href;
    } else {
        alert("Field is empty!");
    }
}

// retrive data from localStorage
function all_data() {
    for (let i = 0; i < localStorage.length; i++) {
        let all_key = localStorage.key(i);
        if (all_key.match("budget_")) {
            let json_data = localStorage.getItem(all_key);
            let json_parse = JSON.parse(json_data);
            expence_list.innerHTML += '<div class="row b_border"><div class="col-6 lists"><h5 class="p-title">' + json_parse.p_title + '</h5><h5 class="p-price">' + json_parse.p_cost + '</h5></div><div class="col-6 btn-lists"><div class="update-btn"><i class="fa-solid fa-pen-to-square"></i></div>&nbsp;&nbsp;&nbsp;<div class="delete-btn"><i class="fa-solid fa-trash"></i></div></div></div>';
        }
    }
    let price_tag = document.getElementsByClassName("p-price");
    let price = [];
    for (i = 0; i < price_tag.length; i++) {
        price[i] = price_tag[i].innerHTML;
    }

    let price_int = [];
    for (i = 0; i < price.length; i++) {
        price_int.push(parseInt(price[i]));
    }

    let final_price = 0;
    for (i = 0; i < price_int.length; i++) {
        final_price += price_int[i];
    }
    expence.innerHTML = final_price;

    total_budget.innerHTML = localStorage.getItem("budget");
    let t_bgt = total_budget.innerHTML;
    let t_expence = expence.innerHTML;
    balance.innerHTML = t_bgt - t_expence;

    // Start delete coding
    let delete_btn = document.getElementsByClassName('delete-btn');
    for (i = 0; i < delete_btn.length; i++) {
        delete_btn[i].onclick = function () {
            if (confirm("Do you wanna delete it?")) {
                // let del_perent = this.parentElement;
                // let div_parent = del_perent.parentElement;
                // let h5 = div_parent.firstChild.childNodes[0].innerHTML;

                /* upper code in single line */
                let titl = this.parentElement.parentElement.firstChild.childNodes[0].innerHTML;
                localStorage.removeItem("budget_" + titl);
                location.reload();
            } else {
                alert("Your data is safe!");
            }
        }
    }

    // start update coding
    let update_btn = document.getElementsByClassName("update-btn");
    for (let i = 0; i < update_btn.length; i++) {
        update_btn[i].onclick = function () {
            if (confirm("Do you want to update it?")) {
                let update_perent = this.parentElement;
                let cole_parent = update_perent.parentElement;

                let h5_data = cole_parent.firstChild.childNodes[0].innerHTML;
                let h5_price = cole_parent.firstChild.childNodes[1].innerHTML;

                title.value = h5_data;
                cost.value = h5_price;
                title.focus();

                product_btn.innerHTML = "Update data";
                product_btn.style.background = "#ff0000";
                // product_btn.hover(function(){
                //     this.css("background-color","yellow");
                // })

                product_btn.onclick = function () {
                    localStorage.removeItem("budget_" + h5_data);
                    let p_title = title.value;
                    let p_cost = cost.value;
                    let data = {
                        p_title: p_title,
                        p_cost: p_cost
                    };
                    let string = JSON.stringify(data);
                    localStorage.setItem("budget_" + title.value, string);
                    location.href = location.href;
                }

            } else {
                alert("Your data is safe.");
            }
        }
    }
}
all_data();