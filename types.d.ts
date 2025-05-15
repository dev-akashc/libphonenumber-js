// The rationale for having a separate `CountryCode` type instead of just a `string`:
//
export type CountryCode = 'AC' | 'AD' | 'AE' | 'AF' | 'AG' | 'AI' | 'AL' | 'AM' | 'AO' | 'AR' | 'AS' | 'AT' | 'AU' | 'AW' | 'AX' | 'AZ' | 'BA' | 'BB' | 'BD' | 'BE' | 'BF' | 'BG' | 'BH' | 'BI' | 'BJ' | 'BL' | 'BM' | 'BN' | 'BO' | 'BQ' | 'BR' | 'BS' | 'BT' | 'BW' | 'BY' | 'BZ' | 'CA' | 'CC' | 'CD' | 'CF' | 'CG' | 'CH' | 'CI' | 'CK' | 'CL' | 'CM' | 'CN' | 'CO' | 'CR' | 'CU' | 'CV' | 'CW' | 'CX' | 'CY' | 'CZ' | 'DE' | 'DJ' | 'DK' | 'DM' | 'DO' | 'DZ' | 'EC' | 'EE' | 'EG' | 'EH' | 'ER' | 'ES' | 'ET' | 'FI' | 'FJ' | 'FK' | 'FM' | 'FO' | 'FR' | 'GA' | 'GB' | 'GD' | 'GE' | 'GF' | 'GG' | 'GH' | 'GI' | 'GL' | 'GM' | 'GN' | 'GP' | 'GQ' | 'GR' | 'GT' | 'GU' | 'GW' | 'GY' | 'HK' | 'HN' | 'HR' | 'HT' | 'HU' | 'ID' | 'IE' | 'IL' | 'IM' | 'IN' | 'IO' | 'IQ' | 'IR' | 'IS' | 'IT' | 'JE' | 'JM' | 'JO' | 'JP' | 'KE' | 'KG' | 'KH' | 'KI' | 'KM' | 'KN' | 'KP' | 'KR' | 'KW' | 'KY' | 'KZ' | 'LA' | 'LB' | 'LC' | 'LI' | 'LK' | 'LR' | 'LS' | 'LT' | 'LU' | 'LV' | 'LY' | 'MA' | 'MC' | 'MD' | 'ME' | 'MF' | 'MG' | 'MH' | 'MK' | 'ML' | 'MM' | 'MN' | 'MO' | 'MP' | 'MQ' | 'MR' | 'MS' | 'MT' | 'MU' | 'MV' | 'MW' | 'MX' | 'MY' | 'MZ' | 'NA' | 'NC' | 'NE' | 'NF' | 'NG' | 'NI' | 'NL' | 'NO' | 'NP' | 'NR' | 'NU' | 'NZ' | 'OM' | 'PA' | 'PE' | 'PF' | 'PG' | 'PH' | 'PK' | 'PL' | 'PM' | 'PR' | 'PS' | 'PT' | 'PW' | 'PY' | 'QA' | 'RE' | 'RO' | 'RS' | 'RU' | 'RW' | 'SA' | 'SB' | 'SC' | 'SD' | 'SE' | 'SG' | 'SH' | 'SI' | 'SJ' | 'SK' | 'SL' | 'SM' | 'SN' | 'SO' | 'SR' | 'SS' | 'ST' | 'SV' | 'SX' | 'SY' | 'SZ' | 'TA' | 'TC' | 'TD' | 'TG' | 'TH' | 'TJ' | 'TK' | 'TL' | 'TM' | 'TN' | 'TO' | 'TR' | 'TT' | 'TV' | 'TW' | 'TZ' | 'UA' | 'UG' | 'US' | 'UY' | 'UZ' | 'VA' | 'VC' | 'VE' | 'VG' | 'VI' | 'VN' | 'VU' | 'WF' | 'WS' | 'XK' | 'YE' | 'YT' | 'ZA' | 'ZM' | 'ZW';


export type CountryCallingCodes = {
  [countryCallingCode: string]: CountryCode[];
};

export type Countries = {

  [country in CountryCode]?: any[];
};

export type MetadataJson = {
  country_calling_codes: CountryCallingCodes;
  countries: Countries;
};

export type Examples = {

  [country in CountryCode]: NationalNumber;
};

export type NumberFormat = 'NATIONAL' | 'INTERNATIONAL' | 'E.164' | 'RFC3966' | 'IDD';
export type NumberType = undefined | 'PREMIUM_RATE' | 'TOLL_FREE' | 'SHARED_COST' | 'VOIP' | 'PERSONAL_NUMBER' | 'PAGER' | 'UAN' | 'VOICEMAIL' | 'FIXED_LINE_OR_MOBILE' | 'FIXED_LINE' | 'MOBILE';

type Tagged<A, T> = A & { __tag: T };

export type E164Number = Tagged<string, "E164Number">;
export type NationalNumber = Tagged<string, "NationalNumber">;
export type Extension = Tagged<string, "Extension">;
export type CarrierCode = Tagged<string, "CarrierCode">;
export type CountryCallingCode = Tagged<string, "CountryCallingCode">;

type FormatExtension = (formattedNumber: string, extension: Extension, metadata: MetadataJson) => string

export interface FormatNumberOptions {
  v2?: boolean;
  fromCountry?: CountryCode;
  humanReadable?: boolean;
  nationalPrefix?: boolean;
  formatExtension?: FormatExtension;
}

export interface FormatNumberOptionsWithoutIDD {
  v2?: boolean;
  formatExtension?: FormatExtension;
}




// Deprecated
export interface NumberFoundLegacy {
  country: CountryCode;
  phone: NationalNumber;
  ext?: Extension;
  startsAt: number;
  endsAt: number;
}

export class ParseError {
  message: string;
}

export interface NumberingPlan {
  leadingDigits(): string | undefined;
  possibleLengths(): number[];
  IDDPrefix(): string;
  defaultIDDPrefix(): string | undefined;
}

// The rationale for having a separate type for the result "enum" instead of just a `string`:
//
export type ValidatePhoneNumberLengthResult = 'INVALID_COUNTRY' | 'NOT_A_NUMBER' | 'TOO_SHORT' | 'TOO_LONG' | 'INVALID_LENGTH';
