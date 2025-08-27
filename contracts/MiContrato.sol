// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract MiContrato {
    string public mensaje;

    constructor(string memory _mensaje) {
        mensaje = _mensaje;
    }

    function setMensaje(string memory _mensaje) public {
        mensaje = _mensaje;
    }
}