import { ethers } from "ethers";
import { Params, methodMan } from "./helpers";

export const Erc20ABI = [
    "function balanceOf(address owner) external view returns (uint256)",
    "function approve (address spender, uint256 amount) external returns (bool)",
    "function allowance (address owner, address spender) external view returns (uint256)",
    "function transfer(address to, uint256 value) external returns (bool)",
    "function transferFrom(address from, address to, uint256 value) external returns (bool)",
    "function publicMint(uint8 amount) external"
];

export const balanceOf = async (account: string, params: Params): Promise<bigint> => {
    return methodMan('balanceOf', params)(account);
};

export const allowance = async (owner: string, spender: string, params: Params): Promise<bigint> => {
    return methodMan('allowance', params)(owner, spender);
};

export const approve = async (spender: string, amount: bigint, params: Params): Promise<ethers.TransactionResponse> => {
    return methodMan('approve', params)(spender, amount);
};

export const transfer = async (to: string, amount: bigint, params: Params): Promise<ethers.TransactionResponse> => {
    return methodMan('transfer', params)(to, amount);
};

export const transferFrom = async (from: string, to: string, amount: bigint, params: Params): Promise<ethers.TransactionResponse> => {
    return methodMan('transferFrom', params)(from, to, amount);
};

export const publicMint = async (amount: number, params: Params): Promise<ethers.TransactionResponse> => {
    return methodMan('publicMint', params)(amount, { value: params.value });
};