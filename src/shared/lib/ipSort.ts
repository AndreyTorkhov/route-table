export function ipToNumber(ip: string): number {
  return ip.split(".").reduce((acc, octet) => (acc << 8) + Number(octet), 0);
}

export function compareIp(a: string, b: string): number {
  return ipToNumber(a) - ipToNumber(b);
}
