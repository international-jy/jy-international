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

    <!-- 相关内容 开始 -->
    <div class="correlation" :class="seachFlag ? '' : 'dn'">
      <div class="correlation-top">
        <img src="@/assets/img/no_results.png" class="no-results" />
      </div>
      <p>未找到相关内容</p>
    </div>
    <!-- 相关内容 结束 -->
  </div>
</template>
<script>
export default {
  data() {
    return {
      seachName: "",
      title: "",
      modelList: [],
      seachFlag: true,
    };
  },
  methods: {
    onClickDelete: function () {
      this.seachName = "";
      if (!this.seachName) {
        this.seachFlag = false;
      }
    },
    getName: function () {
      if (this.seachName) {
        this.title = "";
        if (!this.title) {
          this.modelList.forEach((val) => {
            if (val.title.indexOf(this.seachName) != -1) {
              this.title = this.seachName;
            }
          });
        }
        if (this.title) {
          this.$router.push({
            path: "/environment/environmentseach",
            query: {
              titleName: this.title,
            },
          });
          this.seachName = "";
        } else {
          this.seachFlag = true;
          this.$router.push({ path: "/environment/environmentseachN" });
          this.seachName = "";
        }
      }
    },
    onClickSetName: function () {
      this.getName();
    },
    onClickRet: function () {
      this.$router.push({ path: "/environment" });
    },
  },
  created() {
    let that = this;
    this.$axios
      .get("index.php/api/ambient/list?pageNumber=1&pageSize=6")
      .then((val) => {
        that.modelList = val.data;
      });
    this.$axios
      .get("index.php/api/ambient/list?pageNumber=1&pageSize=6")
      .then((val) => {
        val.data.forEach((item) => {
          that.modelList.push(item);
        });
      });
  },
};
</script>
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
// 相关内容
.correlation {
  padding: (80 / @vw);
  background-color: #fff;
  overflow: hidden;
  text-align: center;
  .correlation-top {
    padding: (10 / @vw) (40 / @vw);
    img {
      .setwh(320,201);
    }
  }
  p {
    font-size: (30) / @vw;
    color: #999;
  }
}
</style>
