<template>
  <div class="h-housing-list">
    <div class="h-housing-item">
      <div class="h-house-general">
        <div class="house-img">
          <img src="//www.baidu.com/img/baidu_jgylogo3.gif" alt="" width="100%" class="main-house-img">
          <div class="house-module-img">
            <div class="module-img" style="padding-right: 0.1rem">
              <img src="//www.baidu.com/img/baidu_jgylogo3.gif" alt="" width="100%" height="100%">
            </div>
            <div class="module-img">
              <img src="//www.baidu.com/img/baidu_jgylogo3.gif" alt="" width="100%" height="100%">
            </div>
          </div>
          <i class="housing-type"></i>
        </div>
        <div class="house-desc">
          <p class="title">3室2厅2卫 138㎡</p>
          <p class="area">9.8万/㎡｜挂牌<span class="red">14</span>天｜83人已关注</p>
          <p class="price red"><span class="num">1100</span><span>万</span></p>
          <p class="tag"><span class="tag-item">好景观</span><span class="tag-item">好景观</span></p>
          <p class="list-broker">挂牌经纪人：谢天灵</p>
          <p class="list-broker">链家-玉兰香苑店</p>
        </div>
      </div>
      <div class="house-certification">
        <div class="certified-architect">
          <p>张天林</p>
          <p class="certified-detail">小区带大型水景客厅朝南水…</p>
        </div>
        <div class="certified-report">
          <i class="certified-type-img"></i>
          <div class="link-report">
            <p class="title">查看实勘报告</p>
            <p>dhsoid</p>
          </div>
          <i class="icon-right-gray-arrow"></i>
        </div>
      </div>
    </div>
    <div class="h-housing-conclusion">
      <img src="//www.baidu.com/img/baidu_jgylogo3.gif" alt="" style="width:1rem;height: 0.75rem;">
      <div class="conclusion-detail">
        <p class="title">3室2厅2卫 138㎡ <span class="red" style="font-size: 0.15rem;float: right">1100万</span></p>
        <p style="font-size: 0.12rem">挂牌机构：20个 <span style="float: right">9.8万/㎡</span></p>
        <p style="font-size: 0.12rem">挂牌天数：14天</p>
        <p style="float: right;font-size: 0.11rem;">兔博士估价- <span class="red" style="font-size: 0.14rem">便宜3.5%</span></p>
      </div>
    </div>
  </div>
</template>
<script>
  import $Api from './houseListApi'
  export default {
    name: 'house-list',
    created () {
      console.log('houselest components')
      this.getList()
    },
    methods: {
      getList () {
        let params = {
          cityId: 605,
          type: 2
        }
        $Api.getHouseList(params).then(res => {
          console.log('res', res)
        })
      }
    }
  }
</script>

<style scoped>
  @import '../../common/css/var.css';
  .h-housing-list{
    background-color: #fff;
  }
  .h-housing-list .h-housing-item {
    border-bottom: 1px solid #F0F0F0;
  }
  .h-housing-list .h-housing-item .h-house-general {
    display: flex;
    align-items: stretch;
  }
  .h-housing-item .h-house-general .house-img{
    position: relative;
    width: 1.35rem;
  }
  .house-img .housing-type{
    position: absolute;
    top: 0.1rem;
    left: 0;
    display: inline-block;
    width: 0.55rem;
    height: 0.22rem;
    background: url("./img/homes_qwfy_tab_normal.png") no-repeat;
    background-size: 0.55rem 0.22rem;
  }
  .h-house-general .house-img .main-house-img{
    height: 1.05rem;
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
  .house-desc .list-broker {
    font-size: 0.12rem;
    color: #8e8e8e;
  }
  .h-housing-item .h-house-general .house-module-img{
    display: inline-flex;
    width: 1.35rem;
    min-height: 0.5rem;
  }
  .h-house-general .house-module-img .module-img{
    width: 50%;
  }
  .h-housing-item .house-certification {
    display: flex;
    padding: 0.15rem 0;
  }
  .house-certification .certified-architect{
    width: 60%;
    text-align: left;
  }
  .certified-architect .certified-detail{
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
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
    background: url("./img/homes_rzfy_tab_normal.png") no-repeat;
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
  }
  /*conclusion*/
  .h-housing-conclusion{
    display: flex;
    padding: 0.1rem 0;
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
    font-size: 0.18rem;
  }
</style>
