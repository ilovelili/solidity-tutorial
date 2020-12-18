// SPDX-License-Identifier: MIT
pragma solidity ^0.7.5;

contract Adoption {
    address[21] public adopters;

    // perId < 20 => valid
    function adopt(uint256 _petId) public returns (uint256) {
        // if (_petId < 0 || _petId > 20) {
        //     revert("invalid pet id");
        // }
        require(_petId >= 0 && _petId <= 20, "invalid pet id");
        adopters[_petId] = msg.sender; // address
        return _petId;
    }

    function getAdopters() public view returns (address[21] memory) {
        return adopters;
    }
}
