import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import md5 from 'crypto-js/md5';
import logo from '../assets/logo-trivia.png';
import './Header.css';

class Header extends React.Component {
  handleAvatar = () => {
    const { email } = this.props;
    const emailHash = md5(email).toString();
    const avatarLink = `https://www.gravatar.com/avatar/${emailHash}`;
    return avatarLink;
  }

  render() {
    const { name, score } = this.props;
    return (
      <div className="navbar-fixed">
        <nav>
          <div className="nav-wrapper grey lighten-3">
            <img id="navbar-logo" src={ logo } alt="Logo Trivia" />
            <div className="right">
              <img
                id="header-profile-picture"
                data-testid="header-profile-picture"
                className="circle responsive-img"
                src={ this.handleAvatar() }
                alt="Avatar"
                />
            </div>
            <ul className="right">
              <li>
                <a data-testid="header-player-name" className="grey-text text-darken-4">{ name }</a>
              </li>
              <li>
                <a data-testid="header-score" className="grey-text text-darken-4">Score: {score}</a>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    );
  }
}

Header.propTypes = {
  name: PropTypes.string,
  email: PropTypes.string,
  score: PropTypes.number,
}.isRequired;

const mapStateToProps = (state) => ({
  name: state.player.name,
  email: state.player.gravatarEmail,
  score: state.player.score,
});

export default connect(mapStateToProps)(Header);
