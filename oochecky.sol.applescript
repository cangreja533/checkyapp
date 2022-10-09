// SPDX-License-Identifier: AGPL-3.0-only
pragma solidity ^0.8.14;

import "https://github.com/UMAprotocol/protocol/blob/master/packages/core/contracts/oracle/interfaces/OptimisticOracleV2Interface.sol";



contract OO_GettingStarted {
    
    // Create an Optimistic oracle instance at the deployed address on Gšrli.
    OptimisticOracleV2Interface oo = OptimisticOracleV2Interface(0xa59830bA5Af9Ca3bC9577d4C423860184f9b4eB7);
    //OptimisticOracleV2Interface oo = OptimisticOracleV2Interface(0xa59830bA5Af9Ca3bC9577d4C423860184f9b4eB7);

    // Use the yes no idetifier to ask arbitary questions, such as the weather on a particular day.
    bytes32 identifier = bytes32("YES_OR_NO_QUERY");



    // Fetch the resolved price from the Optimistic Oracle that was settled.
    function getSettledData(bytes memory ancillaryData) public view returns (int256) {
        return oo.getRequest(address(this), identifier, requestTime, ancillaryData).resolvedPrice;
    }

    function settleData(uint256 requestTime, bytes memory ancillaryData) public {
        oo.settle(address(this),identifier,requestTime,ancillaryData);
    }


    // Post the question in ancillary data. Note that this is a simplified form of ancillry data to work as an example. A real
    // world prodition market would use something slightly more complex and would need to conform to a more robust structure.

    uint256 requestTime = 0; 

    // Submit a data request to the Optimistic oracle.
    function assertTrue(bytes memory ancillaryData) public {
        requestTime = block.timestamp; // Set the request time to the current block time.
        IERC20 bondCurrency = IERC20(0xa9B45C3AB56f631f94C777fa724De743aaF16e99); //Polygon 
        bondCurrency.transferFrom(msg.sender,address(this),1e6);
        bondCurrency.approve(address(oo),1e18);
        uint256 reward = 0; // Set the reward to 0 (so we dont have to fund it from this contract).

        
        oo.requestPrice(identifier, requestTime, ancillaryData, bondCurrency, reward);
        oo.setCustomLiveness(identifier, requestTime, ancillaryData, 60);
        oo.setBond(identifier,requestTime,ancillaryData,1e6);
        oo.proposePrice(address(this),identifier,requestTime,ancillaryData,1e6);
    }



}
