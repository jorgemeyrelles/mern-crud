import axios from "axios";
import { axiosInstance } from "./axiosUtils";

export const api = {
  getList: async () => {
    try {
      const clients = await axiosInstance.request({
        method: 'GET',
        url: 'list/all',
      });
      return clients.data;
    } catch (error) {
      return error;
    }
  },
  getOneFromList: async (value) => {
    try {
      const clients = await axiosInstance.request({
        method: 'GET',
        url: 'list/one',
        data: { id: value },
      });
      return clients.data;
    } catch (error) {
      return error;
    }
  },
};