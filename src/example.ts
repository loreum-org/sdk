import { ethers } from 'ethers';
import { createProposal, approveProposal, ChamberABI, TokensABI } from './index';
import { provider, signer, Params, CHAMBER_ADDRESS, ERC721_ADDRESS } from './helpers';

const params: Params = { provider, signer, address: CHAMBER_ADDRESS, abi: ChamberABI, value: 0n };

async function transferEth() {
	const target = ["0xcCD8fD678eCE228718D6CF0D19288D0fA32b817e"];
	const value = [ethers.parseEther("0.005")];
	const data = ["0x"];

	const result = await createProposal(target, value, data, params);
	console.log(result);
}

async function publicMintNft() {
	const iface = new ethers.Interface(TokensABI);

	const target = [ERC721_ADDRESS];
	const value = [ethers.parseEther("0.0001")];
	const data = [iface.encodeFunctionData('publicMint', [1])];

	const result = await createProposal(target, value, data, params);
	console.log(result);
}

async function appr() {
	const proposalId = 5;
	const tokenId = 3;

	const result = await approveProposal(proposalId, tokenId, params);
	console.log(result);
}

//publicMintNft();
// appr();