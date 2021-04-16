<template>
  <div
    class="xjg box"
    v-loading.fullscreen.lock="!hide"
    element-loading-text="拼命加载中"
    element-loading-background="rgba(255, 255, 255, 0.4)"
    v-if="hide"
  >
    <!-- 模特展示2 -->
    <div class="model">
      <!-- 头部 开始 -->
      <div class="model-top" ref="modelTop" :class="classFlag5 ? '' : 'dn'">
        <div class="back" @click="onClickBackGo">&lt;</div>
        <div class="dot" @click="onClickRemoveClass2">▪ ▪ ▪</div>
      </div>
      <!-- 滚动后的顶部 -->
      <div class="model-top2" :class="classFlag5 ? 'dn' : ''">
        <div class="back2" @click="onClickBackGo">&lt;</div>
        <ul>
          <li :class="classFlag6 ? 'line' : ''" @click="onClickBackTop">
            商品
          </li>
          <li :class="classFlag6 ? '' : 'line'" @click="onClickTiaoTop">
            详情
          </li>
        </ul>
        <div class="dot2" @click="onClickRemoveClass2">▪ ▪ ▪</div>
      </div>

      <!-- 右边按钮点击后 导航显示 -->
      <div class="mone-nav" :class="classFlag2 ? 'dn' : ''">
        <div class="trian">◆</div>
        <ul>
          <li>
            <a href="/home"> <img src="@/assets/img/home.png" alt="" />首页</a>
          </li>
          <li><img src="@/assets/img/dot1.png" alt="" class="myimg" />我的</li>
          <li @click="onClickRemoveClass">
            <img src="@/assets/img/dot.png" alt="" />推荐
          </li>
          <li @click="collect">
            <img src="@/assets/img/collection.png" alt="" />收藏
          </li>
        </ul>

        <div
          :class="{ mask: flag, dn: !flag }"
          @touchmove.prevent
          @mousewheel.prevent
          @click="closeMask(num)"
        >
          <div :class="{ icon1: num == 1, dn: num != 1 }">
            <p>收藏失败,您还没有登录,登录后请您重新收藏</p>
            <div class="btn">
              <span>登录</span>
              <span>注册</span>
              <span class="close" @click="closeMask(num + 1)">关闭</span>
            </div>
          </div>
          <div :class="{ icon2: num == 2, dn: num != 2 }">
            <a href="https://qzone.qq.com/"></a>
            <a href="https://weibo.com/"></a>
            <a href="https://www.douban.com/"></a>
          </div>
        </div>
      </div>
      <!-- 头部 结束 -->

      <!-- -->
      <!-- 内容详情 开始 -->
      <div v-for="value in modelList" :key="value.id">
        <div class="cont-mid" @click="onClickRemoveClass3" ref="mid">
          <div class="mid-num">
            <div class="numimg">
              <div class="num-img" @click="onClickBigImg">
                <img :src="value.image" alt="" />
              </div>
            </div>
            <div class="num-money">
              <h2>{{ value.title }}</h2>
              <div class="recom" @click="onClickRemoveClass">
                <img src="@/assets/img/share.png" alt="" /><br />
                <span>推荐</span>
              </div>
            </div>
          </div>
          <!-- 点击图片 放大图片 -->
          <div
            class="bigimg"
            :class="classFlag3 ? 'dn' : ''"
            @click="onClickBigImg"
          >
            <img :src="value.image" alt="" />
          </div>
          <!-- 点击分享的弹层 开始 -->
          <div class="share-mono" :class="classFlag ? 'dn' : ''">
            <div class="mono-cont">
              <div class="mono-top">
                <div class="mono-img">
                  <img :src="value.image" alt="" />
                </div>
                <div class="mono-text">
                  <!-- <p>
                    ¥ <span>{{ value.price }}</span>
                  </p> -->
                  <h3>{{ value.title }}</h3>
                  <b @click="onClickSaveImg">点击预览分享图</b>
                </div>
              </div>
              <div class="mono-bot">
                <p>保存图片到手机分享给您的好友</p>
                <ul>
                  <li @click="onClickSaveImg">
                    <img src="@/assets/img/save.png" alt="" />
                    <p>保存图片</p>
                  </li>
                  <li
                    @click="
                      onCopy(
                        'http://localhost:8080/home#/show/model?id=' + value.id
                      )
                    "
                  >
                    <img src="@/assets/img/link.png" alt="" />
                    <p>复制链接</p>
                  </li>
                </ul>
                <button @click="onClickRemoveClass">取消</button>
              </div>
            </div>
          </div>
          <!-- 点击分享的弹层 结束 -->

          <!-- 点击保存图片 弹出图片 开始 -->
          <div
            class="saveimg"
            :class="classFlag4 ? 'dn' : ''"
            @click="onClickSaveImg"
          >
            <p>长按将图片保存至手机</p>
            <div class="saveimg-model">
              <img :src="value.image" alt="" class="userImg" />
              <!-- <p>¥{{ value.price }}</p> -->
              <h3>{{ value.title }}</h3>
              <img :src="footerImage" alt="" />
            </div>
          </div>
          <!-- 点击保存图片 弹出图片 结束 -->
        </div>
        <!-- 内容详情 结束 -->

        <!-- 产品说明 开始 -->
        <div class="product" ref="productTop">
          <div class="product-text">
            <span>产品说明</span>
          </div>
          <div class="product-img">
            <img :src="value.image" alt="" />
          </div>
        </div>
        <!-- 产品说明 结束 -->

        <!-- 相关产品 开始 -->
        <div class="correlation">
          <div class="corre-tit">
            <h3>相关产品</h3>
          </div>
          <ul>
            <li
              v-for="item in modelListAll"
              :key="item.id"
              @click="getData(item.id)"
            >
              <div class="li-img">
                <img :src="item.image" alt="" />
              </div>
              <div class="li-text">
                <h3>{{ item.title }}</h3>
                <!-- <p>¥{{ item.price }}</p> -->
              </div>
            </li>
          </ul>
        </div>
        <!-- 相关产品 结束 -->

        <!-- 点击回到顶部 开始 -->
        <div
          class="backtop"
          @click="onClickBackTop"
          :class="classFlag5 ? 'dn' : ''"
        >
          <img src="@/assets/img/gotop.png" alt="" />
        </div>
        <!-- 点击回到顶部 结束 -->
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      classFlag: true,
      classFlag2: true,
      classFlag3: true,
      classFlag4: true,
      classFlag5: true,
      classFlag6: true,
      dataId: null,
      modelListAll: [],
      modelList: [],
      hide: false,
      footerImage: "",
      flag: false,
      num: 0,
      chuanid: null,
    };
  },

  async created() {
    this.dataId = Number(this.$route.query.id);
    // console.log(this.dataId);
    let that = this;
    await this.$axios
      .get("/index.php/api/ambient/get?id=" + that.dataId)
      .then((val) => {
        that.modelList.push(val.data);

        // console.log(val.data);
        that.modelList.forEach((val) => {
          that.chuanid = val.id;
          val.image = this.$store.state.domainName + val.image;
        });
        console.log(that.modelList);
        // that.modelList.push(arr.find((value) => value.id == that.dataId));
        // arr.forEach((e) => {
        //   if (e.id != that.dataId) {
        //     that.modelListAll.push(e);
        //   }
        // });

        this.hide = true;

        window.addEventListener("scroll", this.scrollHandle); //绑定页面滚动事件
      });
    await this.$axios.get("index.php/api/footer/get").then((val) => {
      this.footerImage = this.$store.state.domainName + val.data.image;
    });
    await this.$axios
      .get("index.php/api/ambient/list?pageNumber=1&pageSize=6")
      .then((val) => {
        console.log(val.data);
        val.data.forEach((item) => {
          item.image = this.$store.state.domainName + item.image;
        });
        val.data.forEach((e) => {
          if (e.id != that.dataId) {
            that.modelListAll.push(e);
          }
        });
      });
  },
  methods: {
    closeMask: function (num) {
      if (num == 2) {
        this.flag = false;
        this.num = 0;
      }
    },

    collect: function () {
      this.flag = true;
      this.num = 1;
    },
    // 点击返回上一个页面
    onClickBackGo() {
      this.$router.push("/show");
    },
    async getData(num) {
      this.modelListAll.splice(0, this.modelListAll.length);
      await this.$router.push({
        path: "/show/model",
        replace: true,
        query: {
          id: num,
        },
      });
      this.$router.go(0);
      this.dataId = Number(this.$route.query.id);
      let that = this;
      await this.$axios
        .get("/index.php/api/models/list?id=" + num)
        .then((val) => {
          // console.log(val.data);
          val.data.forEach((val) => {
            val.image = this.$store.state.domainName + val.image;
          });
          that.modelList.push(
            val.data.find((value) => value.id == that.dataId)
          );
          val.data.forEach((e) => {
            if (e.id != that.dataId) {
              that.modelListAll.push(e);
            }
          });
          this.hide = true;
        });
    },
    go(step) {
      this.$router.go(step);
    },
    onClickRemoveClass: function () {
      this.classFlag = !this.classFlag;
    },
    onClickRemoveClass2: function () {
      this.classFlag2 = !this.classFlag2;
    },
    onClickRemoveClass3: function () {
      this.classFlag2 = true;
    },
    onClickBigImg: function () {
      this.classFlag3 = !this.classFlag3;
    },
    onClickSaveImg: function () {
      this.classFlag4 = !this.classFlag4;
    },

    // 回到顶部
    onClickBackTop: function () {
      let scrollTop = window.pageYOffset;
      // 每0.01秒向上移动100像素，直到小于或等于0结束
      let timer = setInterval(() => {
        scrollTop -= 20;
        // 为负数，浏览器会不处理得
        window.scrollTo(0, scrollTop);
        if (scrollTop <= 0) {
          clearInterval(timer);
        }
      }, 8);
      // window.scrollTo(0, 0);
    },

    onClickTiaoTop: function () {
      var midHeight = this.$refs.mid[0].offsetHeight;
      var modelHeight = this.$refs.modelTop[0].offsetHeight;

      window.scrollTo(0, midHeight - modelHeight);
    },

    //点击复制链接
    onCopy: function (url) {
      this.CopyUrl(url);
    },

    CopyUrl(data) {
      var Url2 = data;
      var oInput = document.createElement("input");
      oInput.value = Url2;
      document.body.appendChild(oInput);
      oInput.select(); // 选择对象
      document.execCommand("Copy"); // 执行浏览器复制命令
      oInput.style.display = "none";
      this.$message({
        message: "复制成功!",
        type: "success",
      });
    },

    //滚动监听
    scrollHandle(e) {
      let top = e.srcElement.scrollingElement.scrollTop; // 获取页面滚动高度
      var modelHeight = this.$refs.modelTop[0].offsetHeight;
      var midHeight = this.$refs.mid[0].offsetHeight;
      if (top > modelHeight) {
        this.classFlag5 = false;
      } else {
        this.classFlag5 = true;
      }
      if (top >= midHeight - modelHeight) {
        this.classFlag6 = false;
      } else {
        this.classFlag6 = true;
      }
    },
  },
  mounted() {},
  destroyed() {
    window.removeEventListener("scroll", this.scrollHandle); //移除页面滚动事件
  },
};
</script>

<style lang="less">
@import "../../assets/less/base.less";

@keyframes opcityTop {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}
// 模特展示2
.model {
  position: relative;
  background-color: rgb(242, 242, 242) !important;
  .model-top {
    position: fixed;
    top: 0;
    left: 0;
    display: flex;
    width: 100%;
    justify-content: space-between;
    padding: (20 / @vw) (30 / @vw);
    // border: 1px solid red;
    box-sizing: border-box;
    animation: opcityTop 0.5s linear;
    transition: 1s all;
    div {
      width: (70 / @vw);
      height: (70 / @vw);
      line-height: (70 / @vw);
      border-radius: (35 / @vw);
      background-color: rgba(0, 0, 0, 0.5);
      text-align: center;
      font-weight: 700;
      font-size: (25 / @vw);
      color: #fff;
    }
    .back {
      font-size: (40 / @vw);
      font-weight: 400;
    }
  }

  .model-top2 {
    position: fixed;
    top: 0;
    left: 0;
    display: flex;
    width: 100%;
    justify-content: space-between;
    padding: (20 / @vw) (30 / @vw);
    box-sizing: border-box;
    background-color: #fff;
    animation: opcityTop 0.5s linear;
    transition: 1s all;
    ul {
      display: flex;
      justify-content: center;
      li {
        line-height: (70 / @vw);
        margin-right: (40 / @vw);
        font-size: (28 / @vw);
      }
      .line {
        border-bottom: 2px solid rgb(0, 125, 255);
        font-weight: 700;
      }
    }
    div {
      width: (70 / @vw);
      height: (70 / @vw);
      line-height: (70 / @vw);
      text-align: center;
      font-weight: 700;
      font-size: (25 / @vw);
      color: #000;
    }
    .back2 {
      font-size: (50 / @vw);
      font-weight: 400;
    }
  }

  .mone-nav {
    position: fixed;
    width: 35%;
    background-color: rgba(255, 255, 255, 0.9);
    right: (30 / @vw);
    top: (140 / @vw);
    text-align: right;
    border-radius: (10 / @vw);
    .trian {
      color: rgba(255, 255, 255, 0.9);
      margin-top: (-34 / @vw);
      font-size: (50 / @vw);
      margin-right: (5 / @vw);
    }
    ul {
      padding: 0 (15 / @vw) (10 / @vw);
      text-align: left;
      margin-top: (-20 / @vw);
      li {
        line-height: (70 / @vw);
        border-bottom: 1px solid #ccc;
        font-size: (28 / @vw);
        color: #666;
        a {
          width: 100%;
        }
        img {
          width: 18%;
          vertical-align: middle;
          margin-right: (20 / @vw);
        }
        .myimg {
          width: 14%;
          margin-left: (5 / @vw);
        }
        &:last-child {
          border-bottom: none;
        }
      }
    }
  }
}

// 内容详情 开始
.cont-mid {
  background-color: #fff;
  padding-bottom: (50 / @vw);
  // border: 1px solid red;
  margin-bottom: (30 / @vw);
  box-sizing: border-box;
  .mid-num {
    display: flex;
    flex-direction: column;
    .numimg {
      // flex-direction: column;
      padding-top: 15%;
      .num-img {
        img {
          width: 100%;
          height: auto;
        }
      }
    }
    .num-money {
      display: flex;
      justify-content: space-between;
      padding: (20 / @vw) (30 / @vw);
      align-items: center;
      margin-bottom: (20 / @vw);
      p {
        color: rgb(250, 35, 10);
        font-size: (30 / @vw);
        span {
          font-size: (50 / @vw);
        }
      }
      .recom {
        border-left: 1px solid #ccc;
        padding-left: (30 / @vw);
        img {
          width: (40 / @vw);
        }
        span {
          color: #999;
          font-size: (20 / @vw);
        }
      }
      h2 {
        font-size: (35 / @vw);
        padding-left: (20 / @vw);
        color: #000;
      }
    }
  }
}
// 点击图片 放大图片
.bigimg {
  position: fixed;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  background-color: rgb(0, 0, 0);
  text-align: center;
  z-index: 99;
  img {
    width: 100%;
    // height:80%;
    margin-top: 30%;
  }
}
// 点击分享弹层
.share-mono {
  position: relative;
  position: fixed;
  left: 0;
  top: 0;
  // z-index: 99;
  width: 100%;
  height: 100%;
  padding-top: (80 / @vw);
  background-color: rgba(0, 0, 0, 0.5);
  box-sizing: border-box;
  z-index: 22;
  .mono-cont {
    width: 100%;
    height: 100%;
    text-align: center;
    .mono-top {
      position: absolute;
      left: 12%;
      bottom: 30%;
      width: 70%;
      padding: (50 / @vw) (20 / @vw) (50 / @vw) (20 / @vw);
      text-align: center;
      background-color: #fff;
      border-radius: (30 / @vw);
      margin: 0 auto;
      z-index: 99;
      .mono-text {
        text-align: center;
        p {
          text-align: left;
          font-size: (25 / @vw);
          color: rgb(250, 35, 10);
          margin: (30 / @vw) 0;
          span {
            font-size: (30 / @vw);
          }
        }
        h3 {
          text-align: left;
          font-size: (28 / @vw);
          color: #111;
          font-weight: 400;
          text-indent: (20 / @vw);
          margin: (15 / @vw) 0;
        }
        b {
          font-weight: 400;
          color: #777;
          text-align: center;
          font-size: (22 / @vw);
        }
      }
      img {
        width: 90%;
      }
    }

    .mono-bot {
      position: absolute;
      left: 0;
      bottom: 0;
      z-index: 88;
      width: 100%;
      background-color: rgb(246, 246, 246);
      padding-top: (80 / @vw);
      text-align: center;
      p {
        color: #777;
        text-align: center;
        font-size: (24 / @vw);
        margin: (40 / @vw) 0;
      }
      ul {
        display: flex;
        justify-content: center;
        margin-bottom: (30 / @vw);
        li {
          margin-right: (20 / @vw);
          img {
            width: (110 / @vw);
            margin-bottom: (5 / @vw);
          }
          p {
            margin: 0;
            font-size: (28 / @vw);
            color: #111;
          }
        }
      }
      button {
        width: 100%;
        outline: none;
        border: none;
        line-height: (90 / @vw);
        background-color: #fff;
        font-size: (28 / @vw);
      }
    }
  }
}

// 点击保存图片 弹出图片
.saveimg {
  position: fixed;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  background-color: #fff;
  z-index: 99;
  text-align: center;
  padding-top: 10%;

  p {
    font-size: (25 / @vw);
    text-align: center;
    margin: (10 / @vw) 0 (30 / @vw);
    color: #666;
  }

  .saveimg-model {
    // padding-left: 18%;
    width: 80%;
    height: auto;
    margin: 0 auto;
    // border: 1px solid red;
    text-align: center;
    box-shadow: 0px 0px 12px 0 rgba(0, 0, 0, 0.1);
    .userImg {
      width: 65%;
      margin-top: (20 / @vw);
    }
    p {
      text-align: center;
      font-size: (24 / @vw);
      color: rgb(250, 35, 10);
    }
    h3 {
      font-size: (28 / @vw);
      color: #333;
    }
    img {
      width: 50%;
      height: auto;
      margin: 0 auto;
    }
  }
}

// 内容详情 结束

// 产品说明 开始

.product {
  background-color: #fff;
  padding: (30 / @vw) (30 / @vw);
  margin-bottom: (30 / @vw);
  .product-text {
    text-align: center;
    margin-bottom: (30 / @vw);
    span {
      font-size: (30 / @vw);
      color: #111;
      font-weight: 700;
      padding-bottom: (10 / @vw);
      border-bottom: 2px solid rgb(0, 125, 255);
    }
  }
  .product-img {
    img {
      width: 100%;
    }
  }
}

// 产品说明 结束

// 相关产品 开始

.correlation {
  background-color: #fff;
  padding: (30 / @vw) (20 / @vw);
  .corre-tit {
    margin-bottom: (20 / @vw);
    h3 {
      font-size: (30 / @vw);
      color: #111;
      // font-weight: 500;
      // text-indent: ;
    }
  }
  ul {
    display: flex;
    // justify-content: space-between;
    flex-wrap: wrap;
    li {
      width: 50%;
      text-align: center;
      margin-bottom: (30 / @vw);
      .li-img {
        margin-bottom: (15 / @vw);
        img {
          width: 80%;
        }
      }
      .li-text {
        h3 {
          // text-align: left;
          font-weight: 400;
          font-size: (25 / @vw);
          margin-bottom: (20 / @vw);
        }
        p {
          // text-align: left;
          font-size: (25 / @vw);
          font-weight: 700;
          color: rgb(250, 35, 10);
        }
      }
    }
  }
}
// 相关产品 结束

//  点击回到顶部 开始

.backtop {
  position: fixed;
  right: (30 / @vw);
  top: 85%;
  width: (80 / @vw);
  height: (80 / @vw);
}
//  点击回到顶部 结束

// 收藏弹层
.mask {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 20;
  .icon1 {
    .cl(430);
    top: 50%;
    width: (430 / @vw);
    padding: (10 / @vw) 0;
    transform: translateY(-50%);
    background-color: rgba(0, 0, 0, 0.8);
    color: #fff;
    text-align: center;
    font-size: (20 / @vw);
    border-radius: (20 / @vw);
    p {
      line-height: (60 / @vw);
      padding-bottom: (10 / @vw);
      border-bottom: 1px solid #ccc;
      font-size: (20 / @vw);
    }
    .btn {
      display: flex;
      justify-content: space-evenly;
      line-height: (60 / @vw);
      span {
        color: #ccc;
      }
    }
  }
  .icon2 {
    display: flex;
    justify-content: space-evenly;
    position: absolute;
    top: 20%;
    .cl(300);
    width: (300 / @vw);
    padding: (10 / @vw);
    background-color: rgba(0, 0, 0, 0.8);
    border-radius: (10 / @vw);
    a {
      .setwh(80,74);
      margin: (10 / @vw);
      background: url(../../assets/img/share_but.png) no-repeat 0 (-74 / @vw);
      background-size: (76 / @vw) (444 / @vw);
    }
    a:nth-child(2) {
      background-position: 0 0;
    }
    a:nth-child(3) {
      background-position: 0 (-222 / @vw);
    }
  }
}
</style>
