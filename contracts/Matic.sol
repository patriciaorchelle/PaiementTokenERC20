pragma solidity ^0.8.18;
//import "@openzeppelin/contracts@v4.9.3/token/ERC20/ERC20.sol";
import "@openzeppelin/contracts/token/ERC20/ERC20.sol";

contract Matic is ERC20 {
  constructor() ERC20("Matic Token","MATIC") public {}

  function faucet(address to,uint amount) external {
    _mint(to, amount);
  }
}