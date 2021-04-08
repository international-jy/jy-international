<template>
  <div class="xw-box">
    <div class="box">
      <div class="top">
        <div class="top-lt" @click="go(-1)">
          <img src="@/assets/img/return.png" />
        </div>
        <div class="top-rt">
          <div class="tit-icon1" @click="collect">
            <img src="@/assets/img/tit_icon1.png" />
          </div>
          <div class="tit-icon2" @click="share">
            <img src="@/assets/img/tit_icon2.png" />
          </div>
        </div>
      </div>
      <div
        :class="{ mask: flag, dn: !flag }"
        @touchmove.prevent
        @mousewheel.prevent
        @click="closeMask"
      >
        <div :class="{ icon1: num == 1, dn: num != 1 }">
          <p>收藏失败,您还没有登录,登录后请您重新收藏</p>
          <div class="btn">
            <a href="#">登录</a>
            <a href="#">注册</a>
            <a href="###" class="close" @click="closeMask">关闭</a>
          </div>
        </div>
        <div :class="{ icon2: num == 2, dn: num != 2 }">
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
      <div class="newsList" v-for="(item, k) in activeDate" :key="k">
        <h2>{{ item.title }}</h2>
        <div class="text">
          <p v-for="(val, index) in item.list" :key="index" v-html="val"></p>
          <br />
          <div class="exhibition">
            <img src="@/assets/img/news_list_1.png" />
          </div>
          <br />
          <p>
            成都锦缘国际夜总会各种模特佳丽【预定电话-13688143752】，设备齐全，装修高端，资源丰富，生意每天开到爆，欢迎随时预定包厢～地处市中心繁华地段，重金打造，属成都最大最奢华的娱乐俱乐部，高端的客户，奢华的硬件，优质的服务造就了高端商务KTV，目前为止成都夜场生意最火爆，最稳定的商务会所，包房天天爆满，最具实力营销团队，高端人群聚集地，http://www.comektv.com/。
          </p>
          <br />
        </div>
      </div>
      <div class="text-line"></div>
      <div class="newsShare newsList">
        <h2>
          <span>推荐</span>
          <hr />
        </h2>
        <ul class="recommend">
          <li>
            <a href="#">
              <div class="pic"><img src="@/assets/img/qq_icon.jpg" /></div>
              <p>QQ空间</p>
            </a>
          </li>
          <li>
            <a href="#">
              <div class="pic"><img src="@/assets/img/weibo_icon.png" /></div>
              <p>新浪微博</p>
            </a>
          </li>
          <li>
            <a href="#">
              <div class="pic"><img src="@/assets/img/renren_icon.png" /></div>
              <p>人人网</p>
            </a>
          </li>
          <li>
            <a href="#">
              <div class="pic"><img src="@/assets/img/dou_icon.png" /></div>
              <p>豆瓣</p>
            </a>
          </li>
        </ul>
      </div>
      <div class="pageBtn">
        <a href="###">上一篇</a>
        <a href="02.html">下一篇</a>
      </div>
    </div>
  </div>
</template>

<style lang="less">
@import "../../assets/less/base.less";
img {
  width: auto;
}
.xw-box {
  background-repeat: repeat-y;
  background-position: left top;
  background-size: 100% auto;
  background-color: #f5f5f5;
  overflow: hidden;
  .box {
    min-width: 320px;
    max-width: 768px;
    padding: (100 / @vw) 0;
    margin: 0 auto;
    overflow: hidden;
    z-index: 2;
    .top {
      position: fixed;
      top: 0;
      display: flex;
      justify-content: space-between;
      align-items: center;
      width: 100%;
      max-width: 768px;
      margin: 0 auto;
      height: (100 / @vw);
      background: #fafafa;
      border-bottom: 1px solid #ededed;
      z-index: 10;
      .top-lt {
        position: relative;
        .setwh(40,44);
        margin-left: (40 / @vw);
        img {
          position: absolute;
          height: 100%;
        }
      }
      .top-rt {
        display: flex;
        align-items: center;
        .tit-icon1,
        .tit-icon2 {
          width: (56 / @vw);
          margin-right: (40 / @vw);
          img {
            width: 100%;
          }
        }
      }
    }
    .mask {
      .lt();
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
          a {
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
        span {
          .setwh(80,74);
          margin: (10 / @vw);
          background: url(../../assets/img/share.png) no-repeat 0 (-74 / @vw);
          background-size: (76 / @vw) (444 / @vw);
        }
        span:nth-child(2) {
          background-position: 0 0;
        }
        span:nth-child(3) {
          background-position: 0 (-222 / @vw);
        }
      }
    }
    .newsList {
      background: #fff;
      overflow: hidden;
      padding: (20 / @vw);
      margin-bottom: (20 / @vw);
      h2 {
        padding: (20 / @vw) 0;
        line-height: (60 / @vw);
        text-align: center;
        font-size: (40 / @vw);
        font-weight: bold;
      }
      .text {
        margin-bottom: (20 / @vw);
      }
      p {
        color: rgb(34, 34, 34);
        font-family: Arial, Verdana, sans-serif;
        font-size: (24 / @vw);
        white-space: normal;
        line-height: (60 / @vw);
        text-indent: 2em;
      }
      .exhibition {
        text-align: center;
        img {
          max-width: 100%;
          height: auto;
        }
      }
    }
    .text-line {
      border-top: 1px solid #ededed;
      padding: 0;
      line-height: (70 / @vw);
      text-align: left;
    }
    .newsShare {
      h2 {
        height: (60 / @vw);
        line-height: (72 / @vw);
        margin-bottom: (20 / @vw);
        position: relative;
        text-align: center;
        font-weight: 400;
        span {
          display: inline-block;
          font-size: (32 / @vw);
          background: #fff;
          padding: (4 / @vw) (20 / @vw);
        }
        hr {
          margin-top: (-40 / @vw);
          border: 1px solid #dbdbdb;
        }
      }
      .recommend {
        display: flex;
        justify-content: center;
        li {
          width: 20%;
          margin: 0 (20 / @vw);
          a {
            display: block;
            width: 100%;
            height: 100%;
            text-align: center;
          }
          .pic {
            margin-bottom: (10 / @vw);
            padding: 0 (20 / @vw);
            text-align: center;
            img {
              max-width: 100%;
              height: auto;
            }
          }
          p {
            padding-bottom: (40 / @vw);
            text-align: center;
            font-size: (24 / @vw);
            height: (40 / @vw);
            overflow: hidden;
            text-indent: 0;
          }
        }
      }
    }
    .pageBtn {
      display: flex;
      justify-content: space-between;
      padding: (20 / @vw) (40 / @vw);
      overflow: hidden;
      background-color: #fff;
      font-size: (32 / @vw);
      a {
        display: inline-block;
        line-height: (80 / @vw);
        text-align: center;
        width: (240 / @vw);
        border-radius: (10 / @vw);
        border: 1px solid #ccc;
        color: #000;
      }
    }
  }
}
</style>
<script>
export default {
  data() {
    return {
      flag: false,
      num: 0,
      listDate: [
        {
          id: 1,
          title: "夜总会招聘模特条件改掉这些习惯",
          list: [
            "夜总会模特丰厚的薪资，总会吸引着无数青春靓的女孩前来应聘，当然，这些青春靓丽的女孩儿在应聘之前，心中也会有一丝忧虑，总担心自己无法胜任这份工作，无法应聘成功。",
            "一，学会化妆。",
            "女孩再来夜场夜总会招聘应聘模特之前，一定要学会化妆，给自己画一个合适的妆容，让自己有信心，当然有的女孩说了成都夜总会，自己从来没化过妆，或者有的女孩认为自己天生丽质，不需要化妆，其实化妆也是对她人的一种尊重，尤其是来夜场应聘模特，我们必须要给自己画一个合适的妆容，这样应聘成功的几率会更大。",
            "二，思想前卫。",
            '夜场模特这个职业需要的是思想前卫的女孩，如果你的思想过于保守，<router-link to="/news"><strong>成都夜场</strong></router-link> 那么小编还是建议你不要来应聘，你会无法胜任模特这个职业，在夜总会里，处处都是时尚的气息，所以你要能够接受这些时尚的元素，要敢于去追求时尚，否则你无法融入这里的环境。',
            "表演或是讲话配上一些肢体语言，那是非常的生动的，但面试时，个别求职者由于某些不拘小节的不良习惯，破坏了自己的形象，使面试的效果大打折扣，导致求职成都酒吧失败。",
            "手：这个部位最易出毛病，如双手总是不安稳，忙个不停，做些玩弄领带，挖鼻，抚弄头发，掰关节，玩弄考官递过来的名片等动作。",
            "脚：神经质般不住晃动，前伸，翘起等，不仅人为地制造紧张气氛，而且显得心不在焉，相当不礼貌。",
            "背：哈着腰，弓着背，似一个“刘罗锅”，考官如何对你有信心。",
          ],
        },
        {
          id: 2,
          title: "夜场模特说话技巧如何打动面试官",
          list: [
            "夜场是很多女孩儿的梦想摇篮，女孩的很多梦想都可以在这个摇篮中实现，所以越来越多的女孩都想在夜场工作，毕竟在这里可以赚取她们想要的工资，这里可以让她们过上，她们自己想要的生活，有的女孩儿夜场做模特，做得非常顺畅，收入颇多，然而，相比之下，有的女孩却做的有些坎坷，究其原因主要是女孩在夜场做模特的说话技巧。",
            "一，说我成都夜总会们，在夜场做模特的女孩，在和客户说话的时候都称之为我们如何如何，而不是你如何如何，使用我们可以拉近自己和客户之间的关系，彼此之间没有距离感，但是，使用你们，则会无形中扩大模特与客户之间的距离。",
            "二，学会赞美别人。",
            "每一个人都喜欢听一些赞美的话，来夜场的客户更是如此，她们来这里是放松心情的，咱们在这里更想听到的成都夜场是赞美的话，所以作为夜场的模特，要学会赞美别人，可以赞美客户的风度，可以赞美客户的着装，可以赞美客户的学识，可以赞美客户的阅历，总之，赞美客户的方方面面，毕竟赞美可以让客户心情愉悦。",
            '想求职，首先第一关是简历，如何让简历为自己赢得更多的机会，求职前，在你的专业领域你一定有心仪的企业吧，<router-link to="/news"><strong>成都夜场</strong></router-link>利用闲暇时间不妨针对这个企业做个深入调查研究，当然如果你有精力还可以做个行业调查。',
            "在招聘会现场，如何让招聘企业的负责人对你印象深刻，专家介绍，招聘会现场的自我介绍其实很关键，最好事先做好准备，在现场最多用20秒钟介绍自己的姓名，学校，专业，然后根据招聘的岗位和职务介绍出自己的优势或强项，这样可以在最短时间内激发起招聘企业对你的好感。",
          ],
        },
      ],
      activeDate: [],
    };
  },
  created: function () {
    this.activeDate.push(
      this.listDate.find((val) => val.id == this.$route.query.id)
    );
  },
  methods: {
    go(step) {
      this.$router.go(step);
    },
    collect: function () {
      this.flag = true;
      this.num = 1;
    },
    share: function () {
      this.flag = true;
      this.num = 2;
    },
    closeMask: function () {
      this.flag = false;
      this.num = 0;
    },
  },
};
</script>
