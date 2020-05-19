/*
    Copyright 2020 The caver-js Authors
    This file is part of the caver-js library.

    The caver-js library is free software: you can redistribute it and/or modify
    it under the terms of the GNU Lesser General Public License as published by
    the Free Software Foundation, either version 3 of the License, or
    (at your option) any later version.

    The caver-js library is distributed in the hope that it will be useful,
    but WITHOUT ANY WARRANTY; without even the implied warranty of
    MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the
    GNU Lesser General Public License for more details.

    You should have received a copy of the GNU Lesser General Public License
    along with the caver-js. If not, see <http://www.gnu.org/licenses/>.
*/

const { TX_TYPE_STRING, typeDetectionFromRLPEncoding } = require('../transactionHelper/transactionHelper')
const LegacyTransaction = require('../transactionTypes/legacyTransaction/legacyTransaction')
const ValueTransfer = require('../transactionTypes/valueTransfer/valueTransfer')
const FeeDelegatedValueTransfer = require('../transactionTypes/valueTransfer/feeDelegatedValueTransfer')
const ValueTransferMemo = require('../transactionTypes/valueTransferMemo/valueTransferMemo')
const FeeDelegatedValueTransferMemo = require('../transactionTypes/valueTransferMemo/feeDelegatedValueTransferMemo')
const AccountUpdate = require('../transactionTypes/accountUpdate/accountUpdate')
const SmartContractDeploy = require('../transactionTypes/smartContractDeploy/smartContractDeploy')
const SmartContractExecution = require('../transactionTypes/smartContractExecution/smartContractExecution')
const Cancel = require('../transactionTypes/cancel/cancel')
const ChainDataAnchoring = require('../transactionTypes/chainDataAnchoring/chainDataAnchoring')

/**
 * Representing a transaction decoder.
 * @class
 */
class TransactionDecoder {
    /**
     * Decodes RLP-encoded transaction string and returns a Transaction instance.
     * @param {string} rlpEncoded - An RLP-encoded transaction string to decode.
     * @return {Transaction}
     */
    static decode(rlpEncoded) {
        const type = typeDetectionFromRLPEncoding(rlpEncoded)

        switch (type) {
            case TX_TYPE_STRING.TxTypeLegacyTransaction:
                return LegacyTransaction.decode(rlpEncoded)
            case TX_TYPE_STRING.TxTypeValueTransfer:
                return ValueTransfer.decode(rlpEncoded)
            case TX_TYPE_STRING.TxTypeFeeDelegatedValueTransfer:
                return FeeDelegatedValueTransfer.decode(rlpEncoded)
            case TX_TYPE_STRING.TxTypeValueTransferMemo:
                return ValueTransferMemo.decode(rlpEncoded)
            case TX_TYPE_STRING.TxTypeFeeDelegatedValueTransferMemo:
                return FeeDelegatedValueTransferMemo.decode(rlpEncoded)
            case TX_TYPE_STRING.TxTypeAccountUpdate:
                return AccountUpdate.decode(rlpEncoded)
            case TX_TYPE_STRING.TxTypeSmartContractDeploy:
                return SmartContractDeploy.decode(rlpEncoded)
            case TX_TYPE_STRING.TxTypeSmartContractExecution:
                return SmartContractExecution.decode(rlpEncoded)
            case TX_TYPE_STRING.TxTypeCancel:
                return Cancel.decode(rlpEncoded)
            case TX_TYPE_STRING.TxTypeChainDataAnchoring:
                return ChainDataAnchoring.decode(rlpEncoded)
        }
    }
}

module.exports = TransactionDecoder