// export const BASE_API = "https://icard-django.herokuapp.com";


export const BASE_API = process.env.BASE_API_URL;
export const TOKEN = "token";

export const ORDER_STATUS = {
  PENDING: "PENDING",
  DELIVERED: "DELIVERED",
};

export const PAYMENT_STATUS = {
  PENDING: "PENDING",
  PAID: "PAID",
};
