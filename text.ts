
namespace matrix { // text.ts

    // blockId=matrix_charCode block="%text" blockHidden=true
    // text.defl="R"
    //function matrix_charCode(text: string) { return text.charCodeAt(0) }

    //% blockId=matrix_text block="%text" color="#FF0000" blockHidden=true
    export function matrix_text(text: string): string { return text }

    export enum eDigit {
        //% block="Leerzeichen"
        x20 = 0x20,
        //% block="0"
        x30 = 0x30,
        //% block="1"
        x31,
        //% block="2"
        x32,
        //% block="3"
        x33,
        //% block="4"
        x34,
        //% block="5"
        x35,
        //% block="6"
        x36,
        //% block="7"
        x37,
        //% block="8"
        x38,
        //% block="9"
        x39,
        //% block=":"
        x3A,
        //% block=";"
        x3B,
        //% block="<"
        x3C,
        //% block="="
        x3D,
        //% block=">"
        x3E,
        //% block="?"
        x3F,
        //% block="-"
        x2D = 0x2D,
        //% block="."
        x2E = 0x2E,
    }

    export function get5x8DigitImage(charCode: number): Image {
        if (between(charCode, 0x30, 0x3F))
            return image5x8fromString("\x3E\x51\x49\x45\x3E\x00\x42\x7F\x40\x00\x62\x51\x49\x49\x46\x22\x41\x49\x49\x36\x18\x14\x12\x7F\x10\x27\x45\x45\x45\x39\x3C\x4A\x49\x49\x30\x01\x71\x09\x05\x03\x36\x49\x49\x49\x36\x06\x49\x49\x29\x1E\x00\x36\x36\x00\x00\x00\xAC\x6C\x00\x00\x08\x14\x22\x41\x00\x14\x14\x14\x14\x14\x41\x22\x14\x08\x00\x02\x01\x51\x09\x06".substr((charCode & 0x0F) * 5, 5))
        //                            (  "0"               , "1"               , "2"               , "3"               , "4"               , "5"               , "6"               , "7"               , "8"               , "9"               , ":"               , ";"               , "<"               , "="               , ">"               , "?"               )
        //            return image5x8fromString("\x3E\x51\x49\x45\x3E\x00\x42\x7F\x40\x00\x62\x51\x49\x49\x46\x22\x41\x49\x49\x36\x18\x14\x12\x7F\x10\x27\x45\x45\x45\x39\x3C\x4A\x49\x49\x30\x01\x71\x09\x05\x03\x36\x49\x49\x49\x36\x06\x49\x49\x29\x1E\x00\x36\x36\x00\x00\x00\xAC\x6C\x00\x00\x08\x14\x22\x41\x00\x14\x14\x14\x14\x14\x41\x22\x14\x08\x00\x02\x01\x51\x09\x06".substr((charCode & 0x0F) * 5, 5))
        //                        (  "0"               , "1"               , "2"               , "3"               , "4"               , "5"               , "6"               , "7"               , "8"               , "9"               , ":"               )
        else if (charCode == 0x2D) return image5x8fromString("\x08\x08\x08\x08\x08") // "-"
        else if (charCode == 0x2E) return image5x8fromString("\x60\x60\x00\x00\x00") // "."
        else return image5x8fromString("\x00\x00\x00\x00\x00") // " "
    }
    /* 
        export function getDigit_5x8(charCode: number) { // nur Ziffern, Minus und Punkt (spart Programmcode)
            if (between(charCode, 0x30, 0x3A)) {
                return Buffer.fromHex([
                    "3E5149453E", // "0"
                    "00427F4000", // "1"
                    "6251494946", // "2"
                    "2241494936", // "3"
                    "1814127F10", // "4"
                    "2745454539", // "5"
                    "3C4A494930", // "6"
                    "0171090503", // "7"
                    "3649494936", // "8"
                    "064949291E", // "9"
                    "0036360000"  // ":"
                ].get(charCode & 0x0F))
            }
            else if (charCode == 0x2D) return Buffer.fromHex("0808080808") // "-"
            else if (charCode == 0x2E) return Buffer.fromHex("6060000000") // "."
            else return Buffer.fromHex("FFFFFFFFFF")
        }
         */

    /* 
        function getChar_5x8(pCharCode: number): Buffer {
    
            if (between(pCharCode, 0x20, 0x7F)) {
    
                switch (pCharCode & 0xF0) { // 16 HEX-String-Elemente je 5 Byte
                    case 0x20:
                        return Buffer.fromHex([
                            "0000000000", // " "
                            "005F000000", // "!"
                            "0007000700", // """
                            "147F147F14", // "#"
                            "242A7F2A12", // "$"
                            "2313086462", // "%"
                            "3649552250", // "&"
                            "0005030000", // "'"
                            "1C22410000", // "("
                            "41221C0000", // ")"
                            "082A1C2A08", // "*"
                            "08083E0808", // "+"
                            "A060000000", // ","
                            "0808080808", // "-"
                            "6060000000", // "."
                            "2010080402" // "/"
                        ].get(pCharCode & 0x0F))
    
                    case 0x30:
                        return Buffer.fromHex([
                            "3E5149453E", // "0"
                            "00427F4000", // "1"
                            "6251494946", // "2"
                            "2241494936", // "3"
                            "1814127F10", // "4"
                            "2745454539", // "5"
                            "3C4A494930", // "6"
                            "0171090503", // "7"
                            "3649494936", // "8"
                            "064949291E", // "9"
                            "0036360000", // ":"
                            "00AC6C0000", // ";"
                            "0814224100", // "<"
                            "1414141414", // "="
                            "4122140800", // ">"
                            "0201510906"  // "?"
                        ].get(pCharCode & 0x0F))
    
                    case 0x40:
                        return Buffer.fromHex([
                            "324979413E", // "@""
                            "7E0909097E", // "A"
                            "7F49494936", // "B"
                            "3E41414122", // "C"
                            "7F4141221C", // "D"
                            "7F49494941", // "E"
                            "7F09090901", // "F"
                            "3E41415172", // "G"
                            "7F0808087F", // "H"
                            "417F410000", // "I"
                            "2040413F01", // "J"
                            "7F08142241", // "K"
                            "7F40404040", // "L"
                            "7F020C027F", // "M"
                            "7F0408107F", // "N"
                            "3E4141413E" // "O"
                        ].get(pCharCode & 0x0F))
    
                    case 0x50:
                        return Buffer.fromHex([
                            "7F09090906", // "P"
                            "3E4151215E", // "Q"
                            "7F09192946", // "R"
                            "2649494932", // "S"
                            "01017F0101", // "T"
                            "3F4040403F", // "U"
                            "1F2040201F", // "V"
                            "3F4038403F", // "W"
                            "6314081463", // "X"
                            "0304780403", // "Y"
                            "6151494543", // "Z"
                            "7F41410000", // """
                            "0204081020", // "\"
                            "41417F0000", // """
                            "0402010204", // "^"
                            "8080808080" // "_"
                        ].get(pCharCode & 0x0F))
    
                    case 0x60:
                        return Buffer.fromHex([
                            "0102040000", // "`"
                            "2054545478", // "a"
                            "7F48444438", // "b"
                            "3844442800", // "c"
                            "384444487F", // "d"
                            "3854545418", // "e"
                            "087E090200", // "f"
                            "18A4A4A47C", // "g"
                            "7F08040478", // "h"
                            "007D000000", // "i"
                            "80847D0000", // "j"
                            "7F10284400", // "k"
                            "417F400000", // "l"
                            "7C04180478", // "m"
                            "7C08047C00", // "n"
                            "3844443800" // "o"
                        ].get(pCharCode & 0x0F))
    
                    case 0x70:
                        return Buffer.fromHex([
                            "FC24241800", // "p"
                            "182424FC00", // "q"
                            "007C080400", // "r"
                            "4854542400", // "s"
                            "047F440000", // "t"
                            "3C40407C00", // "u"
                            "1C2040201C", // "v"
                            "3C4030403C", // "w"
                            "4428102844", // "x"
                            "1CA0A07C00", // "y"
                            "4464544C44", // "z"
                            "0836410000", // "{"
                            "007F000000", // "|"
                            "4136080000", // "}"
                            "0201010201", // "~"
                            "FFFFFFFFFF"  // 127
                        ].get(pCharCode & 0x0F))
    
                    default:
                        return Buffer.fromHex("FFFFFFFFFF")
                }
            }
            else {
                let b: Buffer = Buffer.fromHex("FFFFFFFFFF")
                let s = "ÄÖÜäöüß€°"
                for (let j = 0; j < s.length; j++) {
                    if (s.charCodeAt(j) == pCharCode) {
                        b = Buffer.fromHex([
                            "7D0A090A7D", // "Ä"
                            "3D4241423D", // "Ö"
                            "3D4040403D", // "Ü"
                            "2154545578", // "ä"
                            "3944443900", // "ö"
                            "3D40407D00", // "ü"
                            "FE09493600", // "ß"
                            "143E555541", // "€" "143E5555551400"
                            "0205020000"  // "°"
                        ].get(j))
                        break
                    }
                }
                return b
            }
        }
     */


    export function image5x8fromString(s5Byte: string): Image {
        let i5x8 = matrix5x8(`
            . . . . .
            . . . . .
            . . . . .
            . . . . .
            . . . . .
            . . . . .
            . . . . .
            . . . . .
            `)
        for (let iy = 0; iy < i5x8.height(); iy++) 
            for (let ix = 0; ix < i5x8.width(); ix++) 
                i5x8.setPixel(ix, iy, (s5Byte.charCodeAt(ix) & 2 ** (iy & 7)) != 0)
        return i5x8
    }

    export function image8x8fromBuffer(bu8: Buffer): Image {
        let i8x8 = matrix8x8(`            
        . . . . . . . .
        . . . . . . . .
        . . . . . . . .
        . . . . . . . .
        . . . . . . . .
        . . . . . . . .
        . . . . . . . .
        . . . . . . . .
        `)
        for (let iy = 0; iy < i8x8.height(); iy++)
            for (let ix = 0; ix < i8x8.width(); ix++)
                i8x8.setPixel(ix, iy, (bu8.getUint8(ix) & 2 ** (iy & 7)) != 0)
        return i8x8
    }


    export function get5x8CharImage(charCode: number): Image {
        //let string5: string = "\xFF\xFF\xFF\xFF\xFF"

        if (between(charCode, 0x20, 0x7F)) {
            switch (charCode & 0xF0) { // 16 string-Elemente je 8 Byte = 128
                case 0x20:
                    return image5x8fromString("\x00\x00\x00\x00\x00\x00\x5F\x00\x00\x00\x00\x07\x00\x07\x00\x14\x7F\x14\x7F\x14\x24\x2A\x7F\x2A\x12\x23\x13\x08\x64\x62\x36\x49\x55\x22\x50\x00\x05\x03\x00\x00\x1C\x22\x41\x00\x00\x41\x22\x1C\x00\x00\x08\x2A\x1C\x2A\x08\x08\x08\x3E\x08\x08\xA0\x60\x00\x00\x00\x08\x08\x08\x08\x08\x60\x60\x00\x00\x00\x20\x10\x08\x04\x02".substr((charCode & 0x0F) * 5, 5))
                //                            (  " "               , "!"               , """               , "#"               , "$"               , "%"               , "&"               , "'"               , "("               , ")"               , "*"               , "+"               , ","               , "-"               , "."               , "/"               )
                case 0x30:
                    return get5x8DigitImage(charCode)
                //  return image5x8fromString("\x3E\x51\x49\x45\x3E\x00\x42\x7F\x40\x00\x62\x51\x49\x49\x46\x22\x41\x49\x49\x36\x18\x14\x12\x7F\x10\x27\x45\x45\x45\x39\x3C\x4A\x49\x49\x30\x01\x71\x09\x05\x03\x36\x49\x49\x49\x36\x06\x49\x49\x29\x1E\x00\x36\x36\x00\x00\x00\xAC\x6C\x00\x00\x08\x14\x22\x41\x00\x14\x14\x14\x14\x14\x41\x22\x14\x08\x00\x02\x01\x51\x09\x06".substr((charCode & 0x0F) * 5, 5))
                //                            (  "0"               , "1"               , "2"               , "3"               , "4"               , "5"               , "6"               , "7"               , "8"               , "9"               , ":"               , ";"               , "<"               , "="               , ">"               , "?"               )
                case 0x40:
                    return image5x8fromString("\x32\x49\x79\x41\x3E\x7E\x09\x09\x09\x7E\x7F\x49\x49\x49\x36\x3E\x41\x41\x41\x22\x7F\x41\x41\x22\x1C\x7F\x49\x49\x49\x41\x7F\x09\x09\x09\x01\x3E\x41\x41\x51\x72\x7F\x08\x08\x08\x7F\x41\x7F\x41\x00\x00\x20\x40\x41\x3F\x01\x7F\x08\x14\x22\x41\x7F\x40\x40\x40\x40\x7F\x02\x0C\x02\x7F\x7F\x04\x08\x10\x7F\x3E\x41\x41\x41\x3E".substr((charCode & 0x0F) * 5, 5))
                //                        (  "@"               , "A"               , "B"               , "C"               , "D"               , "E"               , "F"               , "G"               , "H"               , "I"               , "J"               , "K"               , "L"               , "M"               , "N"               , "O"               )
                case 0x50:
                    return image5x8fromString("\x7F\x09\x09\x09\x06\x3E\x41\x51\x21\x5E\x7F\x09\x19\x29\x46\x26\x49\x49\x49\x32\x01\x01\x7F\x01\x01\x3F\x40\x40\x40\x3F\x1F\x20\x40\x20\x1F\x3F\x40\x38\x40\x3F\x63\x14\x08\x14\x63\x03\x04\x78\x04\x03\x61\x51\x49\x45\x43\x7F\x41\x41\x00\x00\x02\x04\x08\x10\x20\x41\x41\x7F\x00\x00\x04\x02\x01\x02\x04\x80\x80\x80\x80\x80".substr((charCode & 0x0F) * 5, 5))
                //                        (  "P"               , "Q"               , "R"               , "S"               , "T"               , "U"               , "V"               , "W"               , "X"               , "Y"               , "Z"               , "["               , "\"               , "]"               , "^"               , "_"               )

                case 0x60:
                    return image5x8fromString("\x01\x02\x04\x00\x00\x20\x54\x54\x54\x78\x7F\x48\x44\x44\x38\x38\x44\x44\x28\x00\x38\x44\x44\x48\x7F\x38\x54\x54\x54\x18\x08\x7E\x09\x02\x00\x18\xA4\xA4\xA4\x7C\x7F\x08\x04\x04\x78\x00\x7D\x00\x00\x00\x80\x84\x7D\x00\x00\x7F\x10\x28\x44\x00\x41\x7F\x40\x00\x00\x7C\x04\x18\x04\x78\x7C\x08\x04\x7C\x00\x38\x44\x44\x38\x00".substr((charCode & 0x0F) * 5, 5))
                //                        (  "`"               , "a"               , "b"               , "c"               , "d"               , "e"               , "f"               ,"g"                , "h"               , "i"               , "j"               , "k"               , "l"               , "m"               , "n"               , "o"               )

                case 0x70:
                    return image5x8fromString("\xFC\x24\x24\x18\x00\x18\x24\x24\xFC\x00\x00\x7C\x08\x04\x00\x48\x54\x54\x24\x00\x04\x7F\x44\x00\x00\x3C\x40\x40\x7C\x00\x1C\x20\x40\x20\x1C\x3C\x40\x30\x40\x3C\x44\x28\x10\x28\x44\x1C\xA0\xA0\x7C\x00\x44\x64\x54\x4C\x44\x08\x36\x41\x00\x00\x00\x7F\x00\x00\x00\x41\x36\x08\x00\x00\x02\x01\x01\x02\x01\xFF\xFF\xFF\xFF\xFF".substr((charCode & 0x0F) * 5, 5))
                //                        (  "p"               , "q"               , "r"               , "s"               , "t"               , "u"               , "v"               ,"w"                , "x"               , "y"               , "z"               , "{"               , "|"               , "}"               , "~"               , 127               )
                default:
                    return image5x8fromString("\xFF\xFF\xFF\xFF\xFF")
            }
        } else {
            //let b = Buffer.fromUTF8("\xFF\xFF\xFF\xFF\xFF")
            let s = "ÄÖÜäöüß€°"
            for (let j = 0; j < s.length; j++) {
                if (s.charCodeAt(j) == charCode)
                    return image5x8fromString("\x7D\x0A\x09\x0A\x7D\x3D\x42\x41\x42\x3D\x3D\x40\x40\x40\x3D\x21\x54\x54\x55\x78\x39\x44\x44\x39\x00\x3D\x40\x40\x7D\x00\xFE\x09\x49\x36\x00\x14\x3E\x55\x55\x41\x02\x05\x02\x00\x00".substr(j * 5, 5))
                //                        (  "Ä"               , "Ö"               , "Ü"               , "ä"               , "ö"               , "ü"               , "ß"               , "@"               , "°"               )
            }
            return image5x8fromString("\xFF\x81\x81\x81\xFF")
            // return image5x8fromString("\xFF\xFF\xFF\xFF\xFF")
        }
        /* 
                let i5x8: Image = matrix5x8(`
                    . . . . .
                    . . . . .
                    . . . . .
                    . . . . .
                    . . . . .
                    . . . . .
                    . . . . .
                    . . . . .
                    `)
        
                for (let iy = 0; iy < i5x8.height(); iy++) {
                    for (let ix = 0; ix < i5x8.width(); ix++) {
                        i5x8.setPixel(ix, iy, (string5.charCodeAt(ix) & 2 ** (iy & 7)) != 0)
                    }
                }
                return i5x8 */
    }


    // ========== Zeichensatz in String-Bytes
    /* 
        export function getUTF8_5x8(pCharCode: number) {
            if (between(pCharCode, 0x20, 0x7F)) {
                switch (pCharCode & 0xF0) { // 16 string-Elemente je 8 Byte = 128
                    case 0x20: {
                        return Buffer.fromUTF8([
                            "\x00\x00\x00\x00\x00", // " "
                            "\x00\x5F\x00\x00\x00", // "!"
                            "\x00\x07\x00\x07\x00", // """
                            "\x14\x7F\x14\x7F\x14", // "#"
                            "\x24\x2A\x7F\x2A\x12", // "$"
                            "\x23\x13\x08\x64\x62", // "%"
                            "\x36\x49\x55\x22\x50", // "&"
                            "\x00\x05\x03\x00\x00", // "'"
                            "\x1C\x22\x41\x00\x00", // "("
                            "\x41\x22\x1C\x00\x00", // ")"
                            "\x08\x2A\x1C\x2A\x08", // "*"
                            "\x08\x08\x3E\x08\x08", // "+"
                            "\xA0\x60\x00\x00\x00", // ","
                            "\x08\x08\x08\x08\x08", // "-"
                            "\x60\x60\x00\x00\x00", // "."
                            "\x20\x10\x08\x04\x02" // "/"
                        ].get(pCharCode & 0x0F))
                    }
                    case 0x30: {
                        return Buffer.fromUTF8([
                            "\x3E\x51\x49\x45\x3E", // "0"
                            "\x00\x42\x7F\x40\x00", // "1"
                            "\x62\x51\x49\x49\x46", // "2"
                            "\x22\x41\x49\x49\x36", // "3"
                            "\x18\x14\x12\x7F\x10", // "4"
                            "\x27\x45\x45\x45\x39", // "5"
                            "\x3C\x4A\x49\x49\x30", // "6"
                            "\x01\x71\x09\x05\x03", // "7"
                            "\x36\x49\x49\x49\x36", // "8"
                            "\x06\x49\x49\x29\x1E", // "9"
                            "\x00\x36\x36\x00\x00", // ":"
                            "\x00\xAC\x6C\x00\x00", // ";"
                            "\x08\x14\x22\x41\x00", // "<"
                            "\x14\x14\x14\x14\x14", // "="
                            "\x41\x22\x14\x08\x00", // ">"
                            "\x02\x01\x51\x09\x06" // "?"
                        ].get(pCharCode & 0x0F))
                    }
                    case 0x40: {
                        return Buffer.fromUTF8([
                            "\x32\x49\x79\x41\x3E", // "@""
                            "\x7E\x09\x09\x09\x7E", // "A"
                            "\x7F\x49\x49\x49\x36", // "B"
                            "\x3E\x41\x41\x41\x22", // "C"
                            "\x7F\x41\x41\x22\x1C", // "D"
                            "\x7F\x49\x49\x49\x41", // "E"
                            "\x7F\x09\x09\x09\x01", // "F"
                            "\x3E\x41\x41\x51\x72", // "G"
                            "\x7F\x08\x08\x08\x7F", // "H"
                            "\x41\x7F\x41\x00\x00", // "I"
                            "\x20\x40\x41\x3F\x01", // "J"
                            "\x7F\x08\x14\x22\x41", // "K"
                            "\x7F\x40\x40\x40\x40", // "L"
                            "\x7F\x02\x0C\x02\x7F", // "M"
                            "\x7F\x04\x08\x10\x7F", // "N"
                            "\x3E\x41\x41\x41\x3E" // "O"
                        ].get(pCharCode & 0x0F))
                    }
                    case 0x50: {
                        return Buffer.fromUTF8([
                            "\x7F\x09\x09\x09\x06", // "P"
                            "\x3E\x41\x51\x21\x5E", // "Q"
                            "\x7F\x09\x19\x29\x46", // "R"
                            "\x26\x49\x49\x49\x32", // "S"
                            "\x01\x01\x7F\x01\x01", // "T"
                            "\x3F\x40\x40\x40\x3F", // "U"
                            "\x1F\x20\x40\x20\x1F", // "V"
                            "\x3F\x40\x38\x40\x3F", // "W"
                            "\x63\x14\x08\x14\x63", // "X"
                            "\x03\x04\x78\x04\x03", // "Y"
                            "\x61\x51\x49\x45\x43", // "Z"
                            "\x7F\x41\x41\x00\x00", // """
                            "\x02\x04\x08\x10\x20", // "\"
                            "\x41\x41\x7F\x00\x00", // """
                            "\x04\x02\x01\x02\x04", // "^"
                            "\x80\x80\x80\x80\x80" // "_"
                        ].get(pCharCode & 0x0F))
                    }
                    case 0x60: {
                        return Buffer.fromUTF8([
                            "\x01\x02\x04\x00\x00", // "`"
                            "\x20\x54\x54\x54\x78", // "a"
                            "\x7F\x48\x44\x44\x38", // "b"
                            "\x38\x44\x44\x28\x00", // "c"
                            "\x38\x44\x44\x48\x7F", // "d"
                            "\x38\x54\x54\x54\x18", // "e"
                            "\x08\x7E\x09\x02\x00", // "f"
                            "\x18\xA4\xA4\xA4\x7C", // "g"
                            "\x7F\x08\x04\x04\x78", // "h"
                            "\x00\x7D\x00\x00\x00", // "i"
                            "\x80\x84\x7D\x00\x00", // "j"
                            "\x7F\x10\x28\x44\x00", // "k"
                            "\x41\x7F\x40\x00\x00", // "l"
                            "\x7C\x04\x18\x04\x78", // "m"
                            "\x7C\x08\x04\x7C\x00", // "n"
                            "\x38\x44\x44\x38\x00" // "o"
                        ].get(pCharCode & 0x0F))
                    }
                    case 0x70: {
                        return Buffer.fromUTF8([
                            "\xFC\x24\x24\x18\x00", // "p"
                            "\x18\x24\x24\xFC\x00", // "q"
                            "\x00\x7C\x08\x04\x00", // "r"
                            "\x48\x54\x54\x24\x00", // "s"
                            "\x04\x7F\x44\x00\x00", // "t"
                            "\x3C\x40\x40\x7C\x00", // "u"
                            "\x1C\x20\x40\x20\x1C", // "v"
                            "\x3C\x40\x30\x40\x3C", // "w"
                            "\x44\x28\x10\x28\x44", // "x"
                            "\x1C\xA0\xA0\x7C\x00", // "y"
                            "\x44\x64\x54\x4C\x44", // "z"
                            "\x08\x36\x41\x00\x00", // "{"
                            "\x00\x7F\x00\x00\x00", // "|"
                            "\x41\x36\x08\x00\x00", // "}"
                            "\x02\x01\x01\x02\x01", // "~"
                            "\xFF\xFF\xFF\xFF\xFF"  // 127
                        ].get(pCharCode & 0x0F))
                    }
                    default:
                        return Buffer.fromUTF8("\xFF\xFF\xFF\xFF\xFF")
                }
            } else {
                let b = Buffer.fromUTF8("\xFF\xFF\xFF\xFF\xFF")
                let s = "ÄÖÜäöüß€°"
                for (let j = 0; j < s.length; j++) {
                    if (s.charCodeAt(j) == pCharCode) {
                        b = Buffer.fromUTF8([
                            "\x7D\x0A\x09\x0A\x7D", // "Ä"
                            "\x3D\x42\x41\x42\x3D", // "Ö"
                            "\x3D\x40\x40\x40\x3D", // "Ü"
                            "\x21\x54\x54\x55\x78", // "ä"
                            "\x39\x44\x44\x39\x00", // "ö"
                            "\x3D\x40\x40\x7D\x00", // "ü"
                            "\xFE\x09\x49\x36\x00", // "ß"
                            "\x14\x3E\x55\x55\x41", // "€" "143E5555551400"
                            "\x02\x05\x02\x00\x00"  // "°"
                        ].get(j))
                        break
                    }
                }
                return b
                //return Buffer.fromHex("FFFFFFFFFF")
            }
        }
     */


} // text.ts
