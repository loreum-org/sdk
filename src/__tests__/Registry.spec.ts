import {
  totalChambers,
  chamberVersion,
  chambers,
  setChamberVersion,
  deploy,
  RegistryABI
} from '../index';

import { provider, signer, assert, REGISTRY_ADDRESS, ERC20_ADDRESS, ERC721_ADDRESS, CHAMBER_ADDRESS } from '../helpers';

const params = { provider, signer, address: REGISTRY_ADDRESS, abi: RegistryABI, value: 0n };

describe('Registry Tests', () => {

  it('should get latest block number', async () => {
    const blockNumber = await provider.getBlockNumber();
    assert(blockNumber > 0);
  });

  it('should get total number of chambers', async () => {
    const result = await totalChambers(params);
    assert(result > BigInt(0));
  });

  it('should get chamber info', async () => {
    const result = await chambers(0, params);
    assert(result[2] == ERC20_ADDRESS && result[1] == ERC721_ADDRESS);
  });

  it('should get the chamber implementation version', async () => {
    const result = await chamberVersion(params);
    assert(result != undefined);
  });

  xit('should set the chamber implementation version', async () => {
    const chamberVersion = CHAMBER_ADDRESS;
    const result = await setChamberVersion(chamberVersion, params);
    assert(result != undefined);
  });

  xit('should deploy a new chamber', async () => {
    const result = await deploy(ERC721_ADDRESS, ERC20_ADDRESS, params);
    assert(result);
  });
});