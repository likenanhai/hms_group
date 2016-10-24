<style lang="less" scoped>
   @import './global.less';
   .cover{
      height: 100vh;
      background-color: #EFEFF4;
   }
  //  #app {
  //    overflow: auto;
  //  }
</style>
<template>
  <div class="cover">
    <tab-bar :tabtype.sync="curType"></tab-bar>
    <toast type='loading' v-if='showLoading'>正在获取数据...</toast>
    <order-list-container :orders="curOrders"
         :show-load-more='curLoadMore'>
    </order-list-container>
  </div>
</template>
<script>
  import TabBar from './/TabBar';
  import { Toast } from 'vue-weui';
  import OrderListContainer from './OrderListContainer';
  import {getStates} from '../../../vuex/getters.js';
  import { Common } from '../../scripts/common.js';
  const orders = {
    0: {
      page: 1,
      showLoadMore: false,
      items: [],
    },
    1: {
      page: 1,
      showLoadMore: false,
      items: [],
    },
    2: {
      page: 1,
      showLoadMore: false,
      items: [],
    },
    8: {
      page: 1,
      showLoadMore: false,
      items: [],
    },
    7: {
      page: 1,
      showLoadMore: false,
      items: [],
    },
  };

  export default {
    data() {
      return {
        orders,
        curType: 0,
        isRequest: false,
        showLoading: false,
        reqAll: {
          groupId: this.userSelection.orderData.groupId,
          userId: this.userSelection.orderData.userId,
          page: 1,
          pageSize : 10
        },
        reqOther: {
          groupId: this.userSelection.orderData.groupId,
          userId: this.userSelection.orderData.userId,
          page: 1,
          pageSize : 10,
          Status: Number
        },
      };
    },

    computed: {
      curOrders() {
        return orders[this.curType].items;
      },

      curLoadMore() {
        return orders[this.curType].showLoadMore;
      },
    },
    methods: {
      getData(ajaxData) {
        if (this.isRequest) {
          return false;
        }

        this.isRequest = true;
        this.showLoading = true;
        const _this = this;
        const ajaxReqData = Common.reqString(ajaxData);
        //console.log(ajaxData);
        this.$http.get(api+mockApi+'/orders' + ajaxReqData)
        .then(({ status, body }) => {
          //console.log(body);
          const data = JSON.parse(body);
          //if (status === 200 && data.error_code === 0) {
            // 请求成功
            let tmpType ;
            if (ajaxData.Status == undefined) {
              tmpType = 0;
            }else {
              tmpType = ajaxData.Status;
            }
            if (data.total > 0) {
              _this.orders[tmpType].page = ajaxData.page;
              _this.orders[tmpType].items = _this.orders[tmpType].items.concat(data.items);
            }
            console.log(data.total);
            _this.orders[tmpType].showLoadMore = data.total >= 10;
          // } else if (status === 200 && data.error_code === -1) {
          //   this.showError(data.error_msg);
          // }
          _this.isRequest = false;
          _this.showLoading = false;
        }).catch(() => {
          _this.isRequest = false;
          _this.showLoading = false;
        });
      },
    },
    events: {
      loadMore() {
        orders[this.curType].page++;
        if (this.curType == 0) {
          this.reqAll.page = orders[this.curType].page;
          this.getData(this.reqAll);
        }else {
          this.reqOther.page = orders[this.curType].page;
          this.getData(this.reqOther);
        }
      },
    },
    route: {
      activate({ from, next }) {
        if (!!from.params && !!from.params.curType) {
          this.curType = from.params.curType;
        }
        next();
      },

      deactivate({ from: { params }, next }) {
        Object.assign(params, {
          curType: this.curType,
        });
        next();
      },
    },
    ready() {
      if (this.curOrders.length === 0) {
        this.getData(this.reqAll);
      }
      this.$watch('curType', (newVal) => {
        this.reqOther.Status = newVal;
        //console.log(this.curOrders.length);
        if (this.curOrders.length === 0) {
          if (newVal == 0) {
            this.getData(this.reqAll);
          }else {
            this.getData(this.reqOther);
          }
        }
      });
    },

    components: {
      TabBar,
      Toast,
       OrderListContainer,
    },
    vuex: {
			getters :{
				userSelection: getStates.getUserSelection,

			},
			actions :{
				//setOrderData,
			}
		},
  };
</script>
