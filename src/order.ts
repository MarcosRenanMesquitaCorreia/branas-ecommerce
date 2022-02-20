import Coupon from "./coupon";
import CPF from "./cpf";
import Item from "./Item";
import OrderItem from "./orderItem";

export default class Order
{
	cpf: CPF;
	orderItems: OrderItem[];
	coupon: Coupon | undefined;

	constructor (cpf: string) {
		this.cpf = new CPF(cpf);
		this.orderItems = [];
	}

	addItem (item: Item, quantity: number) : void {
		this.orderItems.push(new OrderItem(item.idItem, item.price, quantity));
	}

	addCoupon (coupon: Coupon) : void {
		this.coupon = coupon;
	}

	getTotal () : number {
		let total : number = 0;
		for (const orderItem of this.orderItems) {
			total += orderItem.getTotal();
		}
		if (this.coupon) {
			total -= ((total * this.coupon.percentage)/100);
		}
		return total;
	}
}
