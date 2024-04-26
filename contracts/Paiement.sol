
// SPDX-License-Identifier: MIT
pragma solidity ^0.8.18;

import "hardhat/console.sol";
//import "@openzeppelin/contracts@v4.9.3/token/ERC20/ERC20.sol";
import "@openzeppelin/contracts/token/ERC20/IERC20.sol";

contract Paiement {
    address public beneficiary; // Adresse du bénéficiaire des contributions
    IERC20 public maticToken; // Instance du contrat ERC20 pour les jetons MATIC
    
    event paymentDone(address payer, uint amount, uint date);

    constructor(address _maticTokenAddress,address _beneficiary) {
        maticToken = IERC20(_maticTokenAddress);
        beneficiary = _beneficiary;
        //console.log(msg.value);
    }

    function contribute(uint amount) public {
        maticToken.approve(address(this),amount);
        maticToken.transferFrom(msg.sender, beneficiary, amount);
        emit paymentDone(msg.sender,amount,block.timestamp);
    }

}
