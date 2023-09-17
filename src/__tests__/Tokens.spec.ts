import { balanceOf, approve, allowance, publicMint, transfer, Erc20ABI } from '../index';
import { provider, signer, assert, USER_ADDRESS, ERC20_ADDRESS, ERC721_ADDRESS, CHAMBER_ADDRESS } from '../helpers';

describe('Token Tests', () => {

	const params = { provider, signer, address: ERC20_ADDRESS, abi: Erc20ABI, value: 0n };

	it('should get the ERC20 balanceOf of address', async () => {
		const result = await balanceOf(USER_ADDRESS, params);
		assert(result > 0);
	});

	it('should get the allowane for ERC20 transfer', async () => {
		params.address = ERC20_ADDRESS;
		const result = await allowance(USER_ADDRESS, CHAMBER_ADDRESS, params);
		assert(result > 0);
	});

	it('should get the ERC721 balanceOf of address', async () => {
		params.address = ERC721_ADDRESS;
		const result = await balanceOf(USER_ADDRESS, params);
		assert(result > 0);
	});

	xit('should approve to spend ERC20', async () => {
		params.address = ERC20_ADDRESS;
		const amount = 100_000_000_000n;
		const result = await approve(CHAMBER_ADDRESS, amount, params);
		assert(result.to == ERC20_ADDRESS && result.from == USER_ADDRESS);
	});

	xit('should transfer an amount of ERC20', async () => {
		params.address = ERC20_ADDRESS;
		const amount = 100_000_000_000n;
		const result = await transfer(CHAMBER_ADDRESS, amount, params);
		assert(result.to == ERC20_ADDRESS && result.from == USER_ADDRESS);
	});

	xit('should mint an NFT', async () => {
		params.address = ERC721_ADDRESS;
		params.value = 100_000_000_000_000n;
		const amount = 1;
		const result = await publicMint(amount, params);
		assert(result.to == ERC721_ADDRESS && result.from == USER_ADDRESS);
	});
});