import type { Route } from "../model/types";

export const mockRoutes: Route[] = [
  {
    uuid: "1",
    address: "10.1.30.0",
    mask: "24",
    gateway: "193.0.174.1",
    interface: "Подключение Ethernet",
  },
  {
    uuid: "2",
    address: "192.168.1.0",
    mask: "24",
    gateway: "0.0.0.0",
    interface: "Домашняя сеть",
  },
  {
    uuid: "3",
    address: "193.0.174.0",
    mask: "24",
    gateway: "0.0.0.0",
    interface: "Подключение Ethernet",
  },
  {
    uuid: "4",
    address: "193.0.175.0",
    mask: "25",
    gateway: "193.0.174.10",
    interface: "Подключение Ethernet",
  },
  {
    uuid: "5",
    address: "193.0.175.32",
    mask: "32",
    gateway: "193.0.174.1",
    interface: "Подключение Ethernet",
  },
  {
    uuid: "6",
    address: "192.168.0.0",
    mask: "24",
    gateway: "0.0.0.0",
    interface: "Гостевая сеть",
  },
  {
    uuid: "7",
    address: "10.1.0.0",
    mask: "16",
    gateway: "192.168.1.1",
    interface: "Виртуальный адаптер",
  },
  {
    uuid: "8",
    address: "172.16.0.0",
    mask: "12",
    gateway: "192.168.100.1",
    interface: "VPN",
  },
];
