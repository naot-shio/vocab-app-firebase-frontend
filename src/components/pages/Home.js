import React from "react";
import { Link } from "react-router-dom";
import AuthenticationIcon from "../auth/AuthenticationIcon";
import Footer from "./Footer";

// styles
import useStyles from "../../styles/pages/HomeStyles";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import Tooltip from "@material-ui/core/Tooltip";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faInfoCircle } from "@fortawesome/free-solid-svg-icons";
import sideImage from '../../images/sideImage.png'

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
            <Grid container>
              <Grid item sm={4} xs={1}>
                <img src={sideImage} alt="img" size="sm" className={classes.sideImage} />
              </Grid>
              <Grid item sm={8} xs={11} className="titleContainer">
                <h2 className={classes.subtitle}>パラフレーズで学ぶ</h2>
                <h1 className={classes.title}>ちょっと難しい英単語</h1>

                <Link to="/sentences">
                  <Tooltip title="Take a look at words without logging in">
                  <Button
                    variant="contained"
                    color="primary"
                    size="large"
                    className={classes.button}
                  >
                    Take a look
                  </Button>
                  </Tooltip>
                </Link>

                <Tooltip title="You can log in as a test user, so your data in this account can be changed by anybody">
                <Button
                  variant="contained"
                  color="secondary"
                  size="large"
                  className={classes.button}
                  onClick={handleClick}
                >
                Explore
                </Button>
                </Tooltip>
              </Grid>
            </Grid>

            <div>
              <h5 className={classes.explanation}>
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
