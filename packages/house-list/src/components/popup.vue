<template>
    <div class="h-house-popup" v-show="showModal">
      <div class="popup-content">
        <div class="assessment">
          <div class="community-name">
            <div class="line"></div>
            <div class="name">张江汤臣豪园三期</div>
          </div>
          <div class="assess-detail">
            <div class="detail-item">
              <div style="flex: 1">
                <p><span class="num-text">790</span>万</p>
                <p>报价</p>
              </div>
              <p class="border-right-1px" style="height: 0.28rem"></p>
            </div>
            <div class="detail-item">
              <div style="flex: 1">
                <p><span class="num-text">537628</span>元/㎡</p>
                <p>单价</p>
              </div>
              <p class="border-right-1px" style="height: 0.28rem"></p>
            </div>
            <div class="detail-item">
              <div style="flex: 1">
                <p><span class="normal-text">合理</span></p>
                <p>兔博士评估</p>
              </div>
            </div>
          </div>
        </div>
        <div class="house-info">
          <div class="info-detail">
              <div class="desc">户型：{{detailInfo.roomCount}}室{{detailInfo.livingRoomCount}}厅</div>
              <div class="desc">建成：{{detailInfo.createdAt || '--'}}</div>
              <div class="desc">朝向：{{detailInfo.directionStr || '--'}}</div>
              <div class="desc">楼层：{{detailInfo.floorDesc || '--'}}</div>
          </div>
          <p class="address">区域：{{detailInfo.districtName}}-{{detailInfo.plateName}}<i class="right-red-arrow"></i></p>
          <div class="other-businesses">
            <div class="bussiness-item border-red-1px" v-for="(item,key) in detailInfo.listedOrgInfos" :key="key" @click="orgLink(item.url)">
              <span class="bussiness-name">{{item.agentName}}</span>
              <span class="bussiness-offer">{{item.listedDate}}挂牌<span class="price">{{item.quotedTotalPriceMillion}}万</span><i class="right-red-arrow"></i></span>
            </div>
          </div>
        </div>
        <i class="icon-close-modal" @click="close()"></i>
      </div>
    </div>
</template>

<script>
  export default {
    props: ['isShow', 'detailInfo'],
    data () {
      return {
        showModal: false
      }
    },
    methods: {
      close () {
        this.showModal = false
        this.$emit('onClose')
      },
      orgLink (url) {
        window.location(url)
      }
    },
    watch: {
      isShow: function (newVal, oldVal) {
        this.showModal = newVal
      }
    }
  }
</script>

<style scoped>
  @import '../../../common/css/common.css';
  .h-house-popup{
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right:0;
  background-color: rgba(0,0,0,0.3);
  display: flex;
  justify-content: center;
  align-items: center;
}
  .h-house-popup .popup-content{
    width: 80%;
  }
  .popup-content .assessment{
    background-color: #FD5056;
  }
  .assessment .community-name {
    display: flex;
    align-items: center;
    padding: 0.15rem;
  }
.assessment .community-name .line {
  margin-right: 0.12rem;
  width: 2px;
  height: 0.14rem;
  background-color: #fff
}
.assessment .community-name .name {
  font-size: 0.14rem;
  color: #fff;
}
  .assessment .assess-detail{
    display: flex;
    padding-bottom: 0.15rem;
  }
  .assess-detail .detail-item{
    display: inline-flex;
    align-items: center;
    flex: 1;
    color: #fff;
  }
  .detail-item p {
    font-size: 0.12rem;
  }
  .detail-item .num-text{
    font-size: 0.18rem;
  }
  .detail-item .normal-text{
    font-size: 0.14rem;
  }
  .popup-content .house-info {
    background-color: #fff;
    font-size: 0.12rem;
    color: #8e8e8e;
    padding: 0.15rem;
    text-align: left;
  }
  .house-info .info-detail{
    display: flex;
    flex-wrap: wrap;
  }
  .info-detail .desc{
    width: 50%;
    padding-bottom: 0.06rem;
  }
  .house-info .address {
    color: #FD5056;
  }
  .house-info .other-businesses{

  }
  .other-businesses .bussiness-item {
    width: 100%;
    height: 0.4rem;
    padding: 0 0.1rem;
    margin-top: 0.1rem;
    box-sizing: border-box;
    line-height: 0.4rem;
    border-radius: 1px;
  }
  .bussiness-item .bussiness-name{
    font-size: 0.14rem;
  }
  .bussiness-item .bussiness-offer{
    float: right;
    font-size: 0.13rem;
  }
  .bussiness-offer .price{
    font-size: 0.15rem;
    color: #FD5056;
    margin-left: 0.1rem;
  }
  .icon-close-modal{
    display: inline-block;
    width: 0.3rem;
    height: 0.3rem;
    background: url("../img/close-alert.png") no-repeat;
    background-size: 0.3rem;
    margin-top: 0.4rem;
  }
</style>
