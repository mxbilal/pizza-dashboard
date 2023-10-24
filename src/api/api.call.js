import Axios from "axios";

const base_URL = import.meta.env.VITE_APP_API_BASE_URL;

export const LAMT_API = {
  lamtApi: Axios.create({
    name: "lamt-api",
  }),
  init() {
    this.lamtApi.interceptors.request.use(this.onRequest.bind(this));

    this.lamtApi.interceptors.response.use(
      this.onSuccess.bind(this),
      this.onError.bind(this)
    );
  },
  onRequest(config) {
    let token = localStorage.getItem("authToken");
    if (["lamt-api"].includes(config.name)) {
      config.baseURL = base_URL;
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  async onError(ex) {
    console.log("onError", ex?.config?.url, { ex });
    return ex;
  },
  onSuccess(response) {
    return response;
  },
  endpoints: {
    superAdmin: {
      login(data) {
        return LAMT_API.lamtApi.request({
          method: "POST",
          url: `/superAdmin/login`,
          data,
        });
      },
      forgetPassword(data) {
        return LAMT_API.lamtApi.request({
          method: "POST",
          url: `/password/email`,
          data,
        });
      },
      resetPassword(data) {
        return LAMT_API.lamtApi.request({
          method: "POST",
          url: `/password/reset`,
          data,
        });
      },
      twoFactor(data) {
        return LAMT_API.lamtApi.request({
          method: "POST",
          url: `/verify2FA`,
          data,
        });
      },
    
    },
   
    clientAdmin: {
      login(data) {
        return LAMT_API.lamtApi.request({
          method: "POST",
          url: `/client/login`,
          data,
        });
      },
      withGoogle(data) {
        const formData = new FormData();
        formData.append("email", data.email);
        formData.append("password", data.email);
        return LAMT_API.lamtApi.request({
          method: "POST",
          url: "/login/google",
          data: formData,
          headers: {
            "Access-Control-Allow-Origin": "*",
          },
        });
      },
      register(data) {
        return LAMT_API.lamtApi.request({
          method: "POST",
          url: "/client/register",
          data,
        });
      },
      plans: {
        getPlans() {
          return LAMT_API.lamtApi.request({
            method: "GET",
            url: "/plans",
          });
        },
      },

      expense: {
        getExpenses() {
          return LAMT_API.lamtApi.request({
            method: "GET",
            url: "/expenses",
          });
        },
        getExpenseById(id) {
          return LAMT_API.lamtApi.request({
            method: "GET",
            url: `/expenses/${id}`,
          });
        },
        addExpenses(data) {
          return LAMT_API.lamtApi.request({
            method: "POST",
            url: "/expenses",
            data,
          });
        },
        deleteExpense(id) {
          return LAMT_API.lamtApi.request({
            method: "DELETE",
            url: `/expenses/${id}`,
          });
        },
      },
      purchases: {
        getPurchases() {
          return LAMT_API.lamtApi.request({
            method: "GET",
            url: "/users",
          });
        },
        getPurchaseById(id) {
          return LAMT_API.lamtApi.request({
            method: "GET",
            url: `/purchases/${id}`,
          });
        },
        addPurchases(data) {
          return LAMT_API.lamtApi.request({
            method: "POST",
            url: "/users",
            data,
          });
        },
        updatePurchases(data) {
          return LAMT_API.lamtApi.request({
            method: "PUT",
            url: "/purchases",
            data,
          });
        },
        deletePurchase(id) {
          return LAMT_API.lamtApi.request({
            method: "DELETE",
            url: `/purchases/${id}`,
          });
        },
      },
      reports: {
        profitAndLoss: {
          getProfitLoss() {
            return LAMT_API.lamtApi.request({
              method: "GET",
              url: "/reports/profit-loss/interval",
            });
          },

          getProfitLossByInterval(startDate, endDate) {
            return LAMT_API.lamtApi.request({
              method: "GET",
              url: `/reports/profit-loss/interval/${startDate}/${endDate}`,
            });
          },
          getDataByThisMonth() {
            return LAMT_API.lamtApi.request({
              method: "GET",
              url: `/reports/profit-loss/month/thisMonth`,
            });
          },
          getDataByLastMonth() {
            return LAMT_API.lamtApi.request({
              method: "GET",
              url: `/reports/profit-loss/month/lastMonth`,
            });
          },
        },
      },

      sales: {
        getSales() {
          return LAMT_API.lamtApi.request({
            method: "GET",
            url: `/sales`,
          });
        },
        addSales(data) {
          return LAMT_API.lamtApi.request({
            method: "POST",
            url: "/sales",
            data,
          });
        },
        updateSales(data,id) {
          return LAMT_API.lamtApi.request({
            method: "PUT",
            url: "/sales/"+id,
            data,
            headers: {
              "Content-Type": "application/x-www-form-urlencoded",
            },
          });
        },
        getSalesById(id) {
          return LAMT_API.lamtApi.request({
            method: "GET",
            url: `/sales/${id}`,
          });
        },
        deleteSalesById(id) {
          return LAMT_API.lamtApi.request({
            method: "DELETE",
            url: `/sales/${id}`,
          });
        },
      },
      profile: {
        getProfile() {
          return LAMT_API.lamtApi.request({
            method: "GET",
            url: `/client/profile`,
          });
        },
      },
      clients: {
        getAll() {
          return LAMT_API.lamtApi.request({
            method: "GET",
            url: "/users",
          });
        },
        getClientById(id) {
          return LAMT_API.lamtApi.request({
            method: "GET",
            url: `/users/${id}`,
          });
        },
       del(id) {
          return LAMT_API.lamtApi.request({
            method: "DELETE",
            url: `/client/delete/${id}`,
          });
        },

        add(data) {
          return LAMT_API.lamtApi.request({
            method: "POST",
            url: "/users",
            data,
            headers: {
              "Content-Type": "application/x-www-form-urlencoded",
            },
          });
        },
        update(data,id) {
          return LAMT_API.lamtApi.request({
            method: "PUT",
            url: `/users/${id}`,
            data,
            headers: {
              "Content-Type": "application/x-www-form-urlencoded",
            },
          });
        },
      },
      products: {
        getAll() {
          return LAMT_API.lamtApi.request({
            method: "GET",
            url: "/product-or-services",
          });
        },
        add(data) {
          return LAMT_API.lamtApi.request({
            method: "POST",
            url: "/product-or-services",
            data,
          });
        },
        getProductById(id) {
          return LAMT_API.lamtApi.request({
            method: "GET",
            url: `/product-or-services/${id}`,
          });
        },
        deleteProductById(id) {
          return LAMT_API.lamtApi.request({
            method: "DELETE",
            url: `/product-or-services/${id}`,
          });
        },
      },
    },
  },
};
