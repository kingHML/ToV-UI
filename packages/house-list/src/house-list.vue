<template>
  <div>
    <div class="h-housing-list" v-for="(item, key) in list" :key=key>
      <div class="h-housing-item" v-if="item.estateType !== 3" @click="linkHouseDetail()">
        <div class="h-house-general">
          <div class="house-img">
            <img v-if="item.picList[0]" :src="item.picList[0]" alt="" width="100%" class="main-house-img">
            <img v-else src="./img/waiting.jpg" alt="" width="100%" class="main-house-img">
            <div class="house-module-img">
              <div class="module-img" style="padding-right: 3px;">
                <img v-if="item.picList[1]" :src="item.picList[1]" alt="" width="100%" height="100%">
                <img v-else src="./img/waiting.jpg" alt="" width="100%" height="100%">
              </div>
              <div class="module-img">
                <img v-if="item.picList[2]" :src="item.picList[2]" alt="" width="100%" height="100%">
                <img v-else src="./img/waiting.jpg" alt="" width="100%" height="100%">
              </div>
            </div>
            <i class="housing-type" :class="item.estateType === 1?'shikan':'youxuan'"></i>
          </div>
          <div class="house-desc">
            <p class="title">{{item.roomCount}}室{{item.livingRoomCount}}厅{{item.bathroomCount}}卫 {{item.area}}㎡</p>
            <p class="area">{{item.avgPrice}}万/㎡｜挂牌<span class="red">{{item.listedDay}}</span>天｜{{item.favoriteCount}}人已关注</p>
            <p class="price red"><span class="num">{{item.totalPriceMillion}}</span><span>万</span></p>
            <p class="tag" v-if="item.tags && item.tags.length"><span class="tag-item" v-for="(tag, n) in item.tags" :key="n">{{tag}}</span></p>
            <p class="list-broker-text">挂牌经纪人：{{item.superiorName || '--'}}</p>
            <p class="list-broker-text" v-if="item.agentName || item.storeName">{{item.agentName}}-{{item.storeName}}</p>
          </div>
        </div>
        <div class="house-certification" v-if="item.estateType === 1 && item.certificateInfo">
          <div class="certified-architect">
            <p><i class="icon-guanfang"></i>{{item.certificateInfo.certMasterName}}</p>
            <p class="certified-detail">{{item.certificateInfo.desc}}</p>
          </div>
          <div class="certified-report">
            <i class="certified-type-img"></i>
            <div class="link-report">
              <p class="title">查看实勘报告</p>
              <p>{{item.certificateInfo.certDate}}认证</p>
            </div>
            <i class="icon-right-gray-arrow"></i>
          </div>
        </div>
      </div>
      <div class="h-housing-conclusion" @click="getValuationDetail(item.id)" v-else>
        <img v-if="item.picList[0]" :src="item.picList[0]" alt="" style="width:1rem;height: 0.8rem;">
        <img v-else src="./img/waiting.jpg" alt="" style="width:1rem;height: 0.8rem;">
        <div class="conclusion-detail">
          <p class="title">{{item.roomCount}}室{{item.livingRoomCount}}厅{{item.bathroomCount}}卫 {{item.area}}㎡<span class="red price">{{item.totalPriceMillion}}万</span></p>
          <p class="list-broker-text">挂牌机构：{{item.listedOrgCount}}个 <span style="float: right">{{item.avgPrice}}万/㎡</span></p>
          <p class="list-broker-text">挂牌天数：{{item.listedDay}}天</p>
          <p style="float: right;font-size: 0.11rem;color: #8e8e8e;">兔博士估价— <span class="red" style="font-size: 0.14rem">{{item.evaluationResult}}</span></p>
        </div>
      </div>
    </div>
    <popup :isShow="isShowModal" @onClose="closeModal" :detailInfo="popInfo"></popup>
  </div>
</template>
<script>
  import $Api from './houseListApi'
  import popup from './components/popup'
  export default {
    name: 'HouseList',
    data () {
      return {
        isShowModal: false,
        list: [],
        popInfo: {}
      }
    },
    created () {
      this.getList()
    },
    methods: {
      getList () {
        let params = {
          cityId: 605,
          targetId: 18048,
          page: 1,
          pageSize: 10,
          source: 1,
          type: 3
        }
        $Api.getHouseList(params).then(res => {
          if (res.resultCode === 0 && res.body) {
             this.list = res.body.estateList
          }
        })
      },
      getValuationDetail (id) {
        $Api.getHouseAssessDeatil({estateId: id}).then(res => {
          if (res.resultCode === 0 && res.body) {
            this.popInfo = res.body
            this.isShowModal = true
          }
        })
      },
      linkHouseDetail () {
        this.$router.push('/href')
        console.log('link href')
      },
      closeModal () {
        this.isShowModal = false
      }
    },
    components: {
      popup
    }
  }
</script>

<style scoped lang="css">
  @import '../../common/css/common.css';
  .h-housing-list{
    background-color: #fff;
    border-bottom: 1px solid #F0F0F0;
  }
  .h-housing-list .h-housing-item {
    padding: 0.15rem 0;
  }
  .h-housing-list .h-housing-item .h-house-general {
    display: flex;
    align-items: stretch;
  }
  .h-housing-item .h-house-general .house-img{
    position: relative;
    width: 1.35rem;
    display: flex;
    flex-direction: column;
  }
  .house-img .housing-type{
    position: absolute;
    top: 0.1rem;
    left: -2px;
    display: inline-block;
    width: 0.37rem;
    height: 0.18rem;
  }
  .housing-type.shikan{
    background: url("./img/shikan.png") no-repeat;
    background-size: 0.37rem 0.18rem;
  }
  .housing-type.youxuan{
    background: url("./img/youxuan.png") no-repeat;
    background-size: 0.37rem 0.18rem;
  }
  .h-house-general .house-img .main-house-img{
    height: 1.03rem;
    flex: 1;
  }
  .h-housing-item .h-house-general .house-desc{
    flex: 1;
    text-align: left;
    padding-top: 0.09rem;
    padding-left: 0.1rem;
    background-color: #f9f9f9;
  }
  .house-desc p {
    padding-bottom: 0.06rem;
  }
  .house-desc .title {
    font-weight: 700;
    font-size: 0.16rem;
    color: #474747;
  }
  .house-desc .area {
    font-size: 0.1rem;
    color: #8e8e8e;
  }
  .house-desc .price {
    font-size: 0.12rem;
  }
  .house-desc .price .num{
    font-size: 0.21rem;
    font-weight: 700;
  }
  .house-desc .tag {
    margin-bottom: 0.09rem;
  }
  .house-desc .tag .tag-item {
    padding: 2px;
    margin-right: 4px;
    font-size: 0.1rem;
    color: #FD5056;
    background-color: rgba(	253, 80, 86, 0.08);
  }
  .list-broker-text {
    font-size: 0.12rem;
    color: #8e8e8e;
  }
  .h-housing-item .h-house-general .house-module-img{
    display: inline-flex;
    width: 1.35rem;
    height: 0.5rem;
    padding-top: 2px;
  }
  .h-house-general .house-module-img .module-img{
    width: 50%;
  }
  .h-housing-item .house-certification {
    display: flex;
    padding-top: 0.15rem;
  }
  .house-certification .certified-architect{
    width: 60%;
    text-align: left;
  }
  .certified-architect .icon-guanfang{
    margin-right: 4px;
    display: inline-block;
    width: 0.61rem;
    height: 0.12rem;
    background: url("./img/guanfang.png") no-repeat;
    background-size: 0.61rem 0.12rem;
  }
  .certified-architect .certified-detail{
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
    font-size: 0.13rem;
    color: #8e8e8e;
    line-height: 20px;
  }
  .house-certification .certified-report{
    display: inline-flex;
    align-items: center;
    justify-content: flex-end;
    width: 40%;
  }
  .certified-report .certified-type-img{
    display: inline-block;
    width: 0.30rem;
    height: 0.35rem;
    background: url("./img/xianchang.png") no-repeat;
    background-size: 0.30rem 0.35rem;
  }
  .certified-report .link-report{
    margin: 0 0.1rem;
    color: #8e8e8e;
    font-size: 0.1rem;
  }
  .link-report .title {
    color: #474747;
    font-size: 0.11rem;
    line-height:20px;
  }
  /*conclusion*/
  .h-housing-conclusion{
    display: flex;
    padding: 0.15rem 0;
  }
  .h-housing-conclusion .conclusion-detail{
    flex: 1;
    text-align: left;
    padding-left: 0.1rem;
  }
  .conclusion-detail p{
    margin-bottom: 0.06rem;
  }
  .conclusion-detail .title{
    font-weight: 700;
    font-size: 0.16rem;
  }
  .conclusion-detail .price {
    float: right;
    font-size: 0.15rem;
    font-weight: 700;
  }
</style>
