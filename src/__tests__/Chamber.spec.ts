
import {
  proposals,
  proposalCount,
  accountDelegation,
  totalDelegation,
  getLeaderboard,
  createProposal,
  approveProposal,
  promote,
  demote,
  ChamberABI
} from '../index';

import { provider, signer, assert, Params, CHAMBER_ADDRESS, USER_ADDRESS } from '../helpers';

const params: Params = { provider, signer, address: CHAMBER_ADDRESS, abi: ChamberABI, value: 0n };

describe('Chamber Tests', () => {

  it('should get latest block number', async () => {
    const blockNumber = await provider.getBlockNumber();
    assert(blockNumber > 0);
  });

  it('should get the total number of proposals', async () => {
    const result = await proposalCount(params);
    assert(result > 1n);
  });

  it('should get the total delegation of the account for tokenId 1', async () => {
    const address = await signer.getAddress();
    const tokenId = 1;
    const result = await accountDelegation(address, tokenId, params);
    assert(result > BigInt(0));
  });

  it('should get the proposal state of proposalId 1', async () => {
    const proposalId = 1;
    const result = await proposals(proposalId, params);
    assert(result[0] !== undefined);
    assert(result[1] !== undefined);
  });

  it('should get the total delegation for tokenId 1', async () => {
    const tokenId = 1;
    const result = await totalDelegation(tokenId, params);
    assert(result > BigInt(0));
  });

  it('should get the leaderboard', async () => {
    const result = await getLeaderboard(params);
    assert(result[0].length == 5);
    assert(result[1].length == 5);
  });

  xit('should create a proposal', async () => {
    const target = [USER_ADDRESS];
    const value = [100_000_000_000n];
    const data = ['0x'];
    params.gasLimit = 100000;
    const result = await createProposal(target, value, data, params);
    assert(result);
  });

  xit('should approve a proposal', async () => {
    const proposalId = 1;
    const result = await approveProposal(proposalId, 1, params);
    assert(result);
  });

  xit('should promote a tokenId', async () => {
    const result = await promote(1n, 1, params);
    assert(result);
  });

  xit('should demote a tokenId', async () => {
    const result = await demote(1n, 1, params);
    assert(result);
  });

});
