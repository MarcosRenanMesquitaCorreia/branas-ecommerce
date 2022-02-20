"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const cpf_1 = __importDefault(require("../src/cpf"));
test("Deve testar um cpf válido", function () {
    const cpf = new cpf_1.default("935.411.347-80");
    expect(cpf.getValue()).toBe("935.411.347-80");
});
test("Deve testar um cpf inválido com dígitos iguais", function () {
    expect(() => new cpf_1.default("111.111.111-11")).toThrow(new Error("CPF Inválido"));
});
test("Deve testar um cpf inválido com dígitos diferentes", function () {
    expect(() => new cpf_1.default("123.456.789-99")).toThrow(new Error("CPF Inválido"));
});
