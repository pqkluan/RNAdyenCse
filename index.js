/**
 * @author: Pham Quan Khiet Luan
 * @email: pqkluan@gmail.com
 */
import { NativeModules } from "react-native";

const { RNAdyenCse } = NativeModules;

/**
 * Encrypt the card data before send it to the backend.
 * Ecommerce integration (CSE)
 *
 * @param {{
 *     holderName: string,
 *     number: string,
 *     cvc: string,
 *     expiryMonth: string,
 *     expiryYear: string
 *   }} card
 * @param {number} timestamp
 * @param {string} publicKey
 * @returns
 */
function encrypt(
  card: {
    holderName: string,
    number: string,
    cvc: string,
    expiryMonth: string,
    expiryYear: string
  },
  timestamp: number,
  publicKey: string
) {
  const { holderName, number, cvc, expiryMonth, expiryYear } = card;

  return RNAdyenCse.encrypt(
    holderName,
    number,
    cvc,
    expiryMonth,
    expiryYear,
    timestamp,
    publicKey
  );
}

export { encrypt };
