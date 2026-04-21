function decodeUplink(input) {
    //Java Script Decoder for SKU WSLRW-ATH firmware 5 on Things Stack (TTN)/Chirpstack Network Server. For other Network Servers, please update decoded function name corresponding to the Network Server and convert input raw payload to 'byte' array													
    var byte = input.bytes;
    var data = {};
    if (byte.length == 10 || byte.length == 6 || byte.length == 7 || byte.length == 8) {
        data =
        {
            EVENT_ID: (byte[0] >> 4) === 0 ? UINT8((byte[0]) >> 4) : (byte[0] >> 4) === 1 ? UINT8((byte[0]) >> 4) : (byte[0] >> 4) === 2 ? UINT8((byte[0]) >> 4) : (byte[0] >> 4) === 3 ? UINT8((byte[0]) >> 4) : (byte[0] >> 4) === 4 ? UINT8((byte[0]) >> 4) : (byte[0] >> 4) === 5 ? UINT8((byte[0]) >> 4) : (byte[0] >> 4) === 15 ? UINT8((byte[0]) >> 4) : (byte[0] >> 4) === 13 ? UINT8((byte[0]) >> 4) : "NULL",
            HW_VERSION: (byte[0] >> 4) === 0 ? UINT8((byte[0] & 0x0F)) : (byte[0] >> 4) === 1 ? UINT8((byte[0] & 0x0F)) : (byte[0] >> 4) === 5 ? UINT8((byte[0] & 0x0F)) : (byte[0] >> 4) === 15 ? UINT8((byte[0] & 0x0F)) : "NULL",
            FW_VERSION: (byte[0] >> 4) === 0 ? UINT8(byte[1]) : (byte[0] >> 4) === 1 ? UINT8(byte[1]) : (byte[0] >> 4) === 5 ? UINT8(byte[1]) : (byte[0] >> 4) === 15 ? UINT8(byte[1]) : "NULL",
            CURRENT_CONFIGURATION: (byte[0] >> 4) === 0 ? HEX(byte[2], byte[3], byte[4], byte[5], byte[6], byte[7], byte[8], byte[9]) : (byte[0] >> 4) === 1 ? HEX(byte[2], byte[3], byte[4], byte[5], byte[6], byte[7], byte[8], byte[9]) : (byte[0] >> 4) === 5 ? HEX(byte[2], byte[3], byte[4], byte[5], byte[6], byte[7], byte[8], byte[9]) : (byte[0] >> 4) === 15 ? HEX(byte[2], byte[3], byte[4], byte[5], byte[6], byte[7], byte[8], byte[9]) : "NULL",
            SENSOR_COM_ERROR: (byte[0] >> 4) === 2 ? UINT8((byte[0] & 0x0F) >> 3) : (byte[0] >> 4) === 3 ? UINT8((byte[0] & 0x0F) >> 3) : (byte[0] >> 4) === 4 ? UINT8((byte[0] & 0x0F) >> 3) : "NULL",
            ALERT_STATUS: (byte[0] >> 4) === 2 ? UINT8(((byte[1]) >> 6)) : (byte[0] >> 4) === 3 ? UINT8(((byte[1]) >> 6)) : (byte[0] >> 4) === 4 ? UINT8(((byte[1]) >> 6)) : "NULL",
            BATTERY_LEVEL: ((byte[0] >> 4) === 2 ? UINT8(((byte[1] & 0x3F) >> 4)) : (byte[0] >> 4) === 3 ? UINT8(((byte[1] & 0x3F) >> 4)) : (byte[0] >> 4) === 4 ? UINT8(((byte[1] & 0x3F) >> 4)) : "NULL") === 0 ? 10 : ((byte[0] >> 4) === 2 ? UINT8(((byte[1] & 0x3F) >> 4)) : (byte[0] >> 4) === 3 ? UINT8(((byte[1] & 0x3F) >> 4)) : (byte[0] >> 4) === 4 ? UINT8(((byte[1] & 0x3F) >> 4)) : "NULL") === 1 ? 30 : ((byte[0] >> 4) === 2 ? UINT8(((byte[1] & 0x3F) >> 4)) : (byte[0] >> 4) === 3 ? UINT8(((byte[1] & 0x3F) >> 4)) : (byte[0] >> 4) === 4 ? UINT8(((byte[1] & 0x3F) >> 4)) : "NULL") == 2 ? 60 : ((byte[0] >> 4) === 2 ? UINT8(((byte[1] & 0x3F) >> 4)) : (byte[0] >> 4) === 3 ? UINT8(((byte[1] & 0x3F) >> 4)) : (byte[0] >> 4) === 4 ? UINT8(((byte[1] & 0x3F) >> 4)) : "NULL") === 3 ? 99 : "NULL",
            HUMIDITY: (byte[0] >> 4) === 2 ? UINT16(byte[2], byte[3]) / 10 : (byte[0] >> 4) === 3 ? UINT16(byte[2], byte[3]) / 10 : (byte[0] >> 4) === 4 ? UINT16(byte[2], byte[3]) / 10 : "NULL",
            TEMPERATURE: (byte[0] >> 4) === 2 ? INT16(byte[4], byte[5]) / 10 : (byte[0] >> 4) === 3 ? INT16(byte[4], byte[5]) / 10 : (byte[0] >> 4) === 4 ? INT16(byte[4], byte[5]) / 10 : "NULL",
            TENTATIVE: (byte[0] >> 4) === 3 ? UINT8(byte[6]) : (byte[0] >> 4) === 4 ? UINT8(byte[6]) : "NULL",
            START_ADDRESS: (byte[0] >> 4) === 13 ? UINT16(byte[1], byte[2]) : "NULL",
            NUM_OF_REGISTER: (byte[0] >> 4) === 13 ? UINT8(byte[3]) : "NULL",
            CONTENT_OF_REGISTER: (byte[0] >> 4) === 13 ? HEX(byte[4], byte[5], byte[6], byte[7]) : "NULL",
        };
    }
    for (var parameter in data)
        if (data[parameter] == "NULL") delete data[parameter];
    return {
        data,
        warnings: [],
        errors: []
    };
}
//************										
//Sub Function														
function UINT8(byte) {
    return byte;
}
function UINT16(byte1, byte2) {
    var uint16 = (byte1 << 8) | byte2;
    return uint16;
}
function INT16(byte1, byte2) {
    var int16 = (((byte1 << 8) | byte2) << 16) >> 16;
    return int16;
}
function HEX(byte1, byte2, byte3, byte4, byte5, byte6, byte7, byte8) {
    isNaN(byte1) ? byte1 = "na" : byte1 = byte1;
    isNaN(byte2) ? byte2 = "na" : byte2 = byte2;
    isNaN(byte3) ? byte3 = "na" : byte3 = byte3;
    isNaN(byte4) ? byte4 = "na" : byte4 = byte4;
    isNaN(byte5) ? byte5 = "na" : byte5 = byte5;
    isNaN(byte6) ? byte6 = "na" : byte6 = byte6;
    isNaN(byte7) ? byte7 = "na" : byte7 = byte7;
    isNaN(byte8) ? byte8 = "na" : byte8 = byte8;
    var hex = '';
    var bytes = [byte1, byte2, byte3, byte4, byte5, byte6, byte7, byte8];
    for (var i = 0; i < bytes.length; i++) {
        var hexByte = bytes[i].toString(16);
        if (hexByte.length < 2) {
            hexByte = '0' + hexByte;
        }
        hex += hexByte;
        hex = hex.replace("na", "");
    }
    return hex;
}
return decodeUplink(input);