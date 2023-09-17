
import { ethers } from 'ethers';
import { Params, methodMan } from './helpers';

export const RegistryABI = [
	"function totalChambers() external view returns (uint256)",
	"function chambers(uint256 index) external view returns (address chamber, address memberToken, address govToken)",
	"function chamberVersion() external view returns (address)",
	"function setChamberVersion(address chamberVersion) external",
	"function transferOwnership(address newOwner) public",
	"function deploy(address memberToken, address govToken) external returns (address)"
];

export const totalChambers = async (params: Params): Promise<bigint> => {
	return methodMan('totalChambers', params)();
};

export const chambers = async (index: number, params: Params): Promise<[string, string, string]> => {
	return methodMan('chambers', params)(index);
};

export const chamberVersion = async (params: Params): Promise<string> => {
	return methodMan('chamberVersion', params)();
};

export const setChamberVersion = async (chamberVersion: string, params: Params): Promise<ethers.TransactionResponse> => {
	return methodMan('setChamberVersion', params)(chamberVersion);
};

export const transferOwnership = async (newOwner: string, params: Params): Promise<ethers.TransactionResponse> => {
	return methodMan('transferOwnership', params)(newOwner);
};

export const deploy = async (memberToken: string, govToken: string, params: Params): Promise<ethers.TransactionResponse> => {
	return methodMan('deploy', params)(memberToken, govToken);
};
