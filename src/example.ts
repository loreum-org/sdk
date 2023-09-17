import { ethers } from 'ethers';
import { createProposal, ChamberABI } from './index';
import { provider, signer, Params, CHAMBER_ADDRESS } from './helpers';

async function main () {

    const params: Params = { provider, signer, address: CHAMBER_ADDRESS, abi: ChamberABI, value: 0n };

    const target = ["0x2e0049b05217290087BA613290BaCC761d7adD04"];
    const value = [ethers.parseEther("0.001")];
    const data = ["0x"];
    
    params.gasLimit = 100000;
    await createProposal(target, value, data, params);
}

main();