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
import { loginUser } from "../../redux/actions/userActions";

function Home(props) {
  const classes = useStyles();
  const { authenticated } = props.user;

  const handleClick = () => {
    const userData = {
      email: "test@example.com",
      password: "password"
    };
    props.loginUser(userData);
    props.history.push("/sentences");
  };
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
                単語一覧に行く
              </Button>
            </Link>

            <Button
              variant="contained"
              color="secondary"
              size="large"
              className={classes.button}
              onClick={handleClick}
            >
              簡単ログイン
            </Button>

            <div>
              <h5>
                &#x203B; ユーザ登録すると文の検索とお気に入り登録ができます。
                また英訳の問題を解くことができます。
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
          <li>語彙力を強化したい</li>
          <li>英語力を上げたい</li>
          <li>英語で勉強してみたい</li>
          <li>国際結婚したい</li>
        </ul>
      </div>

      <div className={classes.profile}>
        <h3>どんなサイト？</h3>
        <ul>
          <li>
            管理人が英単語とその英単語を使った文章を適当にあげていく英単語帳です。
          </li>
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
      <Footer />
    </div>
  );
}

const mapStateToProps = state => ({
  user: state.user
});

export default connect(
  mapStateToProps,
  { loginUser }
)(Home);
