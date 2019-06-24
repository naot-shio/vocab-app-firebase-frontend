import React from "react";
import { Link } from "react-router-dom";
import AuthenticationIcon from "../auth/AuthenticationIcon";
import Footer from "./Footer";

// styles
import useStyles from "../../styles/pages/HomeStyles";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInfoCircle } from "@fortawesome/free-solid-svg-icons";

// Redux
import { connect } from "react-redux";

function Home(props) {
  const classes = useStyles();
  const { authenticated } = props.user;
  return (
    <div className={classes.root}>
      <div className={classes.main}>
        <Grid container>
          <Grid item sm={2} xs={1} />
          <Grid item sm={8} xs={10}>
            <h1 className={classes.title}>ちょっと難しい英単語</h1>
            <h3 className={classes.subtitle}>ボキャブラリーを増やして</h3>
            <h3 className={classes.subtitle}>英語をもっと上手に</h3>
            <h3 className={classes.subtitle}>使えるようにしよう！</h3>

            <Link to="/sentences">
              <Button
                variant="contained"
                color="primary"
                size="large"
                className={classes.button}
              >
                はじめる
              </Button>
            </Link>

            <div>
              <h5>
                &#x203B; ユーザ登録すると文の検索とお気に入り登録ができます。
              </h5>
            </div>
          </Grid>
          <Grid item sm={2} xs={1}>
            <div className={classes.auth}>
              {!authenticated && <AuthenticationIcon />}
            </div>
          </Grid>
        </Grid>
      </div>
      <div className={classes.recommendation}>
        <h3 className={classes.recommendationTitle}>
          こんな人におすすめです。
        </h3>
        <ul className={classes.recommendationBody}>
          <li>
            TOEICでいい点数取れるのにネイティブの英語がなかなか理解できない
          </li>
          <li>英語力を上げたい</li>
          <li>英語で勉強してみたい</li>
          <li>国際結婚したい</li>
          <li>市販の単語帳では簡単すぎる</li>
        </ul>
      </div>

      <div className={classes.profile}>
        <h3>どんなサイト？</h3>
        <ul>
          <li>
            管理人が英単語とその英単語を使った文章を適当にあげていく英単語帳です。
          </li>
          <li>毎日５文くらい追加していく予定です。</li>
          <li>
            基本的に外国のドラマを見たり、本やwebサイトなどを読んだりしているときに出会った英語表現を載せていきます。
          </li>
          <li>
            訳は結構てきとうです。翻訳家ではないし、厳密に訳せても特に意味がないので。
          </li>
          <li>単語の意味は文章内で使われている意味しか載せていません。</li>
          <li>
            より詳しい単語の意味を知りたい場合は、単語の横の
            <span>
              <FontAwesomeIcon icon={faInfoCircle} />
            </span>
            を押すとgoogle辞書を開けるようにしてありあます。
          </li>
        </ul>
      </div>
      <div className={classes.recommendation}>
        <h3>ユーザー登録すると何ができる？</h3>
        <ul>
          <li>
            お気に入りボタンを使うことができ、お気に入りの文章だけを表示できます。
          </li>
          <li>また単語を検索することができます。</li>
          <li>のちのちクイズ形式で問題を解けるようにしていきます。</li>
        </ul>
      </div>
      <div className={classes.profile}>
        <h3>管理人の英語力</h3>
        <ul>
          <li>
            ニュージーランドのビクトリア大学ウェリントンという大学を卒業しています。
          </li>
          <li>留学前に受けたIELTSは7点でした。</li>
          <li>
            計７年ほど海外で生活をしていたのに、ネイティブとは程遠いところにいます。
          </li>
        </ul>
      </div>
      <Footer />
    </div>
  );
}

const mapStateToProps = state => ({
  user: state.user
});

export default connect(mapStateToProps)(Home);
