// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract bookstay{
    mapping (uint => string) keywords;
    uint numKeywords;
    
    function storeKeyword(string memory keyword) public {
        keywords[numKeywords] = keyword;
        numKeywords++;
    }
    
    function getKeywords() public view returns (string[] memory) {
        string[] memory result = new string[](numKeywords);
        for (uint i = 0; i < numKeywords; i++) {
            result[i] = keywords[i];
        }
        return result;
    }
}
