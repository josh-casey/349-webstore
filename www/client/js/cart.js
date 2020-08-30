/* global Cookies, $ */
var Cart = (function() {
    "use strict";
    var pub = {};

    function addToCart() {
        var itemList, item, section;
        itemList = window.localStorage.getItem("cart");
        if (itemList) {
            itemList = JSON.parse(itemList);
        } else {
            itemList = [];
        }

        /* jshint -W040 */
        section = $(this).parent();
        /* jshint +W040 */

        item = {};
        item.title = $(section.find(".product-name")[0]).html();
        item.price = $(section.find(".product-price")[0]).html();

        itemList.push(item);
        window.localStorage.setItem("cart", JSON.stringify(itemList));
    }

    function cartHtml(itemList) {
        var html, total, i;

        html = "<table><tr><th>Title</th><th>Price</th></tr>";
        total = 0;
        for (i = 0; i < itemList.length; i++) {
            html += "<tr><td>" + itemList[i].title + "</td><td>$" + itemList[i].price + "</td></tr>";
            total += parseFloat(itemList[i].price);
        }

        total = Math.round(total * 100) / 100; // rounding

        html += "<tr><td>Total:</td><td>$" + total + "</td>";
        return html;
    }

    pub.setup = function() {
        var itemList;
        $(".addToCart").click(addToCart);
        console.log("test")

        itemList = window.localStorage.getItem("cart");
        if (itemList) {
            itemList = JSON.parse(itemList);
            $("#cartTable").html(cartHtml(itemList));
        } else {
            $("#cartTable").html("<p>Your cart is empty.</p>");
            $("#checkoutForm").hide();
        }

    };

    return pub;
}());

$(document).ready(Cart.setup);