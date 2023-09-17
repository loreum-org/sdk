import { ethers } from 'ethers';

const RPC_URL = process.env.RPC_URL ?? '';
const PRIVATE_KEY = process.env.PRIVATE_KEY ?? '';

if (!RPC_URL || !PRIVATE_KEY) throw new Error(`
  Missing RPC_URL | PRIVATE_KEY in process.env
  $ export RPC_URL=<your-rpc-url>
  $ export PRIVATE_KEY=<your-private-key>
`);

export const provider = new ethers.JsonRpcProvider(RPC_URL);
export const wallet = new ethers.Wallet(PRIVATE_KEY);
export const signer = wallet.connect(provider);

export const REGISTRY_ADDRESS = '0x8DA37555B2597Fe05971A1FaEd8378fbaDA1BC1a';
export const CHAMBER_ADDRESS = '0xe35ad80844aa0e235eec1b934ec1c7d86fc0e363';
export const USER_ADDRESS = '0x2e0049b05217290087BA613290BaCC761d7adD04';
export const ERC20_ADDRESS = '0x831Ae6cd498342A7aCf3F1067f7E46F9E69a0001';
export const ERC721_ADDRESS = '0x69e41faF363A6Be4Cde76268315F48Ef0034C8b8';

export const asserEq = (a: string | number | object, b: string | number | object) => {
  if(a !== b) throw new Error(`${a} !== ${b}`);
};
  
export const assert = (a: string | number | object) => {
  if(!a) throw new Error(`${a} is false`);
};

export type Params = {
  provider: ethers.Provider,
  signer: ethers.Signer,
  address: string,
  abi: string[]
  value: bigint
  gasLimit?: number
};

export const methodMan = (method: string, params: Params) => {
  const { signer, address, abi } = params;
  const contract = new ethers.Contract(address, abi, signer);
  return contract.getFunction(method);
};