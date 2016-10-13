<style lang="less" scoped>
   @import './global.less';
   .cover{
      height: 100vh;
      background-color: #EFEFF4;
   }
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

  const orders = {
    all: {
      page: 0,
      showLoadMore: false,
      items: [],
    },
    pending_pay: {
      page: 0,
      showLoadMore: false,
      items: [],
    },
    pending_checkin: {
      page: 0,
      showLoadMore: false,
      items: [],
    },
    complete: {
      page: 0,
      showLoadMore: false,
      items: [],
    },
    refund: {
      page: 0,
      showLoadMore: false,
      items: [],
    },
  };

  export default {
    data() {
      return {
        orders,
        curType: 'all',
        isRequest: false,
        showLoading: false,
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

        this.$http.get('', ajaxData, {
          emulateJSON: true,
        }).then(({ status, data }) => {
          if (status === 200 && data.error_code === 0) {
            // 请求成功
            const tmpType = ajaxData.Status;
            const { rows } = data.data;
            if (rows.length > 0) {
              _this.orders[tmpType].page = ajaxData.page;
              _this.orders[tmpType].items = _this.orders[tmpType].items.concat(rows);
            }
            _this.orders[tmpType].showLoadMore = rows.length >= 10;
          } else if (status === 200 && data.error_code === -1) {
            this.showError(data.error_msg);
          }
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
        this.getData({
          page: this.orders[this.curType].page + 1,
          Status: this.curType,
        });
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
    // ready() {
    //   if (this.curOrders.length === 0) {
    //     this.getData({
    //       page: 1,
    //       Status: this.curType,
    //     });
    //   }

    //   this.$watch('curType', (newVal) => {
    //     if (this.curOrders.length === 0) {
    //       this.getData({
    //         page: this.orders[newVal].page + 1,
    //         Status: newVal,
    //       });
    //     }
    //   });
    // },

    components: {
      TabBar,
      Toast,
       OrderListContainer,
     
    },
  };
</script>
