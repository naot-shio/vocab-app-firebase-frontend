import React, { useState } from "react";
import AuthenticationIcon from "../auth/AuthenticationIcon";
import Login from "../auth/Login";
import SignUp from "../auth/SignUp";
import Footer from "./Footer";

// styles
import useStyles from "../../styles/pages/HomeStyles";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInfoCircle } from "@fortawesome/free-solid-svg-icons";
import sideImage from "../../images/sideImage.png";

// Redux
import { connect } from "react-redux";
import { loginUser } from "../../redux/actions/userActions";

function Home(props) {
  const [login, setLogin] = useState(false);
  const classes = useStyles();
  const { authenticated } = props.user;

  const handleMoveUpToSignUp = () => {
    setLogin(false);
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };
  return (
    <>
      <main className={classes.main}>
        <Grid container className={classes.header}>
          <Grid item lg={2} md={2} sm={1} xs={1} />
          <Grid item lg={6} md={7} sm={7} xs={10}>
            <h1 className={classes.title}>１万語レベル英単語</h1>
            <h4 className={classes.subtitle}>
              ボキャブラリーを増やして、英語を上達させよう
            </h4>
          </Grid>

          <Grid item lg={4} md={3} sm={4} xs={1}>
            <div className={classes.authenticationButton}>
              {!authenticated && <AuthenticationIcon />}
            </div>

            <div className={classes.authenticationContainer}>
              <div className={classes.authenticationForm}>
                {login ? <Login /> : <SignUp />}
              </div>

              <Button
                onClick={() => setLogin(!login)}
                size="small"
                color="primary"
                className={classes.authToggleButton}
              >
                {login ? "Create an account" : "You have an account?"}
              </Button>
            </div>
          </Grid>
        </Grid>

        <Grid container className={classes.explanationContainer}>
          <Grid item xs={12} className={classes.explanationTitle}>
            <h3>１万語レベルとは</h3>
          </Grid>

          <Grid item xs={12} md={4}>
            <img
              src={sideImage}
              alt="img"
              size="sm"
              className={classes.explanationImage}
            />
          </Grid>
          <Grid item xs={12} md={8} className={classes.explanation}>

            <h5>
              <a
                href="https://www.economist.com/johnson/2013/05/29/lexical-facts"
                target="_blank"
                rel="noopener noreferrer"
              >
                The Economist
              </a>
              の調査によると、英語が母国語の成人はおおよそ20,000語から35,000語、8歳児で10,000語知っっています。
            </h5>

            <h5>
              一方で、日本で学習するのは10,000語ほどです。
              10,000語しか知らないと、英語が母国語の人たちの話す内容を理解するのはとても困難です。
            </h5>

            <h5>
              英語の学習理由は人それぞれだと思いますが、
              ここでは英語がネイティブの人たちの話している内容を、
              ほとんど理解できるということを目標にしています。
            </h5>
          </Grid>
        </Grid>

        <Grid container className={classes.featureContainer}>
          <Grid item xs={12} className={classes.featureTitle}>
            <h3>３つの特徴</h3>
          </Grid>

          <Grid item sm xs={12} className={classes.feature}>
            <Card className={classes.card}>
              <CardContent>
                <Typography
                  variant="h6"
                  color="primary"
                  className={classes.featureTitle}
                >
                  問題
                </Typography>
                <Typography variant="body1" className={classes.featureContent}>
                  記憶を定着させるために、翻訳の問題を解くことができます。
                  解きたい問題数を指定できます。また問題は文章からランダムに出てきます。
                </Typography>
              </CardContent>
            </Card>
          </Grid>

          <Grid item sm xs={12} className={classes.feature}>
            <Card className={classes.card}>
              <CardContent>
                <Typography
                  variant="h6"
                  color="primary"
                  className={classes.featureTitle}
                >
                  例文
                </Typography>
                <Typography variant="body1" className={classes.featureContent}>
                  英単語のみを覚えるのではなく、例文と一緒に覚えるようにします。
                  そうすることによって、覚えた単語をスムーズに使うことができます。
                </Typography>
              </CardContent>
            </Card>
          </Grid>

          <Grid item sm xs={12} className={classes.feature}>
            <Card className={classes.card}>
              <CardContent>
                <Typography
                  variant="h6"
                  color="primary"
                  className={classes.featureTitle}
                >
                  辞書
                </Typography>
                <Typography variant="body1" className={classes.featureContent}>
                  単語は文章で使われている意味しか載せていません。より正確で幅広い単語の意味を知りたい場合は
                  単語の左横にある
                  <FontAwesomeIcon icon={faInfoCircle} />
                  ボタンを押して下さい。
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        </Grid>

        <div className={classes.navigationContainer}>
          <h3 className={classes.navigationTitle}>さっそく始める</h3>
          <Button
            variant="contained"
            color="primary"
            onClick={handleMoveUpToSignUp}
          >
            Sign Up
          </Button>
        </div>
      </main>

      <Footer />
    </>
  );
}

const mapStateToProps = state => ({
  user: state.user
});

export default connect(
  mapStateToProps,
  { loginUser }
)(Home);
