import { ethers } from "ethers";
import { Params, methodMan } from "./helpers";

export const ChamberABI = [
    "function accountDelegation(address account, uint8 tokenId) external view returns (uint256)",
    "function proposalCount() view returns (uint256)",
    "function proposals(uint8 proposalId) external view returns (uint8 approvals, uint8 state)",
    "function totalDelegation(uint8 tokenId) external view returns (uint256)",
    "function getLeaderboard() external view returns (uint8[5] memory, uint256[5] memory)",
    "function createProposal(address[] memory target, uint256[] memory value, bytes[] memory data)",
    "function approveProposal(uint8 proposalId, uint8 tokenId)",
    "function promote(uint256 amount, uint8 tokenId) external",
    "function demote(uint256 amount, uint8 tokenId) external"
];

export const createProposal = async (target: string[], value: bigint[], data: string[], params: Params): Promise<ethers.TransactionResponse> => {
    return methodMan('createProposal', params)(target, value, data, { value: params.value, gasLimit: params.gasLimit });
};

export const proposalCount = async (params: Params): Promise<bigint> => {
    return methodMan('proposalCount', params)();
};

export const accountDelegation = async (account: string, tokenId: number, params: Params): Promise<bigint> => {
    return methodMan('accountDelegation', params)(account, tokenId);
};

export const proposals = async (proposalId: number, params: Params): Promise<[number,number]> => {
    return methodMan('proposals', params)(proposalId);
};

export const totalDelegation = async (tokenId: number, params: Params): Promise<bigint> => {
    return methodMan('totalDelegation', params)(tokenId);
};

export const getLeaderboard = async (params: Params): Promise<[Array<number>, Array<number>]> => {
    return methodMan('getLeaderboard', params)();
};

export const approveProposal = async (proposalId: number, tokenId: number, params: Params): Promise<ethers.TransactionResponse> => {
    return methodMan('approveProposal', params)(proposalId, tokenId);
};

export const promote = async (amount: bigint, tokenId: number, params: Params): Promise<bigint> => {
    return methodMan('promote', params)(amount, tokenId, { value: params.value, gasLimit: params.gasLimit });
};

export const demote = async (amount: bigint, tokenId: number, params: Params): Promise<bigint> => {
    return methodMan('demote', params)(amount, tokenId, { value: params.value, gasLimit: params.gasLimit });
};
