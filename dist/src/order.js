"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const cpf_1 = __importDefault(require("./cpf"));
const orderItem_1 = __importDefault(require("./orderItem"));
class Order {
    constructor(cpf) {
        this.cpf = new cpf_1.default(cpf);
        this.orderItems = [];
    }
    addItem(item, quantity) {
        this.orderItems.push(new orderItem_1.default(item.idItem, item.price, quantity));
    }
    addCoupon(coupon) {
        this.coupon = coupon;
    }
    getTotal() {
        let total = 0;
        for (const orderItem of this.orderItems) {
            total += orderItem.getTotal();
        }
        if (this.coupon) {
            total -= ((total * this.coupon.percentage) / 100);
        }
        return total;
    }
}
exports.default = Order;
