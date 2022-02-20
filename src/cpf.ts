export default class CPF
{
	private readonly FACTOR_DIGIT_1 = 10;
	private readonly FACTOR_DIGIT_2 = 11;

	private value: string;

	constructor (value: string) {
		if (!this.validate(value)) throw new Error("CPF Inválido");
		this.value = value;
	}

	getValue () : string {
		return this.value;
	}

	private validate (cpf: string) : boolean {
		if (!cpf) return false;
		cpf = this.cleanCpf(cpf);
		if (!this.isValidLength(cpf)) return false;
		if (this.hasAllDigitsEqual(cpf)) return false;
		const digit1 = this.calculateCheckDigit(cpf, this.FACTOR_DIGIT_1);
		const digit2 = this.calculateCheckDigit(cpf, this.FACTOR_DIGIT_2);
		let checkDigit = this.extractCheckDigit(cpf);
		const calculatedDigit = `${digit1}${digit2}`;
		return checkDigit == calculatedDigit;
	}

	private cleanCpf (cpf: string) : string {
		return cpf.replace(/[\.\-]/g, "");
	}

	private isValidLength (cpf: string) : boolean {
		return cpf.length === 11;
	}

	private hasAllDigitsEqual (cpf: string) : boolean {
		const [firstDigit] = cpf;
		return [...cpf].every(digit => digit === firstDigit);
	}

	private calculateCheckDigit (cpf: string, factor: number) : number {
		let total = 0;
		for (const digit of cpf) {
			if (factor > 1) total += parseInt(digit) * factor--;
		}
		const rest = total%11;
		return (rest < 2) ? 0 : (11 - rest);
	}

	private extractCheckDigit (cpf: string) : string {
		return cpf.slice(-2);
	}
}
