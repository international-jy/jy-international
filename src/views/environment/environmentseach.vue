<template>
  <div>
    <!-- 搜索 开始 -->
    <div class="search">
      <span class="search-left" @click="onClickRet">
        <img src="@/assets/img/search_return.png" />
      </span>
      <div class="search-con">
        <input type="text" @keydown.enter="getName" v-model="seachName" />
        <span class="emptyText" @click="onClickDelete">
          <img src="@/assets/img/emptyText.png" />
        </span>
      </div>
      <span class="search-btn" @click="onClickSetName">搜索</span>
    </div>
    <!-- 搜索 结束 -->

    <!-- 内容 开始 -->
    <ul class="search-list" :class="seachFlag ? '' : 'dn'">
      <li
        v-for="(value, index) in modelList"
        :key="index"
        @click="onClickModel(value.id)"
      >
        <div class="search-content">
          <div class="search-list-l">
            <img :src="domeImage + value.image" />
          </div>
          <div class="search-list-r">
            <p class="s-l-t">{{ value.title }}</p>
            <p class="s-l-b">￥{{ value.price }}</p>
          </div>
        </div>
      </li>
    </ul>
    <!-- 内容 结束 -->

    <!-- 底部 开始 -->
    <div class="pql-btm-fixed">
      <ul>
        <li>
          <router-link to="/home">
            <i>
              <img src="@/assets/img/btm-fiexd3.png" alt="" />
            </i>
            <p>首页</p>
          </router-link>
        </li>
        <li>
          <a href="tel:120">
            <i>
              <img src="@/assets/img/btm-fiexd2.png" alt="" />
            </i>
            <p>电话</p>
          </a>
        </li>
        <li @click="onClickcode">
          <a href="javascript:;">
            <i>
              <img src="@/assets/img/btm-fiexd1.png" alt="" />
            </i>
            <p>微信资讯</p>
          </a>
        </li>
      </ul>
    </div>
    <!-- 底部 结束 -->

    <!-- 微信二维码 -->
    <div class="or-code" :class="flag ? 'dn' : ''" @click="onClickOr">
      <div class="white">
        <img :src="footerImage" alt="" />
        <p>长按识别二维码</p>
      </div>
    </div>
  </div>
</template>
<style lang="less" scope>
@import "../../assets/less/base.less";
@import "https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css";
// 搜索
.search {
  height: (60 / @vw);
  background-color: #fff;
  padding: (10 / @vw) (50 / @vw);
  position: relative;
  border-bottom: (1 / @vw) solid #e2e2e2;
  display: flex;
  .search-left {
    .setwh(20,30);
    position: absolute;
    left: (30 / @vw);
    top: (20 / @vw);
    display: block;
    background-size: (9 / @vw);
  }
  .search-con {
    width: 71%;
    position: relative;
    display: block;
    height: (55 / @vw);
    border-radius: (4 / @vw);
    padding: 0 (30 / @vw) 0 (35 / @vw);
    background: #f2f2f2 url(../../assets/img/seek.png) no-repeat (10 / @vw)
      center;
    overflow: hidden;
    background-size: (33 / @vw);
    margin-left: (24 / @vw);
    input {
      border: none !important;
      outline: none;
      padding: (14 / @vw) 0 0 (20 / @vw);
    }
    .emptyText {
      position: absolute;
      right: (14 / @vw);
      top: (12 / @vw);
      color: #999;
      font-size: (22 / @vw);
      .setwh(32,32);
    }
  }
  .search-btn {
    position: absolute;
    right: (20 / @vw);
    top: (18 / @vw);
    color: #555;
    line-height: (40 / @vw);
    font-size: (28 / @vw);
  }
}
// 内容
.search-list {
  padding-bottom: (88 / @vw);
  li {
    margin-bottom: 10px;
    overflow: hidden;
    .search-content {
      padding: (25 / @vw) 0;
      margin: 0 (15 / @vw);
      border-bottom: (1 / @vw) solid #e1e1e1;
      overflow: hidden;
      .search-list-l {
        display: block;
        float: left;
        width: (220 / @vw);
        height: (220 / @vw);
        margin-right: (20 / @vw);
        img {
          .setwh(220,220);
        }
      }
      .search-list-r {
        overflow: hidden;
        line-height: (55 / @vw);
        .s-l-t {
          color: #555;
          font-size: (30 / @vw);
          margin-bottom: (10 / @vw);
        }
        .s-l-b {
          color: #ffb039;
          font-size: (26 / @vw);
          line-height: (50 / @vw);
        }
      }
    }
  }
}
//底部
.pql-btm-fixed {
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  height: (100 / @vw);
  background-color: rgba(0, 0, 0, 0.75);

  ul {
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: space-around;
    li {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      padding: (10 / @vw) 0;
      a {
        font-size: 12px;
        text-align: center;
        color: #fff;
        img {
          .setwh(40,40);
        }
      }
    }
  }
}
//微信二维码弹出层
.or-code {
  position: fixed;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 101;
  .white {
    position: absolute;
    top: 50%;
    left: 50%;
    // .setwh(400,455);
    padding: (37 / @vw);
    background-color: #fff;
    margin: (-230 / @vw) 0 0 (-200 / @vw);
    border-radius: (10 / @vw);
    img {
      .setwh(327,327);
      vertical-align: middle;
      margin-bottom: (30 / @vw);
    }
    p {
      text-align: center;
      font-size: (22 / @vw);
    }
  }
}
</style>

<script>
export default {
  data() {
    return {
      modelList: [],
      flag: true,
      title: null,
      seachName: "",
      titles: null,
      seachFlag: true,
      domeImage: null,
      footerImage: "",
    };
  },
  created() {
    this.title = this.$route.query.titleName;
    this.domeImage = this.$store.state.domainName;
    this.$axios.get("/index.php/api/models/list").then((val) => {
      val.data.forEach((value) => {
        if (value.title.indexOf(this.title) != -1) {
          this.modelList.push(value);
          this.seachFlag = true;
        }
      });
    });
    this.$axios.get("index.php/api/footer/get").then((val) => {
      this.footerTel = val.data.phone;
      this.footerImage = this.$store.state.domainName + val.data.image;
    });
  },
  methods: {
    onClickDelete: function () {
      this.seachName = "";
      // this.getName();
      if (!this.seachName) {
        this.seachFlag = false;
      } else {
        this.seachFlag = true;
      }
    },
    onClickRet: function () {
      this.$router.push({ path: "/show" });
    },
    onClickSetName: function () {
      this.getName();
    },
    onClickModel: function (id) {
      this.$router.push({
        path: "/show/model",
        query: {
          id: id,
        },
      });
    },
    onClickcode: function () {
      this.flag = !this.flag;
    },
    onClickOr: function () {
      this.flag = !this.flag;
    },
    getName: function () {
      if (this.seachName) {
        this.titles = null;
        if (!this.titles) {
          this.modelList.forEach((val) => {
            if (val.title.indexOf(this.seachName) != -1) {
              this.titles = this.seachName;
            } else {
              this.titles = "";
            }
          });
        }
        if (this.titles) {
          this.seachFlag = true;
          this.$router.push({
            path: "/show/search",
            query: {
              titleName: this.title,
            },
          });
          this.seachName = "";
        } else {
          this.$router.push({ path: "/show/search2" });
          this.seachName = "";
        }
      }
    },
  },
  activated() {
    this.title = this.$route.query.titleName;
    this.domeImage = this.$store.state.domainName;
    this.$axios.get("/index.php/api/models/list").then((val) => {
      val.data.forEach((value) => {
        if (value.title.indexOf(this.title) != -1) {
          this.modelList.push(value);
          this.seachFlag = true;
        }
      });
    });
    this.$axios.get("index.php/api/footer/get").then((val) => {
      this.footerTel = val.data.phone;
      this.footerImage = this.$store.state.domainName + val.data.image;
    });
  },
};
</script>
