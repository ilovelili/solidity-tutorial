// SPDX-License-Identifier: MIT
pragma solidity ^0.7.0;

contract Adoption {
    uint256 constant size = 16;
    address[size] public adopters;

    function adopt(uint256 petId) public returns (uint256) {
        require(petId >= 0 && petId <= size - 1, "invalid pet id");
        adopters[petId] = msg.sender;
        return petId;
    }

    function getAdopters() public view returns (address[size] memory) {
        return adopters;
    }
}
